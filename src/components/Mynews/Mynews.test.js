import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Mynews from './Mynews';

describe('<Mynews />', () => {
  test('it should mount', () => {
    render(<Mynews />);

    const Mynews = screen.getByTestId('Mynews');

    expect(Mynews).toBeInTheDocument();
  });
});