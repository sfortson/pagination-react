import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Title from '../Title';

let container: HTMLDivElement;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
});

test('Title', () => {
  act(() => {
    ReactDOM.render(<Title>Title</Title>, container);
  });
  expect(container).toMatchSnapshot('Default');

  act(() => {
    ReactDOM.render(<Title size={2}>Title</Title>, container);
  });
  expect(container).toMatchSnapshot('Title size 2');

  act(() => {
    ReactDOM.render(
      <Title size={1} spaced>
        Title
      </Title>,
      container
    );
  });
  expect(container).toMatchSnapshot('Title size 1 and spaced');
});

test('Subtitle', () => {
  act(() => {
    ReactDOM.render(<Title subtitle>Subtitle</Title>, container);
  });
  expect(container).toMatchSnapshot('Default Subtitle');

  act(() => {
    ReactDOM.render(
      <Title size={4} subtitle spaced>
        Subtitle
      </Title>,
      container
    );
  });
  expect(container).toMatchSnapshot('Subtitle size 4 is-spaced');
});
