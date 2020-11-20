/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import LeftArrow from '../client/LeftArrow.jsx';

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

it ('calls handleArrowClick when clicked', () => {
  const clickHandler = jest.fn();
  const page = 2;
  act(() => {
    render(
      <LeftArrow
        onClick={clickHandler}
        name="leftArrow"
        data-testid="leftArrow"
        disabled={page <= 1}
      />, container
    );
  });

  const leftArrow = document.querySelector('[data-testid=leftArrow]');

  act(() => {
    leftArrow.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(clickHandler).toHaveBeenCalledTimes(1);

});