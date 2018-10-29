import React, { Component } from 'react';
import Form from './Components/Form/Form';
import Table from './Components/Table/Table';
import styles from'./App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Form/>
        <Table/>
      </div>
    );
  }
}

export default App;
