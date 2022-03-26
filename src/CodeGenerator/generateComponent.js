var Skeleton = require("skeleton-code-generator");

var init = () => {
  var name = process.argv[2] || "addName";
  const skeleton = {
    name,
    files: [
      {
        name: `${name}.tsx`,
        content: ComponentBody(name),
      },
    ],
    subfolders: [],
  };

  Skeleton.generateFromJSON(__dirname, skeleton);
};

const randomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ComponentBody = (name) =>
  `import styled from "styled-components"
  
  export const ${name} = () => {
    return (
      <${name}Container>${name}</${name}Container>
    )
  }
  
  const ${name}Container = styled.div\`
    background-color: ${randomColor()};
  \`
  `;

init();
