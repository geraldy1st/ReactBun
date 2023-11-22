import fetchUser from "./githubApi";

(async () => {
  const userData = await fetchUser("geraldy1st");
  document.querySelector("p").innerHTML = JSON.stringify(userData);
})();

import React from 'react';
import {createRoot} from 'react-dom'
const root = createRoot(document.getElementById('root'))

const App = () => {
    const [count, setCount] = React.useState(0)
    return (
        <div>
            <h1>React with Bun</h1>
            <h2>Count: {count}</h2>
            <button onClick={ () => setCount(count + 1)}>Increment</button>
        </div>
    )
}

root.render(<App />);