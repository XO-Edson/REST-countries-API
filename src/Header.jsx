export const Header = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <header>
      <h1>Where in the world?</h1>
      <h5 onClick={toggleDarkMode}>{darkMode ? "Light Mode" : "Dark Mode"}</h5>
    </header>
  );
};
