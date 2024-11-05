import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import header from './header';

describe('<header />', () => {
  test('it should mount', () => {
    render(<header />);

    const header = screen.getByTestId('header');

    expect(header).toBeInTheDocument();
  });
});