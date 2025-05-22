import { useEffect, useRef, useCallback } from 'react';

const THROTTLE_INTERVAL = 100;

/**
 * Hook that establishes a central location for multiple components to subscribe to scroll events.
 * Scroll events are throttled to improve performance.
 * @returns An object with `on()` and `off()` methods for subscribing handlers
 */
export default function useScrollEvents() {
    const handlers = useRef([]);
    const throttleTimeout = useRef(null);

    const onScroll = useCallback((e) => {
        if (throttleTimeout.current !== null) { return; }
        throttleTimeout.current = setTimeout(() => {
            for (const handler of handlers.current) { handler(e); }
            throttleTimeout.current = null;
        }, THROTTLE_INTERVAL);
    }, []);

    /**
     * Event handler to subscribe to scroll events. Ensure that the function is wrapped in `useCallback()`.
     * @param {function} handler The handler to assign
     */
    const on = useCallback((handler) => {
        if (handlers.current.includes(handler)) { return; }
        handlers.current.push(handler);
    }, []);

    /**
     * Unsubscribes a handler from scroll events.
     * @param {function} handler The handler to remove
     */
    const off = useCallback((handler) => {
        if (!handlers.current.includes(handler)) { return; }
        handlers.current.filter(h => h !== handler);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        
        return () => {
            window.removeEventListener('scroll', onScroll);
            clearTimeout(throttleTimeout.current);
        };
    }, [onScroll]);

    return { on, off };
}