function Contact() {
  return (
    <>
      <div>
        <h1>Contact Us</h1>
        <p>Please contact us @ 7457056515</p>

        <h2>React Imports: Named and Unnamed</h2>
        <p>
          <strong>Unnamed Import (Default Export):</strong> Used when a module
          exports a single default value.
        </p>
        <pre>
          <code>{`import React from 'react';`}</code>
        </pre>
        <p>Example: Importing the default export from React.</p>

        <p>
          <strong>Named Import:</strong> Used for specific exports from a module.
        </p>
        <pre>
          <code>{`import { useState, useEffect } from 'react';`}</code>
        </pre>
        <p>Example: Importing specific hooks from React.</p>

        <h2>Props in React.js</h2>
        <p>
          <strong>What are Props?</strong> Props (short for properties) are
          read-only data passed from parent components to child components. They
          allow components to be reusable and dynamic.
        </p>
        <p>Props are immutable; child components cannot modify them directly.</p>

        <h3>Types of Props:</h3>
        <ul>
          <li>
            <strong>String Props:</strong>
          </li>
          <pre>
            <code>{`<ChildComponent name="John" />`}</code>
          </pre>

          <li>
            <strong>Number Props:</strong>
          </li>
          <pre>
            <code>{`<ChildComponent age={25} />`}</code>
          </pre>

          <li>
            <strong>Boolean Props:</strong>
          </li>
          <pre>
            <code>{`<ChildComponent isActive={true} />`}</code>
          </pre>

          <li>
            <strong>Object Props:</strong>
          </li>
          <pre>
            <code>{`<ChildComponent user={{name: "John", age: 25}} />`}</code>
          </pre>

          <li>
            <strong>Array Props:</strong>
          </li>
          <pre>
            <code>{`<ChildComponent items={["item1", "item2"]} />`}</code>
          </pre>

          <li>
            <strong>Function Props:</strong>
          </li>
          <pre>
            <code>{`<ChildComponent onClick={handleClick} />`}</code>
          </pre>

          <li>
            <strong>JSX Props:</strong>
          </li>
          <pre>
            <code>{`<ChildComponent><p>Content</p></ChildComponent>`}</code>
          </pre>

          <p>
            <strong>Explanation:</strong> Anything written between a component’s
            opening and closing tags is passed as a special prop called{" "}
            <code>children</code>. So the above is the same as:
          </p>
          <pre>
            <code>{`<ChildComponent children={<p>Content</p>} />`}</code>
          </pre>

          <p>Inside the child component, you can access it like this:</p>
          <pre>
            <code>{`
function ChildComponent(props) {
  return (
    <div>
      <h2>This is Child Component</h2>
      {props.children} {/* renders the nested JSX */}
    </div>
  );
}
`}</code>
          </pre>

          <p>
            <strong>Real-life Example:</strong> Imagine creating a reusable Card
            component:
          </p>
          <pre>
            <code>{`
function Card(props) {
  return (
    <div style={{border: "1px solid gray", padding: "10px", borderRadius: "5px"}}>
      {props.children}
    </div>
  );
}

// Usage
function App() {
  return (
    <Card>
      <h3>Title inside Card</h3>
      <p>This is card content passed as children.</p>
    </Card>
  );
}
`}</code>
          </pre>
        </ul>

        <h3>Using Props in Components:</h3>
        <p>In functional components, access props via parameters.</p>
        <pre>
          <code>{`
function ChildComponent(props) {
  return <div>Hello, {props.name}!</div>;
}
`}</code>
        </pre>

        <p>Or using destructuring:</p>
        <pre>
          <code>{`
function ChildComponent({ name, age }) {
  return <div>{name} is {age} years old.</div>;
}
`}</code>
        </pre>

        <h3>Default Props:</h3>
        <p>Set default values for props.</p>
        <pre>
          <code>{`
ChildComponent.defaultProps = {
  name: "Guest"
};
`}</code>
        </pre>
<h2 className="text-xl font-semibold mt-6 mb-2">Default Props:</h2>
<p className="mb-4">
  Default props allow you to set <strong>fallback values</strong> for props in case they are not provided. 
  This helps prevent <code>undefined</code> values.
</p>

<pre><code>{`
function ChildComponent(props) {
  return <h2>Hello, {props.name}!</h2>;
}

// Setting default props
ChildComponent.defaultProps = {
  name: "Guest"
};

// Usage
<ChildComponent name="Akshit" />   // Output: Hello, Akshit!
<ChildComponent />                 // Output: Hello, Guest
`}</code></pre>
<p className="mb-4">
  <strong>Important:</strong> Default props should be defined on the component itself, 
  not inside the parent. This way, the component always knows its fallback values.
</p>

<pre><code>{`
function ChildComponent(props) {
  return <h2>Hello, {props.name}!</h2>;
}

// ✅ Correct: set defaults on the component
ChildComponent.defaultProps = {
  name: "Guest"
};

function ParentComponent() {
  return (
    <div>
      <ChildComponent name="Akshit" />  {/* Hello, Akshit! */}
      <ChildComponent />                {/* Hello, Guest */}
    </div>
  );
}
`}</code></pre>

<p className="mb-4">
  ❌ Avoid setting <code>defaultProps</code> inside the parent component — 
  it should always be attached directly to the child component definition.
</p>

        <h3>PropTypes for Validation:</h3>
        <p>Use PropTypes to validate prop types.</p>
        <pre>
          <code>{`
import PropTypes from 'prop-types';

ChildComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};
`}</code>
        </pre>
        

        <h2>The Spread Operator (...) in React</h2>
        <p>
          <strong>What is the Spread Operator?</strong> The spread operator (...)
          allows an iterable (like an array or object) to be expanded into
          individual elements.
        </p>
        <p>
          In React, it's commonly used for spreading props, copying
          objects/arrays, and merging data.
        </p>

        <h3>Examples:</h3>
        <p>
          <strong>Spreading Props:</strong> Pass all props from parent to child.
        </p>
        <pre>
          <code>{`
function Parent(props) {
  return <Child {...props} />;
}
`}</code>
        </pre>

        <p>
          <strong>Copying Arrays:</strong>
        </p>
        <pre>
          <code>{`
const original = [1, 2, 3];
const copy = [...original];
`}</code>
        </pre>

        <p>
          <strong>Merging Objects:</strong>
        </p>
        <pre>
          <code>{`
const obj1 = {a: 1};
const obj2 = {b: 2};
const merged = {...obj1, ...obj2};
`}</code>
        </pre>

        <p>
          <strong>In JSX:</strong> Spreading attributes.
        </p>
        <pre>
          <code>{`
const attrs = {type: "text", placeholder: "Enter name"};
<input {...attrs} />
`}</code>
        </pre>
      </div>
    </>
  );
}

export default Contact;
