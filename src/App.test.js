import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ReactDOM from "react-dom";
import store from './store';
import App from './App';

describe("Describe", () => {
	test('renders learn react link', () => {
		const { getByText } = render(
		  <Provider store={store}>
			<App />
		  </Provider>
		);
		expect(getByText("MY RECIPES")).toBeInTheDocument();
	  });
	  
	  test('renders without crashing', () => {
		  const app = document.createElement('div');
		  expect(app).toMatchSnapshot() /* This is our snapshot */
		  ReactDOM.unmountComponentAtNode(app);
	  });	  
});

