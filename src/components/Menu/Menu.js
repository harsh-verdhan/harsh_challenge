import React, { useState } from 'react'
import {
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Badge, List, ListItem, DialogTitle, Dialog, Card, CardActionArea, CardActions, CardContent, Button, CardMedia, Typography } from '@material-ui/core';
import foodItems from '../../data/feeds.json'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import styles from './Menu.module.css'
import Header from "../Header/Header"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const foodData = foodItems.map(item => ({
  name: item.name,
  price: item.price,
  image: item.image,
  total: 0
}))

function Menu() {
  const classes = useStyles();
  const [data, setData] = useState(foodData)
  const [dialog, setDialog] = useState(false)

  const incrementTotal = (name) => {
    const modifieData = data.map(item =>
      item.name === name ? { ...item, total: item.total + 1 } : item
    )
    setData(modifieData)
  }

  const decrementTotal = (name) => {
    const modifieData = data.map(item =>
      item.name === name ? { ...item, total: item.total - 1 } : item
    )
    setData(modifieData)
  }

  const dia = data.filter(item => item.total !== 0)

  const claculateTotalCartVal = () => {
    let cartVal = 0;
    dia.map(item => (
      cartVal = cartVal + (item.total * item.price)
    )
    )
    return cartVal;
  }


  return (
    <>
      <Header />
      <Badge className={styles.badge} badgeContent={dia.length} color="primary">
        <ShoppingCartIcon onClick={() => setDialog(!dialog)} className={styles.cart} />
      </Badge>
      <div className={styles.container}>
        {
          data.map(item => (
            <Card key={item.name} className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={item.image}
                  title={item.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Price: {item.price}
                  </Typography>
                  {
                    item.total !== 0 ? (
                      <>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Total : {item.total}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Cost(INR) : {item.total * item.price}
                        </Typography>
                      </>
                    ) : null
                  }

                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button onClick={() => incrementTotal(item.name)} variant="contained" size="small" color="primary">
                  <AddIcon />
                </Button>
                {item.total !== 0 ? (
                  <Button onClick={() => decrementTotal(item.name)} variant="contained" size="small" color="default">
                    <RemoveIcon />
                  </Button>
                ) : (
                  <Button disabled onClick={() => decrementTotal(item.name)} variant="contained" size="small" color="default">
                    <RemoveIcon />
                  </Button>
                )}
              </CardActions>
            </Card>
          ))
        }
      </div>
      <Dialog fullWidth maxWidth="sm" open={dialog} onClose={() => setDialog(false)}>
        <DialogTitle>
          Order Summary
      </DialogTitle>
        {
          data.map(item => (
            item.total !== 0 ? (
              <List className={styles.list}>
                <ListItem  >
                  {item.name} : {item.total}
                </ListItem>
                <Button onClick={() => incrementTotal(item.name)} variant="contained" size="small" color="primary">
                  <AddIcon />
                </Button>
                <Button onClick={() => decrementTotal(item.name)} variant="contained" size="small" color="default">
                  <RemoveIcon />
                </Button>
              </List>
            ) : null
          ))
        }
        {dia.length === 0 ? (
          <Typography style={{ textAlign: "center" }}>Cart Empty Please Add Item!!!</Typography>
        ) : null
        }
        {
          dia.length !== 0 ? (
            <>
              <Typography className={styles.list}>Total(INR):{claculateTotalCartVal()}</Typography>
              <Button style={{ margin: '0 auto', display: "flex" }} variant="contained" color="primary"  >
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/checkout">SAVE AND CONTINUE</Link>
              </Button>
            </>
          ) : null

        }
        <Button onClick={() => setDialog(false)}>
          Cancel
        </Button>
      </Dialog>
    </>
  )
}

export default Menu;
