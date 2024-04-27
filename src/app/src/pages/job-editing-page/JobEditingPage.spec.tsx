import { render } from '@testing-library/react';

import JobEditingPage from './JobEditingPage';

describe('JobEditingPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JobEditingPage />);
    expect(baseElement).toBeTruthy();
  });
});
