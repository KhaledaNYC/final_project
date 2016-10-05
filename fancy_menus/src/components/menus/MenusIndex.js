import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

var styles = {
  menuSquare: {
    width: '30%',
    paddingBottom: '30%',
    borderColor: 'red',
    borderWidth: "1px",
    backgroundColor: 'pink',
    display: 'inline-block',
    float: 'left',
    margin: '1%'
  },
  list: {
    position: 'absolute',
    fontWeight: '700',
    paddingTop: '10%',
    paddingLeft: '5%',
    // top: '50%',
    // left: '0',
    // transform: 'translate(-50%,-50%)',
    textAlign: 'center'
  }
}

function MenusIndex (props) {
  return(
    <div>
    <Link to="/menus/new">Add a menu</Link>

        {props.menus.map(menu => <Link to={`/menus/${menu.id}`}>
          <div style={styles.menuSquare}><div style={styles.list} key={menu.id}>{menu.name}</div>
          </div>
          </Link>)}
      {props.children}
    </div>
  )
}

function mapStateToProps(state){
  return {
    menus: state.menus
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(MenusIndex)
