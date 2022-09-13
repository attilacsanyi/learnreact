import { render } from '@testing-library/react';

import { BusinessCard } from './business-card';

describe('BusinessCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BusinessCard baseUrl="/" />);
    expect(baseElement).toBeTruthy();
  });
});
