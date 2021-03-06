// @flow
import * as React from 'react';
import tabbable from 'tabbable';
import classNames from 'classnames';

type Props = {
    children: React.Node,
    className?: string,
    /** Function to get the ref to the focus trap wrapper element */
    getRef?: Function,
    /** Function to handle keyboard input passed in from parent component. e.g. close overlay on Escape */
    handleOverlayKeyDown?: Function,
    shouldDefaultFocus?: boolean,
    shouldOutlineFocus?: boolean,
};

class FocusTrap extends React.Component<Props> {
    componentDidMount() {
        if (this.props.shouldDefaultFocus) {
            setTimeout(() => {
                this.previousFocusEl = document.activeElement;
                this.focusFirstElement();
            }, 0);
        } else {
            setTimeout(() => {
                if (this.el) {
                    this.el.focus();
                }
            }, 0);
        }
    }

    componentWillUnmount() {
        setTimeout(() => {
            if (this.previousFocusEl) {
                this.previousFocusEl.focus();
            }
        }, 0);
    }

    el: ?HTMLDivElement;

    previousFocusEl: ?HTMLElement;

    trapEl: ?HTMLElement;

    /**
     * Focus the first tabbable element
     */
    focusFirstElement = () => {
        if (!this.el) {
            return;
        }

        const tabbableEls = tabbable(this.el);

        // There are three trap-related elements, including first element.
        // If there are 3 or fewer tabbable elements, that means there are no
        // tabbable children, so focus on the trap element instead.
        if (tabbableEls.length > 3) {
            tabbableEls[1].focus();
        } else if (this.trapEl) {
            this.trapEl.focus();
        }
    };

    /**
     * Focus the last tabbable element
     */
    focusLastElement = () => {
        if (!this.el) {
            return;
        }

        const tabbableEls = tabbable(this.el);

        // There are three trap-related elements, including the last two elements.
        // If there are 3 or fewer tabbable elements, that means there are no
        // tabbable children, so focus on the trap element instead.
        if (tabbableEls.length > 3) {
            tabbableEls[tabbableEls.length - 3].focus();
        } else if (this.trapEl) {
            this.trapEl.focus();
        }
    };

    handleElKeyDown = (event: SyntheticKeyboardEvent<HTMLElement>) => {
        const { handleOverlayKeyDown } = this.props;
        if (this.el === document.activeElement && event.key === 'Tab') {
            this.focusFirstElement();
            event.stopPropagation();
            event.preventDefault();
        }

        if (handleOverlayKeyDown) {
            handleOverlayKeyDown(event);
        }
    };

    handleTrapElKeyDown = (event: SyntheticKeyboardEvent<HTMLElement>) => {
        if (event.key !== 'Tab') {
            return;
        }
        event.stopPropagation();
        event.preventDefault();
    };

    render() {
        const {
            children,
            className,
            getRef,
            handleOverlayKeyDown,
            shouldDefaultFocus,
            shouldOutlineFocus,
            ...rest
        } = this.props;
        return (
            <div
                className={classNames(className, {
                    'should-outline-focus': shouldOutlineFocus,
                })}
                ref={ref => {
                    this.el = ref;
                    if (getRef) {
                        getRef(ref);
                    }
                }}
                onKeyDown={this.handleElKeyDown}
                {...rest}
            >
                <i aria-hidden tabIndex="0" onFocus={this.focusLastElement} />
                {children}
                <i aria-hidden tabIndex="0" onFocus={this.focusFirstElement} />
                {/* in case children doesn't contain any focusable elements, focus on trap */}
                <i
                    aria-hidden
                    ref={ref => {
                        this.trapEl = ref;
                    }}
                    tabIndex="0"
                    onKeyDown={this.handleTrapElKeyDown}
                />
            </div>
        );
    }
}

export default FocusTrap;
