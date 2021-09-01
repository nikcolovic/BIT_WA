var div = document.getElementById("root");
let items = ["1 cup Fresh Basil", "1 cup Pine Nuts", "2 cups Butter Lettuce", "1 Yellow Squash", "3 cloves of Garlic"]
var ul = React.createElement("ul", null, items.map((item, i) => React.createElement("li", { key: i }, item)));
let ol = React.createElement("ol", null, items.map((item, i) => React.createElement("li", { key: i }, item)));

var dogUrl = 'https://dog.ceo/api/breeds/image/random';
fetch(dogUrl).then(response => {
    return response.json();
}).then(response => {
    let img = React.createElement('img', { key: 'img', src: response.message });
    ReactDOM.render([ul, ol, img], div)
})

/* var dish = React.createElement("h1", null, "Pesto Pasta")

ReactDOM.render(dish, document.getElementById('react-container'))

import React from "react";

export default function App() {
  return React.createElement(
    "ul",
    null,
    React.createElement("li", null, "1 cup Fresh Basil"),
    React.createElement("li", null, "1 cup Pine Nuts"),
    React.createElement("li", null, "2 cups Butter Lettuce"),
    React.createElement("li", null, "1 Yellow Squash"),
    React.createElement("li", null, "1/2 cup Olive Oil"),
    React.createElement("li", null, "3 cloves of Garlic")
  );
}

 */