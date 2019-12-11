import React from "react";
import { useSelector } from "react-redux";

const Test = () => {
  const post = useSelector(state => state.post.loading);
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
};

export default Test;
