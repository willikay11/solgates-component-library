import '../tailwind.css';
// import { Preview } from '@storybook/react';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
// export const parameters = {
//   // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
//   actions: { argTypesRegex: '^on.*' },
//   options: {
//     storySort: {
//       order: ['General','Data Entry', ['Text', 'Number', "Password", "TextArea", "Checkbox", "Radio Button", "Select", "File Upload", "PhoneNumber", "Input Error"], 'Navigation', 'Data Display'],
//     }
//   }
// };
import React from 'react';
import ThemeProvider from "../src/context";

const preview = {
  decorators: [
    (Story, { parameters }) => {
      return (
          <ThemeProvider theme={
              {
                  colors: { primary: '91 33 182', secondary: '234 88 12' }
              }
          }>
            <Story />
          </ThemeProvider>
      );
    },
  ],
}

export default preview;