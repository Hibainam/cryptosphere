import React from 'react';
import { AppBar, Container, Toolbar, Typography, Select, MenuItem, makeStyles, createTheme, ThemeProvider, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import AuthModal from './Athentication/AuthModal';
import UserSidebar from './Athentication/UserSidebar';
import { useTheme } from './ThemeContext'; // Import useTheme for theme toggling
import WbSunnyIcon from '@material-ui/icons/WbSunny'; // Light mode icon (sun)
import NightsStayIcon from '@material-ui/icons/NightsStay'; // Dark mode icon (moon)

// Custom styles using makeStyles
const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: '#eb81e7',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  themeButton: {
    marginLeft: '15px',
    borderRadius: '20px', // Rounded corners for a better look
    padding: '6px 16px',
    textTransform: 'capitalize',
    fontSize: '14px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.primary.main, // Darken button on hover
      color: theme.palette.common.white, // Text color changes to white on hover
    },
    backgroundColor: theme.palette.type === 'dark' ? '#5c4d99' : '#1976d2', // Button color changes based on theme
    color: '#fff',
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const { currency, setCurrency, user } = CryptoState();
  const { theme, toggleTheme } = useTheme(); // Use theme and toggleTheme from context

  // Define the light and dark themes
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#eb81e7',
      },
      type: 'dark',
    },
  });

  const lightTheme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
      type: 'light',
    },
  });

  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography variant="h6" className={classes.title} onClick={() => history.push('/')}>
                Cipher Sphere
              </Typography>
              <Select
                variant="outlined"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                style={{
                  width: 100,
                  height: 40,
                  marginRight: 15,
                }}
              >
                <MenuItem value={'INR'}>INR</MenuItem>
                <MenuItem value={'USD'}>USD</MenuItem>
              </Select>
              <Button
                className={classes.themeButton} // Apply custom button styles
                variant="contained"
                color="primary"
                onClick={toggleTheme} // Toggle theme on button click
              >
                {theme === 'dark' ? (
                  <WbSunnyIcon /> // Light mode icon (sun)
                ) : (
                  <NightsStayIcon /> // Dark mode icon (moon)
                )}
              </Button>
              {user ? <UserSidebar /> : <AuthModal />}
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Header;
