import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const HeroSection = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  //   AppTheme[theme] is accesing the color from color.js based on default value in ThemeContext["light"], which is "light" accesed by useContext() hook.

  const currentTheme = AppTheme[theme];

  return (
    <div
      onClick={() => {
        setTheme(currentTheme === "light" ? "dark" : "light");
      }}
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1>Context API theme toggler</h1>
      <p>This is a Paragraph</p>
      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "FFF",
          border: `${currentTheme.border}`,
        }}
      >
        Click ME {currentTheme === "light" ? "Turn Off Lights" : "Turn On Lights"}
      </button>
    </div>
  );
};

export default HeroSection;
