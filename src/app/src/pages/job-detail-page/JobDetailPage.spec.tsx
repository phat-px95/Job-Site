import { render } from '@testing-library/react';

import JobDetailPage from './JobDetailPage';

describe('JobDetailPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JobDetailPage />);
    expect(baseElement).toBeTruthy();
  });
});
