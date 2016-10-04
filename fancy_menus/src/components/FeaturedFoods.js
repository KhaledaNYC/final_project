import React from 'react'
// import {connect} from 'react-redux';
import {Link} from 'react-router'

export default (props) => {
  return(
    <div>
      <div className='featuredMenu'>
          Featured Menu

      </div>

      <div className='featuredRecipes'>
          Featured Recipes
      </div>
      {props.children}
    </div>
  )
}
