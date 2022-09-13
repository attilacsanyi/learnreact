import { render } from '@testing-library/react';

import ReactFacts from './react-facts';

describe('ReactFacts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactFacts />);
    expect(baseElement).toBeTruthy();
  });
});
