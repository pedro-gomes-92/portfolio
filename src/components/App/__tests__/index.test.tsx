import React from 'react';
import { render } from '@testing-library/react';
import App from '../index';

describe('Given <App />', () => {
  describe('When initializes', () => {
    it('Then should match the snapshot', () => {
      const { container } = render(<App />);
      expect(container).toMatchSnapshot();
    });
  });
});
