import React, { Component } from 'react';
import Navbar from './Navbar';
import Form from './Form';
import PageContent from './PageContent';
import { ThemeContext } from './context/ThemeContext';

class App extends Component {
  render() {
    return (
      <ThemeContext>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </ThemeContext>
    );
  }
}

export default App;
