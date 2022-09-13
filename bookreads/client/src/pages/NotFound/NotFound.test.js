import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';

import NotFound from './NotFound';

test('renders correctly', () => {
    render(<NotFound />);

    const headingErrorCode = screen.getByRole('heading', { level: 1 });
    expect(headingErrorCode).toBeInTheDocument();

    const headingElement = screen.getByRole('heading', { level: 3 });
    expect(headingElement).toBeInTheDocument();

    const componentMessage = screen.getByText(/The resource requested could not be found on this server :\(/i);
    expect(componentMessage).toBeInTheDocument();
});