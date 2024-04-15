import { render } from '@testing-library/react';

import ViewAllJobs from './ViewAllJobs';

describe('ViewAllJobs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ViewAllJobs />);
    expect(baseElement).toBeTruthy();
  });
});
