import { type InputHTMLAttributes, forwardRef, useId, useImperativeHandle, useRef } from 'react';

import clsx from 'clsx';

import styles from './inputPassword.module.scss';

import { useToggle } from '../../hooks/useToggle';
import { EyeToggle } from '../EyeToggle';
import { InputWrapper, type InputWrapperProps } from './InputWrapper';
import { InputSize, InputVariant } from './types';

export interface InputPasswordProps
  extends InputHTMLAttributes<HTMLInputElement>,
    Omit<InputWrapperProps, 'children'> {}

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  (
    {
      label,
      error,
      className = '',
      rounded = true,
      inputSize = InputSize.md,
      variant = InputVariant.filled,
      disabled,
      ...rest
    },
    ref
  ) => {
    const passwordRef = useRef<HTMLInputElement>(null);
    const textRef = useRef<HTMLInputElement>(null);
    const showPassword = useToggle();
    const id = useId();

    useImperativeHandle(ref, () => {
      return (showPassword.value ? textRef.current : passwordRef.current) as HTMLInputElement;
    }, [showPassword.value]);

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      if (passwordRef.current) passwordRef.current.value = value;
      if (textRef.current) textRef.current.value = value;
    };

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
        inputWrapperClassName={styles.inputWrapperPassword}
        rightIcon={
          <EyeToggle
            open={showPassword.value}
            toggle={showPassword.toggle}
            className={clsx(styles.eyeToggle, error && styles.eyeToggle_error)}
          />
        }
        labelTop
      >
        <input
          id={id}
          ref={passwordRef}
          onInput={handleInput}
          type="password"
          className={clsx(
            styles.input,
            styles.inputPassword,
            disabled && styles.input_disabled,
            error && styles.input_error,
            styles[`input_${inputSize}`],
            !showPassword.value && styles.inputPassword_visible
          )}
          {...rest}
        />
        <input
          ref={textRef}
          onInput={handleInput}
          type="text"
          className={clsx(
            styles.input,
            styles.inputText,
            disabled && styles.input_disabled,
            error && styles.input_error,
            styles[`input_${inputSize}`],
            showPassword.value && styles.inputText_visible
          )}
          {...rest}
        />
      </InputWrapper>
    );
  }
);
