import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavBarStyles';
import { ThemeContext } from './context/ThemeContext';
import { LanguageContext } from './contexts/ThemeContext';
import { withLanguageContext } from './contexts/LanguageContext';

const content = {
  english: {
    search: 'Search',
    flag: '🇺🇸',
  },
  french: {
    search: 'Chercher',
    flag: '🇫🇷',
  },
  spanish: {
    search: 'Buscar',
    flag: '🇪🇸',
  },
};

class Navbar extends Component {
  // One way of writing a context where we're consuming directly
  // in this component
  static contextType = ThemeContext;

  render() {
    // console.log(this.context);
    const { isDarkMode, toggleTheme } = this.context;
    const { classes } = this.props;
    // Another way of writing a context, that is being passed in as a prop
    // through a higher order component
    const { language } = this.props.languageContext;
    const { search, flag } = content[language];

    return (
      <LanguageContext.Consumer>
        {(value) => (
          <div className={classes.root}>
            <AppBar
              position='static'
              color={isDarkMode ? 'default' : 'primary'}
            >
              <Toolbar>
                <IconButton className={classes.menuButton} color='inherit'>
                  <span>{flag}</span>
                </IconButton>
                <Typography
                  className={classes.title}
                  variant='h6'
                  color='inherit'
                >
                  App Title
                </Typography>
                <Switch onChange={toggleTheme} />
                <div className={classes.grow} />
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder={`${search}...`}
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </div>
              </Toolbar>
            </AppBar>
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}
export default withLanguageContext(withStyles(styles)(Navbar));
