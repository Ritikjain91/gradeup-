import React from 'react';
import { useTheme } from '../ThemeContext/Themecontext';
import Scrollbar from '../Scrollbar/Scrollbar';

const Reactjs = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`p-6 min-h-screen ${
        darkMode ? 'bg-black text-white' : 'bg-gray-100 text-black'
      }`}
    >
      <div className="mb-5">
        <Scrollbar />
      </div>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded border mb-6"
      >
        {darkMode ? 'Light' : 'Dark'}
      </button>

      <p className="text-5xl text-center font-bold">
        React Mastery Short Notes
      </p>

      <p className="text-lg mt-9 text-center">
        React interview short notes designed for quick revision. This section covers the most important React concepts frequently asked in technical interviews, including components, JSX, props, state, hooks, lifecycle methods, context API, Redux, virtual DOM, reconciliation, and more. These notes are useful for both beginners and experienced developers who want fast and effective interview preparation.
      </p>

      <p className="text-3xl mt-9 text-center font-bold">
        What is React?
      </p>

      <p className="text-lg mt-9 text-center">
        React is a free and open-source JavaScript library developed by Meta (formerly Facebook). It is used for building interactive and dynamic user interfaces for web and mobile applications. React follows a component-based architecture where the UI is broken down into reusable, independent pieces called components. It uses a virtual DOM to efficiently update and render only the parts of the page that change, resulting in better performance. React supports declarative programming, meaning developers describe what the UI should look like for any given state, and React handles the updates automatically.
      </p>

      <div className="text-center mt-9">
        <pre
          className={`text-left p-4 rounded-lg overflow-x-auto ${
            darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
          }`}
        >
          <code>{`
// Creating a simple React component
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;
          `}</code>
        </pre>
      </div>

      <div className="mt-9">
        <p className="text-3xl text-center font-bold">What is JSX?</p>

        <p className="text-lg mt-6 text-center">
          JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code directly inside JavaScript. JSX makes it easier to create and add HTML elements in React i.e it is a Combination of both JavaScript and html. Under the hood, JSX is transformed into regular JavaScript function calls by tools like Babel. It helps prevent XSS (cross-site scripting) attacks by escaping values before rendering them.
        </p>

        <div className="text-center mt-6">
          <pre
            className={`text-left p-4 rounded-lg overflow-x-auto ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
            }`}
          >
            <code>{`// JSX Example
const element = <h1>Hello, World!</h1>;

// JSX with JavaScript expressions
const name = 'React';
const element = <h1>Hello, {name}</h1>;
            `}</code>
          </pre>
        </div>
      </div>

      <div className="mt-9">
  <p className="text-3xl text-center font-bold">
    What is Babel?
  </p>

  <p className="text-lg mt-6 text-center">
    Babel is a JavaScript compiler that converts JSX into regular
    JavaScript and transforms modern JavaScript features into versions
    supported by older browsers.
  </p>

  <div className="mt-6 flex justify-center">
    <ul
      className={`list-disc list-inside text-lg p-6 rounded-lg ${
        darkMode
          ? 'bg-gray-800 text-white'
          : 'bg-gray-100 text-black'
      }`}
    >
      <li>JSX → JavaScript</li>
      <li>
        Modern JavaScript → Browser-compatible JavaScript
      </li>
    </ul>
  </div>

  <div className="text-center mt-6">
    <pre
      className={`text-left p-4 rounded-lg overflow-x-auto ${
        darkMode
          ? 'bg-gray-800 text-white'
          : 'bg-gray-100 text-black'
      }`}
    >
      <code>{`// JSX Code
const element = <h1>Hello, World!</h1>;

// Babel Converts It To:

const element = React.createElement(
  'h1',
  null,
  'Hello, World!'
);`}</code>
    </pre>
  </div>
</div>

{/* React Rendering Flow */}
<div className="mt-9">
  <p className="text-3xl text-center font-bold">
    React Rendering Flow
  </p>

  <p className="text-lg mt-6 text-center">
    This is the internal process React follows to convert JSX into
    elements displayed on the browser screen.
  </p>

  <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
    {[
      'JSX',
      'Babel',
      'React.createElement()',
      'Virtual DOM',
      'Reconciliation',
      'Actual DOM',
    ].map((step, index) => (
      <React.Fragment key={step}>
        <div
          className={`px-5 py-3 rounded-lg font-semibold text-center ${
            darkMode
              ? 'bg-gray-800 text-white'
              : 'bg-blue-100 text-black'
          }`}
        >
          {step}
        </div>

        {index < 5 && (
          <span className="text-2xl font-bold">
            →
          </span>
        )}
      </React.Fragment>
    ))}
  </div>

  <div className="text-center mt-8">
    <pre
      className={`text-left p-4 rounded-lg overflow-x-auto ${
        darkMode
          ? 'bg-gray-800 text-white'
          : 'bg-gray-100 text-black'
      }`}
    >
      <code>{`JSX Code
   ↓
Babel Compiles It
   ↓
React.createElement(...)
   ↓
Virtual DOM Object
   ↓
Reconciliation (Diffing)
   ↓
Actual DOM Update`}</code>
    </pre>
  </div>

  <div
    className={`mt-6 p-6 rounded-lg ${
      darkMode
        ? 'bg-gray-800 text-white'
        : 'bg-gray-100 text-black'
    }`}
  >
    <ul className="list-disc list-inside space-y-3">
      <li>
        <strong>JSX:</strong> Developers write HTML-like syntax inside
        JavaScript.
      </li>

      <li>
        <strong>Babel:</strong> Converts JSX into regular JavaScript
        function calls.
      </li>

      <li>
        <strong>React.createElement():</strong> Creates React Element
        objects from JSX.
      </li>

      <li>
        <strong>Virtual DOM:</strong> A lightweight JavaScript
        representation of the real DOM.
      </li>

      <li>
        <strong>Reconciliation:</strong> React compares the previous
        Virtual DOM with the new Virtual DOM to identify changes.
      </li>

      <li>
        <strong>Actual DOM:</strong> React updates only the changed
        parts of the browser DOM, improving performance.
      </li>
    </ul>
  </div>

</div>
<div>
  <p className='text-3xl mt-9 text-center font-bold'> What Is Virtual DOM?</p>
  <p className='text-lg mt-6 text-center'>
  The Virtual DOM is a lightweight, in-memory representation of the Real DOM. It is a tree-like structure that React uses to track UI changes. When the state or props change, React creates a new Virtual DOM and compares it with the previous one through a process called reconciliation (diffing). React then updates only the changed nodes in the Real DOM instead of re-rendering the entire DOM, improving performance.
  </p>
  <div className="mt-9">
  <p className="text-3xl text-center font-bold">
    Virtual DOM Update Example
  </p>

  <p className="text-lg mt-6 text-center">
    The following diagram demonstrates how React updates only the changed
    parts of the Real DOM using the Virtual DOM and Reconciliation process.
  </p>

  <div className="text-center mt-6">
    <pre
      className={`text-left p-4 rounded-lg overflow-x-auto ${
        darkMode
          ? 'bg-gray-800 text-white'
          : 'bg-gray-100 text-black'
      }`}
    >
      <code>{`User Click
    │
    ▼
setCount(1)
    │
    ▼
Create New Virtual DOM Tree
    │
    ▼
Compare With Previous Virtual DOM Tree
    │
    ▼
       Reconciliation
              │
              ▼

      App               App
       │                 │
    Fragment         Fragment
     /    \\           /    \\
   h1   button      h1   button
   │       │         │       │
Count:0 Increment Count:1 Increment
   ✗                   ✓

              │
              ▼

Only h1 text node changed
              │
              ▼

Update Real DOM

<h1>Count: 0</h1>
        ↓
<h1>Count: 1</h1>`}</code>
    </pre>
  </div>
</div>
</div>
<div>

</div>
<div>
<p className='text-3xl mt-9 text-center font-bold'>
  What is Reconciliation?
</p>

<p className='text-lg mt-6 text-center'>
  Reconciliation is the algorithm React uses to compare one Virtual DOM tree with another to determine which parts of the UI need to be updated. It identifies the differences between the previous Virtual DOM and the new Virtual DOM and updates only the necessary parts of the Real DOM to improve performance.
  
  <br /><br />

  <strong><i>Update:</i></strong> An update is a change in the data used to render a React application, usually triggered by <code>setState</code> or a state updater function from <code>useState</code>. This eventually causes React to re-render the component.
</p>
<p><i>Reference: <a target="_blank" rel="noopener noreferrer" href="https://github.com/acdlite/react-fiber-architecture">https://github.com/acdlite/react-fiber-architecture</a></i></p>
<p><i>Reference: <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/docs/reconciliation.html">https://reactjs.org/docs/reconciliation.html</a></i></p>
</div>
    </div>
  );
};

export default Reactjs;