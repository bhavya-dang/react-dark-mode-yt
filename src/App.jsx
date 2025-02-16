import { useEffect, useState } from "react";
import DarkModeBtn from "./components/DarkModeBtn";
import { ThemeProvider } from "./contexts/theme";
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const isDark = localStorage.getItem("darkMode");
    return isDark === "true";
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());

    const bodyEl = document.body;
    if (bodyEl) {
      if (darkMode) {
        bodyEl.classList.add("dark");
      } else {
        bodyEl.classList.remove("dark");
      }
    }
  }, [darkMode]);

  return (
    <ThemeProvider value={{ darkMode, toggleDarkMode }}>
      <div className="flex items-center justify-center h-screen">
        <DarkModeBtn />
      </div>
    </ThemeProvider>
  );
}

export default App;
