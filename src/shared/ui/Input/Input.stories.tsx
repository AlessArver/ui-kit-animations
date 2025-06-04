import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './Input';
import { InputVariant } from './types';

const meta: Meta<typeof Input> = {
  title: 'Form/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Плавающий заголовок' },
    placeholder: { control: 'text', description: 'Подсказка внутри поля' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
      description: 'Тип поля',
    },
    error: { control: 'text', description: 'Сообщение об ошибке' },
    disabled: { control: 'boolean' },
    rounded: { control: 'boolean' },
    value: { control: 'text' },
    className: { control: false },
    size: {
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
type Story = StoryObj<typeof Input>;
export const Default: Story = {
  args: {
    label: 'Имя',
    placeholder: 'Введите имя',
    variant: InputVariant.outlined,
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'example@mail.com',
    error: 'Неверный формат email',
    type: 'email',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Имя',
    placeholder: 'Вы не можете редактировать',
    disabled: true,
  },
};
