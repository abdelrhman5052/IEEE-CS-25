import { useLayoutEffect, useRef } from "react";

function Box() {
  const boxRef = useRef();

  useLayoutEffect(() => {
    boxRef.current.style.transform = "scale(2)";
  }, []);

  return <div ref={boxRef}>Box</div>;
}
