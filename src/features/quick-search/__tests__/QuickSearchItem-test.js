import React from 'react';
import { mount } from 'enzyme';

import QuickSearchItem from '../QuickSearchItem';

describe('features/quick-search/QuickSearchItem', () => {
    const itemData = {
        iconType: 'boxnote',
        id: '321',
        name: 'hitesting.boxnote',
        nameWithMarkedQuery: 'hi<mark>test<mark>ing.boxnote',
        parentName: 'parent',
        type: 'file',
        updatedBy: 'Yo',
        updatedDate: 123,
    };

    test('should render datalist item', () => {
        const wrapper = mount(<QuickSearchItem className="test" itemData={itemData} data-resin-query="test" />);

        expect(wrapper.find('DatalistItem').hasClass('quick-search-item')).toBe(true);
        expect(wrapper.find('DatalistItem').hasClass('test')).toBe(true);
        expect(wrapper.find('DatalistItem').prop('data-resin-query')).toEqual('test');
    });

    test.each([
        ['file', 'txt', null, 1, false, '/file/321'],
        ['file', 'txt', 'http://www.google.com', 1, false, 'http://www.google.com'],
        ['file', 'boxnote', null, 1, true, '/notes/321'],
        ['folder', null, null, 1, false, '/folder/321'],
        ['web_link', null, null, 1, true, '/web_link/321'],
        ['foo', 'text', null, 0, false, false],
    ])(
        'should render file type %s with %s extension correctly',
        (type, extension, sharedLink, expectedHrefLength, expectedTargetBlank, expectedHref) => {
            const itemDataType = {
                ...itemData,
                extension,
                type,
                sharedLink,
            };
            const wrapper = mount(<QuickSearchItem itemData={itemDataType} />);
            const itemName = wrapper.find('a.item-name');
            expect(itemName.length).toEqual(expectedHrefLength);

            if (expectedHrefLength) {
                const { target, href } = itemName.props();
                if (expectedTargetBlank) {
                    expect(target).toEqual('_blank');
                } else {
                    expect(target).toEqual(undefined);
                }
                expect(href).toEqual(expectedHref);
            }
        },
    );

    test('should render item icon', () => {
        const wrapper = mount(<QuickSearchItem itemData={itemData} />);
        const icon = wrapper.find('ItemIcon');

        expect(icon.prop('iconType')).toEqual(itemData.iconType);
        expect(icon.prop('title')).toBeTruthy();
    });

    test('should render item name', () => {
        const wrapper = mount(<QuickSearchItem itemData={itemData} />);
        const itemName = wrapper.find('a.item-name');
        const searchTerm = itemName.children();

        expect(itemName.prop('title')).toEqual(itemData.name);
        expect(itemName.text()).toEqual(itemData.name);
        expect(searchTerm.is('mark.search-term')).toBe(true);
        expect(searchTerm.text()).toEqual('test');
    });

    test('should render search matches with spaces properly', () => {
        const multiMarkItemData = {
            ...itemData,
            nameWithMarkedQuery: 'hi<mark>test<mark>in<mark>g<mark>.boxnote',
        };
        const wrapper = mount(<QuickSearchItem itemData={multiMarkItemData} />);
        const itemName = wrapper.find('a.item-name');
        const searchTerm = itemName.children();

        expect(itemName.text()).toEqual(multiMarkItemData.name);

        expect(searchTerm.length).toEqual(2);
    });

    test('should render parent folder icon', () => {
        const wrapper = mount(<QuickSearchItem itemData={itemData} />);

        expect(wrapper.find('IconSmallFolder').prop('title')).toBeTruthy();
    });

    test('should render parent name', () => {
        const wrapper = mount(<QuickSearchItem itemData={itemData} />);

        expect(wrapper.find('.parent-folder').text()).toEqual(itemData.parentName);
    });

    test('should render parent name with parentFolderRenderer when specified', () => {
        const renderer = data => <a className="parent-folder">{data.parentName}</a>;
        const wrapper = mount(<QuickSearchItem itemData={itemData} parentFolderRenderer={renderer} />);

        expect(wrapper.find('a.parent-folder').text()).toEqual(itemData.parentName);
    });

    test('should not render parent folder or separator if no parentName or parentFolderRenderer', () => {
        const itemDataWithoutParent = {
            ...itemData,
            parentName: undefined,
            parentFolderRenderer: undefined,
        };
        const wrapper = mount(<QuickSearchItem itemData={itemDataWithoutParent} />);

        expect(wrapper.find('.item-subtext')).toMatchSnapshot();
    });

    test('should render updated text', () => {
        const wrapper = mount(<QuickSearchItem itemData={itemData} />);
        const updatedText = wrapper.find('.txt-ellipsis');

        expect(updatedText.prop('title')).toBeTruthy();
        expect(updatedText.text()).toBeTruthy();
    });
});
