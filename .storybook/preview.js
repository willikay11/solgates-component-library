import '../tailwind.css';
// import { Preview } from '@storybook/react';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  options: {
    storySort: {
      order: ['General','Data Entry', ['Text', 'Number', "Password", "TextArea", "Checkbox", "Radio Button", "Select", "File Upload", "PhoneNumber", "Input Error"], 'Navigation', 'Data Display'],
    }
  }
};