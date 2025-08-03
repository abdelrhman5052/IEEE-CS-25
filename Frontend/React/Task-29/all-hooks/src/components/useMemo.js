import { useMemo, useState } from "react";

function ExpensiveComponent({ num }) {
  const factorial = useMemo(() => {
    console.log("Calculating...");
    return factorialOf(num);
  }, [num]);

  return <p>Factorial: {factorial}</p>;
}

function factorialOf(n) {
  return n <= 1 ? 1 : n * factorialOf(n - 1);
}
