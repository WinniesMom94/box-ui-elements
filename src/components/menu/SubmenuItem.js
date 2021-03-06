// @flow
import * as React from 'react';
import classNames from 'classnames';
import omit from 'lodash/omit';

import './SubmenuItem.scss';

const SUBMENU_LEFT_ALIGNED_CLASS = 'is-left-aligned';
const SUBMENU_BOTTOM_ALIGNED_CLASS = 'is-bottom-aligned';

type Props = {
    /** An HTMLElement defining the bottom boundary for the submenu */
    bottomBoundaryElement?: HTMLElement,
    children: React.Node,
    className?: string,
    isDisabled?: boolean,
    onClick?: Function,
    /** An HTMLElement defining the right boundary for the submenu */
    rightBoundaryElement?: HTMLElement,
};

type State = {
    isSubmenuOpen: boolean,
    submenuFocusIndex: ?number,
};

/**
 * A menu-item component which triggers open a submenu
 *
 * @NOTE: Nested submenus are NOT currently supported, switching
 * focus with arrow keys in the subsubmenu is not working properly.
 */
class SubmenuItem extends React.Component<Props, State> {
    state = {
        isSubmenuOpen: false,
        submenuFocusIndex: null,
        submenuClasses: [],
    };

    getMenuAlignmentClasses = () => {
        if (!this.submenuTriggerEl || !this.submenuEl) {
            return {};
        }

        const { rightBoundaryElement, bottomBoundaryElement } = this.props;
        const submenuElBounding = this.submenuEl.getBoundingClientRect();
        // $FlowFixMe checked this.submenuEl is set above
        const submenuTriggerElBounding = this.submenuTriggerEl.getBoundingClientRect();
        const rightBoundaryElementBounding = rightBoundaryElement
            ? rightBoundaryElement.getBoundingClientRect()
            : { right: window.innerWidth };
        const bottomBoundaryElementBounding = bottomBoundaryElement
            ? bottomBoundaryElement.getBoundingClientRect()
            : { bottom: window.innerHeight };

        const isLeftAligned =
            submenuTriggerElBounding.right + submenuElBounding.width > rightBoundaryElementBounding.right;
        const isBottomAligned =
            submenuTriggerElBounding.top + submenuElBounding.height > bottomBoundaryElementBounding.bottom;

        return {
            [SUBMENU_LEFT_ALIGNED_CLASS]: isLeftAligned,
            [SUBMENU_BOTTOM_ALIGNED_CLASS]: isBottomAligned,
        };
    };

    handleMenuItemClick = (event: SyntheticKeyboardEvent<>) => {
        const { isDisabled, onClick } = this.props;

        // If aria-disabled is passed as a prop, we should ignore clicks on this menu item
        if (isDisabled) {
            event.stopPropagation();
            event.preventDefault();

            return;
        }

        if (onClick) {
            onClick(event);
        }
    };

    submenuTriggerEl: ?HTMLElement;

    submenuEl: ?HTMLElement;

    handleKeyDown = (event: SyntheticKeyboardEvent<>) => {
        switch (event.key) {
            case ' ': // Spacebar
            case 'Enter':
            case 'ArrowRight':
                event.stopPropagation();
                event.preventDefault();

                this.openSubmenuAndFocus();
                break;
            default:
                break;
        }
    };

    closeSubmenu = () => {
        this.setState({
            isSubmenuOpen: false,
        });
    };

    closeSubmenuAndFocusTrigger = (isKeyboardEvent: ?boolean) => {
        this.closeSubmenu();

        if (this.submenuTriggerEl && isKeyboardEvent) {
            this.submenuTriggerEl.focus();
        }
    };

    openSubmenu = () => {
        this.setState({
            isSubmenuOpen: true,
            submenuFocusIndex: null,
        });
    };

    openSubmenuAndFocus = () => {
        this.setState({
            isSubmenuOpen: true,
            submenuFocusIndex: 0,
        });
    };

    render() {
        const { children, className, isDisabled, ...rest } = this.props;
        const { isSubmenuOpen, submenuFocusIndex } = this.state;

        const elements = React.Children.toArray(children);
        const submenuTriggerContent = elements[0];
        const submenu = elements[1];
        if (elements.length !== 2 || !submenuTriggerContent || !submenu) {
            throw new Error('SubmenuItem must have exactly two children, a trigger component and a <Menu>');
        }

        const menuItemProps = {
            ...omit(rest, ['bottomBoundaryElement', 'onClick', 'rightBoundaryElement', 'role', 'tabIndex']),
            'aria-disabled': isDisabled ? 'true' : undefined,
            'aria-expanded': isSubmenuOpen ? 'true' : 'false',
            'aria-haspopup': 'true',
            className: classNames('menu-item', 'submenu-target', className),
            onClick: this.handleMenuItemClick,
            onMouseLeave: this.closeSubmenu,
            onMouseEnter: this.openSubmenu,
            onKeyDown: this.handleKeyDown,
            ref: ref => {
                this.submenuTriggerEl = ref;
            },
            role: 'menuitem',
            tabIndex: -1,
        };

        const submenuProps: Object = {
            className: classNames(submenu.props.className, 'submenu', this.getMenuAlignmentClasses()),
            initialFocusIndex: submenuFocusIndex,
            // Hide the menu instead of unmounting it. Otherwise onMouseLeave won't work.
            isHidden: !isSubmenuOpen,
            isSubmenu: true,
            onClose: this.closeSubmenuAndFocusTrigger,
            setRef: ref => {
                this.submenuEl = ref;
            },
        };

        return (
            <li {...menuItemProps}>
                {submenuTriggerContent}
                {React.cloneElement(submenu, submenuProps)}
            </li>
        );
    }
}

export default SubmenuItem;
