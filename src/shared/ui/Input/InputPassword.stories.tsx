import type { Meta, StoryObj } from '@storybook/react-vite';

import { InputPassword } from './InputPassword';

const meta: Meta<typeof InputPassword> = {
  title: 'Form/InputPassword',
  component: InputPassword,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Плавающий заголовок' },
    placeholder: { control: 'text', description: 'Подсказка внутри поля' },
    error: { control: 'text', description: 'Сообщение об ошибке' },
    disabled: { control: 'boolean' },
    rounded: { control: 'boolean' },
    value: { control: 'text' },
    className: { control: false },
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Размер поля',
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled'],
      description: 'Стиль поля',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputPassword>;
export const Default: Story = {
  args: {
    label: 'Пароль',
    placeholder: 'Введите пароль',
  },
};

export const WithError: Story = {
  args: {
    label: 'Пароль',
    placeholder: 'Введите пароль',
    error: 'Неверный пароль',
  },
};
