import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (

    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Product />} />
    <Route path="/core" element={<CoreProduct />} />
  </Routes>
</BrowserRouter>

  );
}

function Product() {
  return (<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSrDytNtQWGG-okdAqzLABY1_UOQQ1aHvwy8G-kCcHclMzafKqoGy3BnS401e_2lFEtceLmtuaXV1fF/embed?start=true&loop=true&delayms=10000" frameborder="0" width="1920" height="1080" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>);
}

function CoreProduct() {
  return (<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTw_BAxaSGp5NnMms-ga91yCDp6bL75RNac1ImAn8fGXSWuIgP6pOZ8qyOnCmcWt8gqzlJxN0JozpN0/embed?start=true&loop=true&delayms=10000" frameborder="0" width="1868" height="1080" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>);
}
