import { useState } from "react";
import React from "react";

export const Application = () => {
    const [count, setCount] = useState(0);

    return (<div>
        <h1>Test</h1>
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </div>
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
        </p>
    </div>);
};
