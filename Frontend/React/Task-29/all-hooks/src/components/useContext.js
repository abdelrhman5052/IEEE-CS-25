import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemedComponent() {
  const theme = useContext(ThemeContext);

  return <div style={{ background: theme.bg }}>Hello!</div>;
}
