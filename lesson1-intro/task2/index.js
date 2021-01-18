//index.js

const rootElement = document.querySelector('#root');

const element = (
  <div className="greeting">
    <div className="greeting__title">Hello, world!</div>
    <div className="greeting__text">I'm learning React</div>
  </div>
);
/* const renderGreeting = (elem) => {
  const containerElem = document.createElement("div");
  containerElem.classList.add("greeting");

  const titleElem = document.createElement("h1");
  titleElem.classList.add("greeting__title");
  titleElem.textContent = "Hello, world!";

  const textElem = document.createElement("p");
  textElem.classList.add("greeting__text");
  textElem.textContent = "I'm learning React";

  containerElem.append(titleElem, textElem);

  elem.append(containerElem);
};

renderGreeting(rootElement); */

/* const element = React.createElement(
  'div',
  { className: 'greeting' },

  React.createElement(
    'h1',
    { className: 'greeting__title' },
    'Hello, world!'
  ),

  React.createElement(
    'p',
    { className: 'greeting__text' },
    "I'm learning React"
  ),
); */

ReactDOM.render(element, rootElement);

