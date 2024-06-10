import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { useState } from "react";

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSwitch = () => {
    isDarkMode
      ? document.body.classList.remove("dark")
      : document.body.classList.add("dark");

    setIsDarkMode((prev) => !prev);
  };

  return (
    <div>
      <Switch
        id="themeSwitch"
        className="flex items-center space-x-2"
        onClick={handleSwitch}
      />
    </div>
  );
};

export default ThemeSwitch;
