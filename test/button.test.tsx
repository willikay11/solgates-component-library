import { render } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from '../stories/Button.stories';

const { Default} = composeStories(stories);
test('render primary button', () => {
    render(<Default />);
    const buttonElement = screen.getByText(/Default/i);
    expect(buttonElement).not.toBeNull();
})