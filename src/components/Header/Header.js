import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import RestaurantIcon from '@material-ui/icons/Restaurant';
import styles from './Header.module.css'

function Header() {
  return (
    <AppBar color='primary' position='static' >
      <Toolbar>
        <RestaurantIcon className={styles.icon} />
        <Typography color='inherit'>Food's Restaurant</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;