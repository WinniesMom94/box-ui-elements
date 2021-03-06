import React from 'react';
import sinon from 'sinon';

import Tooltip from '../Tooltip';

const sandbox = sinon.sandbox.create();

describe('components/tooltip/Tooltip', () => {
    const getWrapper = props =>
        shallow(
            <Tooltip text="hi" {...props}>
                <div>Hello</div>
            </Tooltip>,
        );

    afterEach(() => {
        sandbox.verifyAndRestore();
    });

    describe('render()', () => {
        test('should render with close button if isShown and showCloseButton are true', () => {
            expect(
                getWrapper({
                    isShown: true,
                    showCloseButton: true,
                }),
            ).toMatchSnapshot();
        });

        test('should not render the close button if wasClosedByUser state is true', () => {
            const wrapper = getWrapper({
                isShown: true,
                showCloseButton: true,
            });
            wrapper.setState({ wasClosedByUser: true });
            expect(wrapper).toMatchSnapshot();
        });

        test('should not render with close button if showCloseButton is false', () => {
            expect(
                getWrapper({
                    isShown: true,
                    showCloseButton: false,
                }),
            ).toMatchSnapshot();
        });

        test('should not render with close button if isShown is false', () => {
            const wrapper = getWrapper({
                isShown: false,
                showCloseButton: true,
            });
            wrapper.setState({ isShown: true });
            expect(wrapper).toMatchSnapshot();
        });

        test('should render correctly with callout theme', () => {
            expect(
                getWrapper({
                    isShown: true,
                    theme: 'callout',
                }),
            ).toMatchSnapshot();
        });

        test('should render default component', () => {
            const wrapper = shallow(
                <Tooltip text="hi">
                    <button />
                </Tooltip>,
            );
            const component = wrapper.children();

            expect(wrapper.is('TetherComponent')).toBe(true);
            expect(wrapper.prop('attachment')).toEqual('bottom center');
            expect(wrapper.prop('constraints')).toEqual([
                {
                    to: 'window',
                    attachment: 'together',
                },
            ]);
            expect(wrapper.prop('enabled')).toBe(false);
            expect(wrapper.prop('targetAttachment')).toEqual('top center');

            expect(component.is('button')).toBe(true);
            expect(component.prop('onBlur')).toBeTruthy();
            expect(component.prop('onFocus')).toBeTruthy();
            expect(component.prop('onKeyDown')).toBeTruthy();
            expect(component.prop('onMouseEnter')).toBeTruthy();
            expect(component.prop('onMouseLeave')).toBeTruthy();
            expect(component.prop('tabIndex')).toEqual('0');
        });

        test('should show tooltip when isShown state is true', () => {
            const wrapper = shallow(
                <Tooltip text="hi">
                    <button />
                </Tooltip>,
            );
            wrapper.setState({ isShown: true });

            const component = wrapper.childAt(0);
            const tooltip = wrapper.childAt(1);
            expect(wrapper.prop('enabled')).toBe(true);
            expect(tooltip.is('div')).toBe(true);
            expect(tooltip.hasClass('tooltip')).toBe(true);
            expect(component.prop('aria-describedby')).toEqual(tooltip.prop('id'));
            expect(tooltip.text()).toEqual('hi');
        });

        test('should render tooltip class when specified', () => {
            const wrapper = shallow(
                <Tooltip text="hi" className="testing" isShown>
                    <button />
                </Tooltip>,
            );

            expect(wrapper.find('[role="tooltip"]').hasClass('testing')).toBe(true);
        });

        test('should constrain to scroll parent when specified', () => {
            const wrapper = shallow(
                <Tooltip text="hi" constrainToScrollParent>
                    <button />
                </Tooltip>,
            );

            expect(wrapper.prop('constraints')).toEqual([
                {
                    to: 'scrollParent',
                    attachment: 'together',
                },
                {
                    to: 'window',
                    attachment: 'together',
                },
            ]);
        });

        test('should render correct attachments when position is specified', () => {
            const wrapper = shallow(
                <Tooltip text="hi" position="middle-right">
                    <button />
                </Tooltip>,
            );

            expect(wrapper.prop('attachment')).toEqual('middle left');
            expect(wrapper.prop('targetAttachment')).toEqual('middle right');
        });

        test('should render with a specific body element', () => {
            const bodyEl = document.createElement('div');

            const wrapper = shallow(
                <Tooltip bodyElement={bodyEl} text="hi">
                    <button />
                </Tooltip>,
            );

            expect(wrapper.prop('bodyElement')).toEqual(bodyEl);
        });

        test('should render TetherComponent in the body if invalid body element is specified', () => {
            const wrapper = shallow(
                <Tooltip bodyElement="foo" text="hi">
                    <button />
                </Tooltip>,
            );

            expect(wrapper.prop('bodyElement')).toEqual(document.body);
        });

        test('should show tooltip when isShown prop is true', () => {
            const wrapper = shallow(
                <Tooltip text="hi" isShown>
                    <button />
                </Tooltip>,
            );
            const component = wrapper.childAt(0);
            const tooltip = wrapper.childAt(1);

            expect(wrapper.prop('enabled')).toBe(true);
            expect(component.prop('onBlur')).toBeFalsy();
            expect(component.prop('onFocus')).toBeFalsy();
            expect(component.prop('onKeyDown')).toBeFalsy();
            expect(component.prop('onMouseEnter')).toBeFalsy();
            expect(component.prop('onMouseLeave')).toBeFalsy();
            expect(component.prop('tabIndex')).toBeFalsy();
            expect(tooltip.is('div')).toBe(true);
            expect(tooltip.hasClass('tooltip')).toBe(true);
            expect(component.prop('aria-describedby')).toEqual(tooltip.prop('id'));
            expect(tooltip.text()).toEqual('hi');
        });

        test('should render error class when theme is error', () => {
            const wrapper = shallow(
                <Tooltip text="hi" isShown theme="error">
                    <button />
                </Tooltip>,
            );

            expect(wrapper.find('[role="tooltip"]').hasClass('is-error')).toBe(true);
        });
    });

    describe('handleMouseEnter()', () => {
        test('should correctly handle mouseenter events', () => {
            const onMouseEnter = sinon.spy();
            const wrapper = shallow(
                <Tooltip text="hi">
                    <button onMouseEnter={onMouseEnter} />
                </Tooltip>,
            );

            wrapper.find('button').simulate('mouseenter');
            expect(wrapper.state('isShown')).toBe(true);
            expect(onMouseEnter.calledOnce).toBe(true);
        });
    });

    describe('handleMouseLeave()', () => {
        test('should correctly handle mouseleave events', () => {
            const onMouseLeave = sinon.spy();
            const wrapper = shallow(
                <Tooltip text="hi">
                    <button onMouseLeave={onMouseLeave} />
                </Tooltip>,
            );
            wrapper.setState({ isShown: true });

            wrapper.find('button').simulate('mouseleave');
            expect(wrapper.state('isShown')).toBe(false);
            expect(onMouseLeave.calledOnce).toBe(true);
        });
    });

    describe('handleFocus()', () => {
        test('should correctly handle focus events', () => {
            const onFocus = sinon.spy();
            const wrapper = shallow(
                <Tooltip text="hi">
                    <button onFocus={onFocus} />
                </Tooltip>,
            );

            wrapper.find('button').simulate('focus');
            expect(wrapper.state('isShown')).toBe(true);
            expect(onFocus.calledOnce).toBe(true);
        });
    });

    describe('handleBlur()', () => {
        test('should correctly handle blur events', () => {
            const onBlur = sinon.spy();
            const wrapper = shallow(
                <Tooltip text="hi">
                    <button onBlur={onBlur} />
                </Tooltip>,
            );
            wrapper.setState({ isShown: true });

            wrapper.find('button').simulate('blur');
            expect(wrapper.state('isShown')).toBe(false);
            expect(onBlur.calledOnce).toBe(true);
        });
    });

    describe('handleKeyDown()', () => {
        test('should update isShown state only when escape key is pressed', () => {
            const wrapper = shallow(
                <Tooltip text="hi">
                    <button />
                </Tooltip>,
            );
            wrapper.setState({ isShown: true });

            wrapper.find('button').simulate('keydown', { key: 'Escape' });
            expect(wrapper.state('isShown')).toBe(false);
        });

        test('should not update isShown state only when some other key is pressed', () => {
            const wrapper = shallow(
                <Tooltip text="hi">
                    <button />
                </Tooltip>,
            );
            wrapper.setState({ isShown: true });

            wrapper.find('button').simulate('keydown', { key: 'Space' });
            expect(wrapper.state('isShown')).toBe(true);
        });

        test('should call keydown handler of component when specified', () => {
            const onKeyDown = sinon.spy();
            const wrapper = shallow(
                <Tooltip text="hi">
                    <button onKeyDown={onKeyDown} />
                </Tooltip>,
            );

            wrapper.find('button').simulate('keydown', { key: 'Escape' });
            expect(onKeyDown.calledOnce).toBe(true);
        });
    });
});
