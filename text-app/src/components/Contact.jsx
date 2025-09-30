function Contact() {
    return (
        <>
            <div>
                <h1>Contact Us</h1>
                <p>Please contact us @ 7457056515</p>

                <h2>React Imports: Named and Unnamed</h2>
                <p><strong>Unnamed Import (Default Export):</strong> Used when a module exports a single default value.</p>
                <pre><code>import React from 'react';</code></pre>
                <p>Example: Importing the default export from React.</p>

                <p><strong>Named Import:</strong> Used for specific exports from a module.</p>
                <pre><code>import { useState, useEffect } from 'react';</code></pre>
                <p>Example: Importing specific hooks from React.</p>

                <h2>Props in React.js</h2>
                <p><strong>What are Props?</strong> Props (short for properties) are read-only data passed from parent components to child components. They allow components to be reusable and dynamic.</p>
                <p>Props are immutable; child components cannot modify them directly.</p>

                <h3>Types of Props:</h3>
                <ul>
                    <li><strong>String Props:</strong> Passed as strings.</li>
                    <pre><code><ChildComponent name="John" /></code></pre>
                    <li><strong>Number Props:</strong> Passed as numbers.</li>
                    <pre><code><ChildComponent age={25} /></code></pre>
                    <li><strong>Boolean Props:</strong> Passed as booleans.</li>
                    <pre><code><ChildComponent isActive={true} /></code></pre>
                    <li><strong>Object Props:</strong> Passed as objects.</li>
                    <pre><code><ChildComponent user={{name: "John", age: 25}} /></code></pre>
                    <li><strong>Array Props:</strong> Passed as arrays.</li>
                    <pre><code><ChildComponent items={["item1", "item2"]} /></code></pre>
                    <li><strong>Function Props:</strong> Passed as functions for event handling.</li>
                    <pre><code><ChildComponent onClick={handleClick} /></code></pre>
                    <li><strong>JSX Props:</strong> Passed as JSX elements.</li>
                    <pre><code><ChildComponent><p>Content</p></ChildComponent></code></pre>
                </ul>

                <h3>Using Props in Components:</h3>
                <p>In functional components, access props via parameters.</p>
                <pre><code>
function ChildComponent(props) {
   <div>Hello, {props.name}!</div>;
}
                </code></pre>
                <p>Or using destructuring:</p>
                <pre><code>
function ChildComponent({ name, age }) {
    return <div>{name} is {age} years old.</div>;
}
                </code></pre>

                <h3>Default Props:</h3>
                <p>Set default values for props.</p>
                <pre><code>
ChildComponent.defaultProps = {
    name: "Guest"
};
                </code></pre>

                <h3>PropTypes for Validation:</h3>
                <p>Use PropTypes to validate prop types.</p>
                <pre><code>
import PropTypes from 'prop-types';

ChildComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
};
                </code></pre>

                <h2>The Spread Operator (...) in React</h2>
                <p><strong>What is the Spread Operator?</strong> The spread operator (...) allows an iterable (like an array or object) to be expanded into individual elements.</p>
                <p>In React, it's commonly used for spreading props, copying objects/arrays, and merging data.</p>

                <h3>Examples:</h3>
                <p><strong>Spreading Props:</strong> Pass all props from parent to child.</p>
                <pre><code>
function Parent() {
    return <Child {...props} />;
}
                </code></pre>

                <p><strong>Copying Arrays:</strong></p>
                <pre><code>
const original = [1, 2, 3];
const copy = [...original];
                </code></pre>

                <p><strong>Merging Objects:</strong></p>
                <pre><code>
const obj1 = {a: 1};
const obj2 = {b: 2};
const merged = {...obj1, ...obj2};
                </code></pre>

                <p><strong>In JSX:</strong> Spreading attributes.</p>
                <pre><code>
const attrs = {type: "text", placeholder: "Enter name"};
<input {...attrs} />
                </code></pre>
            </div>
        </>
    );
}
export default Contact;
