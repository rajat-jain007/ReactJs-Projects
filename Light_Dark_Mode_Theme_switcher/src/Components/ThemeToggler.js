import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext.js";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <button>
        {themeMode === "light" ? "Turn Off Lights" : "Turn On Lights"}
      </button>
    </div>
  );
};

export default ThemeToggler;
