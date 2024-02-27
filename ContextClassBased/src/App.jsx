import React, { Component } from 'react';
import Navbar from './Navbar';
import Form from './Form';
import PageContent from './PageContent';
import { ThemeContext } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

class App extends Component {
  render() {
    return (
      <ThemeContext>
        <LanguageProvider>
          <PageContent>
            <Navbar />
            <Form />
          </PageContent>
        </LanguageProvider>
      </ThemeContext>
    );
  }
}

export default App;
