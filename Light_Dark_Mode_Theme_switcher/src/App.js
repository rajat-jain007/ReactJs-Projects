import React, { useState } from "react";
import ThemeContext from "./Context/ThemeContext";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";

function App() {
  const themeHook = useState("light");
  return (
    // When you want use createContext() we need to wrap that up in Provider(here:- <ThemeContext.Provider value = ""> and giving value is must)
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
