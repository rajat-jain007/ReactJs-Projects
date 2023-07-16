import { createContext } from "react";

// Not compulsory to write call back function inside createContext([]). You can write if you want
const ThemeContext = createContext(["light", () => {}]);

export default ThemeContext;
