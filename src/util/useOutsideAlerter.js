import { useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref.
 * See https://stackoverflow.com/a/42234988/9727894
 * @param {Ref} ref The element to listen for
 * @param {function} callback The function to run when the element is clicked outside of
 */
export default function useOutsideAlerter(ref, callback) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}