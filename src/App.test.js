import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from './Redux/configureStore';
import App from './App';

const APP = (
  <Provider store={store}>
    <App />
  </Provider>
);

describe('App Renders test', () => {
  it('Renders App', () => {
    const app = renderer.create(APP).toJSON();
    expect(app).toMatchSnapshot();
  });
});