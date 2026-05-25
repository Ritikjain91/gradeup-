import React from 'react';
import { useTheme } from '../ThemeContext/Themecontext';

const Services = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`p-6 min-h-screen ${
        darkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded border mb-6"
      >
        {darkMode ? "Light" : "Dark"}
      </button>

      <p className="text-5xl text-center font-bold">
        JavaScript Mastery Short Notes
      </p>

      <p className="text-lg mt-9 text-center">
        JavaScript interview short notes designed for quick revision. This section covers the most important JavaScript concepts frequently asked in technical interviews, including variables, data types, functions, arrays, objects, DOM manipulation, event handling, promises, async/await, closures, hoisting, scope, callbacks, event loop, debouncing, throttling, ES6 features, and more. These notes are useful for both beginners and experienced developers who want fast and effective interview preparation.
      </p>

      <p className="text-3xl mt-9 text-center font-bold">
        What is JavaScript?
      </p>

      <p className="text-lg mt-9 text-center">
        JavaScript is a high-level, dynamic, prototype-based programming language used to create interactive and modern web applications. It runs inside web browsers and also in server-side environments such as Node.js. JavaScript allows developers to handle user interactions, update webpage content dynamically, manipulate the DOM, make API requests, and perform asynchronous operations. It supports multiple programming styles, including object-oriented, functional, and imperative programming.
      </p>

      <p className="text-3xl mt-9 text-center font-bold">
        Why is JavaScript Dynamic?
        <span className="text-red-500 text-sm ml-1 align-super">
          (IMP FOR INTERVIEW)
        </span>
      </p>

      <p className="text-lg mt-9 text-center">
        JavaScript is called a dynamic language because many operations are resolved during runtime instead of before execution. It uses dynamic typing, meaning a variable can hold different data types at different times. Objects can be changed while the program is running by adding, updating, or deleting properties. Functions are first-class objects, so they can be stored in variables, passed as arguments, and returned from other functions. This runtime flexibility makes JavaScript highly adaptable for building dynamic applications.
      </p>

      <div className="text-center mt-9">
        <pre
          className={`text-left p-4 rounded-lg overflow-x-auto ${
            darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
          }`}
        >
<code>{`
let data = 10;        // Number
console.log(data);

data = "Hello";       // String
console.log(data);

data = true;          // Boolean
console.log(data);
`}</code>
        </pre>
      </div>
    </div>
  );
};

export default Services;