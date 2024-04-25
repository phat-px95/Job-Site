import { render } from '@testing-library/react';

import JobAddingPage from './JobAddingPage';

describe('JobAddingPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JobAddingPage />);
    expect(baseElement).toBeTruthy();
  });
});
