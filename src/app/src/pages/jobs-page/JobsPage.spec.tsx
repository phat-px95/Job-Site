import { render } from '@testing-library/react';

import { JobsPage } from './JobsPage';

describe('JobPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JobsPage />);
    expect(baseElement).toBeTruthy();
  });
});
