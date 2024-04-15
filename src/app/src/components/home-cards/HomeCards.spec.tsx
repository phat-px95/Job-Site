import { render } from '@testing-library/react';

import Homecards from './HomeCards';

describe('Homecards', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Homecards />);
    expect(baseElement).toBeTruthy();
  });
});
