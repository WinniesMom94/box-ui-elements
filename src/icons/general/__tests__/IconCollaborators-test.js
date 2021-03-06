import React from 'react';

import IconCollaborators from '../IconCollaborators';

describe('icons/general/IconCollaborators', () => {
    test('should correctly render default icon', () => {
        const wrapper = shallow(<IconCollaborators />);

        expect(wrapper.hasClass('icon-collaborators')).toEqual(true);
    });

    test('should correctly render icon with specified color', () => {
        const color = '#ffffff';
        const wrapper = shallow(<IconCollaborators color={color} />);

        expect(wrapper.find('g').prop('stroke')).toEqual(color);
    });

    test('should correctly render icon with specified width and height', () => {
        const width = 16;
        const height = 17;
        const wrapper = shallow(<IconCollaborators width={width} height={height} />);

        expect(wrapper.find('AccessibleSVG').prop('width')).toEqual(width);
        expect(wrapper.find('AccessibleSVG').prop('height')).toEqual(height);
    });

    test('should correctly render icon with title', () => {
        const title = 'fool';
        const wrapper = shallow(<IconCollaborators title={title} />);

        expect(wrapper.find('AccessibleSVG').prop('title')).toEqual(title);
    });
});
