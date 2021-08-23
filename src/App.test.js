import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  test('renders App', () => {
    expect(true).toEqual(false);
    const div = document.createElement('div');
    render(
      <Router>
        <App />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
