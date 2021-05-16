import React from 'react'
import {
  Link
} from "react-router-dom";
import Header from "../Header/Header"
import styles from './Home.module.css'
import Button from '@material-ui/core/Button';
function Home() {
  return (
    <>
      <Header />
      <p className={styles.text}>Welcome to Food's <br /> Kitchen</p>
      <Button style={{ margin: '0 auto', display: "flex" }} variant="contained" color="primary"  >
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/menu">Go to Menu</Link>
      </Button>
    </>
  )
}

export default Home;
