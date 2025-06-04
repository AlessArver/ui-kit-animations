import { useState } from 'react';

export const useToggle = (defaultValue = false) => {
  const [value, setValue] = useState(defaultValue);

  return {
    value,
    set: () => setValue(true),
    unset: () => setValue(false),
    toggle: () => setValue((prev) => !prev),
  };
};
