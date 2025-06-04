import { type JSX, type ReactNode } from 'react';

import styles from './index.module.scss';

export type Variant = 'title' | 'subtitle' | 'body' | 'caption' | 'label' | 'link' | 'code';

const tagMap: Record<string, keyof JSX.IntrinsicElements> = {
  title: 'h1',
  subtitle: 'h2',
  body: 'p',
  caption: 'span',
  label: 'label',
  link: 'a',
  code: 'code',
};

export interface TypographyProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  htmlFor?: string;
  as?: keyof JSX.IntrinsicElements;
}
export const Typography = ({
  variant = 'body',
  children,
  className = '',
  htmlFor,
  as,
}: TypographyProps) => {
  const Tag = as || tagMap[variant] || 'p';

  return (
    <Tag className={`${styles[variant]} ${className}`} htmlFor={htmlFor}>
      {children}
    </Tag>
  );
};
