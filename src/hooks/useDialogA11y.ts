import { useEffect } from 'react';

const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function useDialogA11y(isOpen: boolean, onClose: () => void, labelId: string) {

  useEffect(() => {
    if (!isOpen) return;

    const dialog = document.querySelector<HTMLElement>(`[role="dialog"][aria-labelledby="${labelId}"]`);
    if (!dialog) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const focusableElements = () => Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector));
    const firstElement = focusableElements()[0];
    firstElement?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const elements = focusableElements();
      if (!elements.length) {
        event.preventDefault();
        return;
      }
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isOpen, labelId, onClose]);
}
