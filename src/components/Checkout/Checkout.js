import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Checkout.module.css'


function Checkout() {

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={8} className={styles.card}>
          <CardContent>
            <Typography className={styles.checkout} variant="h4" color="textSecondary" gutterBottom>Checkout</Typography>
            <Typography variant="h5">
              Thank You for your order.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Checkout;
