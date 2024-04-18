import { render } from '@testing-library/react';

import JobPage from './JobPage';

describe('JobPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JobPage />);
    expect(baseElement).toBeTruthy();
  });
});
