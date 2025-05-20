import { useEffect, useRef, useState } from 'react';

const THROTTLE_INTERVAL = 200;

/**
 * Hook that establishes a central location for multiple components to subscribe to scroll events.
 * Scroll events are throttled to improve performance.
 * @returns An object with `on()` and `off()` methods for subscribing handlers
 */
export default function useScrollEvents() {
    const [handlers, setHandlers] = useState([]);
    const throttleTimeout = useRef(null);

    useEffect(() => {
        const onScroll = (e) => {
            if (throttleTimeout.current !== null) { return; }
            throttleTimeout.current = setTimeout(() => {
                for (const handler of handlers) { handler(e); }
                throttleTimeout.current = null;
            }, THROTTLE_INTERVAL);
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            clearTimeout(throttleTimeout.current);
        };
    }, [handlers]);

    return {
        /**
         * Event handler to subscribe to scroll events. Ensure that the function is wrapped in useCallback().
         * @param {function} handler The handler to assign
         */
        on: (handler) => {
            if (handlers.includes(handler)) { return; }
            setHandlers([...handlers, handler]);
        },
        /**
         * Unsubscribes a handler from scroll events.
         * @param {function} handler The handler to remove
         */
        off: (handler) => {
            if (!handlers.includes(handler)) { return; }
            const newHandlers = [...handlers];
            newHandlers.splice(newHandlers.indexOf(handler));
            setHandlers(newHandlers);
        } 
    };
}