/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import SuggestedProductsCarousel from '../client/SuggestedProductsCarousel.jsx';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it ('does not render carousel if there are no items to display in state', () => {
  act(() => {
    render(<SuggestedProductsCarousel similarDisplayed={[]} />, container);
  });
  expect(container.textContent).toBe('');
});