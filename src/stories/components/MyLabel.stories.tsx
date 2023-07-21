import { MyLabel } from '../../components/MyLabel';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {

   title: 'UI/Labels/MyLabel',
   component: MyLabel,
   tags: ['autodocs'],

   argTypes: {
      size: { control: 'select' },
      color: { control: 'select' },
      fontWeight: { control: 'radio' },
      fontColor: { control: 'color' }
   },

} satisfies Meta< typeof MyLabel >;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
   args: {
      size: 'normal',
      allCaps: false,
   },
};

export const AllCaps: Story = {
   args: {
      size: 'normal',
      allCaps: true
   },
};

export const Secondary: Story = {
   args: {
      size: 'normal',
      color: 'secondary'
   },
};

export const Tertiary: Story = {
   args: {
      size: 'normal',
      color: 'tertiary' // primary | secondary | tertiary
   },
};

export const CustomFontColor: Story = {
   args: {
      size: 'h1',
      fontColor: '#5517ac'
   },
};
