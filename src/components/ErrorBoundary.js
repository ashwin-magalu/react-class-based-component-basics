/* Error Boundary */
import React from "react";

const ErrorBoundary = ({ heroName }) => {
  if (heroName === "Joker") {
    throw new Error("Joker is not a hero");
  }
  return <div>{heroName}</div>;
};

export default ErrorBoundary;
