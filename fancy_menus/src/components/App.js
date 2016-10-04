import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar  title="Im a nav bar" url="/" />
          <div className='root'>
            { this.props.children }
          </div>

      </div>
    );
  }
}
