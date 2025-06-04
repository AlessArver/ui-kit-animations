import clsx from 'clsx';
import { Eye, EyeClosed } from 'lucide-react';

import styles from './index.module.scss';

export interface EyeToggleProps {
  open?: boolean;
  toggle: () => void;
  className?: string;
}
export const EyeToggle = ({ open, toggle, className }: EyeToggleProps) => {
  return (
    <button
      type="button"
      onClick={toggle}
      className={clsx(styles.button, className)}
      tabIndex={-1}
      aria-label={open ? 'Скрыть пароль' : 'Показать пароль'}
    >
      <div className={styles.container}>
        <EyeClosed className={clsx(styles.iconClosed, open && styles.iconClosed_visible)} />
        <Eye className={clsx(styles.iconOpen, !open && styles.iconOpen_visible)} />
      </div>
    </button>
  );
};
