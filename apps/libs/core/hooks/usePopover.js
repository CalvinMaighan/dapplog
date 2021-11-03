import { POPOVER_CHILDREN } from '../remix/bubbles';
import { useBubbleOwner } from './remix/useBubbleOwner';

export const usePopover = (ref_id) => {
  const [popoverActive, setPopoverActive] = useBubbleOwner(POPOVER_CHILDREN, {
    isOpen: false,
    active: '',
  });

  const setIsOpen = (isOpen) => {
    setPopoverActive({
      isOpen,
      active: ref_id,
    });
  };

  return [popoverActive, setIsOpen];
};
