import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CanapesCard } from '../components/canapesCard';
import cap1 from '../../public/cap1.png';
import digicap1 from '../../public/digicap1.png';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Custom/Card',
  component: CanapesCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof CanapesCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CanapesCard> = (args) => <CanapesCard {...args} />;

export const Vitamincanape = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Vitamincanape.args = {
  item: {
    name: 'Vitamin A',
    author: 'AIMSIR Studio',
    chain: 'TBD ETH',
    waitlist: true,
    imgSrc: cap1,
    },
};

export const DigitalCanapes = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DigitalCanapes.args = {
  item: {
    name: 'Canapé#1',
    author: 'Jérémy Hervo',
    chain: 'TBD ETH',
    waitlist: true,
    imgSrc: digicap1,
    },
};

export const AdamG = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AdamG.args = {
  item: {
    name: 'Anglerfish 2019',
    author: 'Adam G',
    chain: 'TBD ETH',
    waitlist: true,
    imgSrc: cap1,
    },
};

export const news = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
news.args = {
  item: {
    category: 'artwork, digital canapes',
    name: 'Crypto Canapés Art Submission',
    waitlist: false,
    date: '2021-10-11',
    imgSrc: digicap1,
    },
};

