import React from "react";
import App from "../App";
import Course from "./Course";

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
      <h4>Total exercises: {totalExercises}</h4>
  );
};

export default Total;

