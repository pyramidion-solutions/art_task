import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CustomButton } from '../components/button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Custom/Button',
  component: CustomButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
      // className: { control: 'text' },
  backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof CustomButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomButton> = (args) => <CustomButton {...args} />;

export const Join = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Join.args = {
  name: 'Join',
  className: 'text-white bg-black rounded-lg px-6 h-[36px]'
};

export const Social = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Social.args = {
  name: 'Social',
  className: "text-black bg-white rounded-2xl px-4 h-[36px] border border-black"
};

export const WatchList = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WatchList.args = {
  name: 'Watch List',
  className: "rounded-2xl text-white bg-[#6f6f6f] p-2"
};