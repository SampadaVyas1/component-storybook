import { useEffect } from 'react';

const useOutsideClick = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  callbackFn: () => void
) => {
  const handleClick = (event: MouseEvent) => {
    if (ref.current && event.target instanceof Node && !ref.current.contains(event.target)) {
      callbackFn?.();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);
};

export default useOutsideClick;
