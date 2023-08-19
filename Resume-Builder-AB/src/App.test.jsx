import { render } from "@testing-library/react";
import React from 'react';
import App from "./Pages/About";


import { BrowserRouter } from 'react-router-dom';



test('should render react component', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );


})

