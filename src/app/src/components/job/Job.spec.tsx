import { render } from '@testing-library/react';

import Job from './Job';

describe('Job', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Job />);
    expect(baseElement).toBeTruthy();
  });
});
