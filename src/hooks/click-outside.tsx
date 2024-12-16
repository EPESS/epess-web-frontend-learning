import { RefObject, useEffect } from 'react'

const useClickOutSide = (ref: RefObject<HTMLElement | null>, callback: () => void) => {
    if (ref) {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                callback()
            }
        }
        useEffect(() => {
            document.addEventListener('click', handleClick);
            return () => {
                document.removeEventListener('click', handleClick);
            };
        });
    }

}

export default useClickOutSide