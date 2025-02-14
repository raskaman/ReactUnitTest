import React, { useState } from "react";

const Counter = ({ count }) => {
  return (
    <div>
      <p>
        Count: <span data-testid="count">{count}</span>
      </p>
    </div>
  );
};

export default Counter;