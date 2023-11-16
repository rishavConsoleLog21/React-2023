## App.js
import Page from './Page';
import ThemeContextProvider from './ThemeContextProvider'

function App() {
  return( 
      <ThemeContextProvider>
      <Page />
      </ThemeContextProvider>
)
}
export default App;

## Page.js
import React from 'react'
import Header from './Header';
import {ThemeContext} from './ThemeContextProvider'

export default function Page() {

const themeCtx = React.useContext(ThemeContext);

  return (
    <div id="app" className={themeCtx.theme}>
      <Header />

      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
      </article>
    </div>
  );
}

## ThemeContextProvider.js
import React from 'react';
 
export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});
 
export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = React.useState('light');
 
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'light' ? 'dark' : 'light';
    });
  };
 
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

## Header.js
import React from 'react';
 
import { ThemeContext } from './ThemeContextProvider';
 
export default function Header() {
  const themeCtx = React.useContext(ThemeContext);
 
  return (
    <header>
      <h1>Demo Website</h1>
      <button onClick={themeCtx.toggleTheme}>Toggle Theme</button>
    </header>
  );
}

## index.css
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Lato:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(#180d27, #0c0219);
  color: #e5d9f1;
  min-height: 100vh;
}

#app {
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 50rem;
  text-align: center;
  border-radius: 6px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
}

#app.light {
  background: linear-gradient(#e5d9f1, #e5d9f1);
  color: #180d27;
}

#app.dark {
  background: linear-gradient(#341f4f, #2a0c52);
  color: #e5d9f1;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

h1 {
  letter-spacing: 0.15rem;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  font-size: 1.5rem;
  margin: 0;
}

header button {
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 1rem;
  margin: 0 0.5rem;
  padding: 0.25rem 0.5rem;
}

