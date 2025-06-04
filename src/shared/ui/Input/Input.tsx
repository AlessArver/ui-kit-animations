import { forwardRef, useId, useImperativeHandle, useRef, type InputHTMLAttributes } from 'react';

import clsx from 'clsx';

import styles from './input.module.scss';

import { InputWrapper, type InputWrapperProps } from './InputWrapper';
import { InputSize, InputVariant } from './types';

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    Omit<InputWrapperProps, 'children'> {}
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      className = '',
      rounded = true,
      disabled,
      type = 'text',
      inputSize = InputSize.md,
      variant = InputVariant.filled,
      ...rest
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const id = useId();

    useImperativeHandle(ref, () => {
      if (!inputRef.current) throw new Error('Input not mounted');
      return inputRef.current;
    }, []);

    return (
      <InputWrapper
        label={label}
        labelId={id}
        error={error}
        rounded={rounded}
        disabled={disabled}
        inputSize={inputSize}
        variant={variant}
        className={className}
      >
        <input
          ref={inputRef}
          id={id}
          type={type}
          className={clsx(
            styles.input,
            disabled && styles.input_disabled,
            error && styles.input_error,
            styles[`input_${inputSize}`],
            styles[`input_${variant}`]
          )}
          disabled={disabled}
          {...rest}
        />
        <span className={styles.fakePlaceholder}>{rest.placeholder}</span>
      </InputWrapper>
    );
  }
);
