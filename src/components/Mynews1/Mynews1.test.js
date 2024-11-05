import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Mynews1 from './Mynews1';

describe('<Mynews1 />', () => {
  test('it should mount', () => {
    render(<Mynews1 />);

    const Mynews1 = screen.getByTestId('Mynews1');

    expect(Mynews1).toBeInTheDocument();
  });
});