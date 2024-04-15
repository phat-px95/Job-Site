import { render } from '@testing-library/react';

import JobListing from './JobListing';

describe('JobListing', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JobListing />);
    expect(baseElement).toBeTruthy();
  });
});
