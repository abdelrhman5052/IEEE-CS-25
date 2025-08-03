import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef();

  const focusInput = () => inputRef.current.focus();

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}
