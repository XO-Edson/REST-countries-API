import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export const Header = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <header className={!darkMode ? "light" : ""}>
      <h1>Where in the world?</h1>
      <h5 onClick={toggleDarkMode}>
        {darkMode ? (
          <>
            <FontAwesomeIcon icon={faSun} className="icon" />
            Light Mode
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faMoon} className="icon" />
            Dark Mode
          </>
        )}
      </h5>
    </header>
  );
};
