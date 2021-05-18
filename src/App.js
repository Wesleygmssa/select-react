import React, { Component } from "react";

import AsyncSelect from "react-select/async";
// import { colourOptions } from "../data";

const colourOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "Wesley", label: "Wesley" },
  { value: "Wesley", label: "Wallace" },
  { value: "Wesley", label: "Wagner" },
  { value: "Carro", label: "Carro" },
];

const filterColors = (inputValue) => {
  return colourOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = (inputValue) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 3000);
  });

export default class App extends Component {
  render() {
    return <AsyncSelect loadOptions={promiseOptions} />;
  }
}
