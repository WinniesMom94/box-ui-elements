import React from 'react';

import IconCloud from '../IconCloud';

describe('icons/general/IconCloud', () => {
    test('should correctly render default icon', () => {
        const wrapper = shallow(<IconCloud />);

        expect(wrapper.hasClass('icon-cloud')).toEqual(true);
    });

    test('should correctly render icon with specified width and height', () => {
        const width = 16;
        const height = 17;
        const wrapper = shallow(<IconCloud width={width} height={height} />);

        expect(wrapper.find('AccessibleSVG').prop('width')).toEqual(width);
        expect(wrapper.find('AccessibleSVG').prop('height')).toEqual(height);
    });

    test('should correctly render icon with title', () => {
        const title = 'fool';
        const wrapper = shallow(<IconCloud title={title} />);

        expect(wrapper.find('AccessibleSVG').prop('title')).toEqual(title);
    });

    test('should correctly render icon with filter applied', () => {
        const title = 'pity';
        const filter = {
            id: 'test',
            definition: <div />,
        };
        const wrapper = shallow(<IconCloud title={title} filter={filter} />);

        expect(wrapper).toMatchSnapshot();
    });
});
