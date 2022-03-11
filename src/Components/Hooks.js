import React, { useState } from 'react';

function Hooks() {
  
  const [count, setCount] = useState(0);

  return (
    <div className="Hooks">
        <div className="Hook">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      </div>
    </div>
  );
}
export default Hooks;