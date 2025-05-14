import './App.css';
import Header from './components/Header';
import Home from './Pages/Home';
import Bitcoin from './Pages/Bitcoin';
import { BrowserRouter, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Alert from './components/Alert';
import { ThemeProvider, useTheme } from './components/ThemeContext';

function App() {
  const { theme } = useTheme(); // Get current theme from context

  const useStyle = makeStyles(() => ({
    App: {
      backgroundColor: theme === 'dark' ? '#14161a' : '#f5f5f5', // Change background based on theme
      color: theme === 'dark' ? '#eb81e7' : '#000000', // Text color changes depending on theme
      minHeight: '100vh',
      overflowY: 'scroll',
      '&::-webkit-scrollbar': {
        width: '12px',
      },
      '&::-webkit-scrollbar-track': {
        background: '#333',
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#888',
        borderRadius: '10px',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background: '#555',
      },
    },
  }));

  const classes = useStyle();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path='/' component={Home} exact />
        <Route path='/coins/:id' component={Bitcoin} exact />
      </div>
      <Alert />
    </BrowserRouter>
  );
}

const AppWithThemeProvider = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWithThemeProvider;
