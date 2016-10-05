import React from 'react';

var styles = {
  brand: {
    // color: 'pink',
    // backgroundColor: 'orange'
  }
}


export default function NavBar(props){
  return (
    <nav className='navbar navbar-default navbar-static-top' style={styles.brand}>
      <div className='navbar-header'>
        <a className='navbar-brand brand' href={props.url}>{props.title}</a>
      </div>
    </nav>
  )
}
