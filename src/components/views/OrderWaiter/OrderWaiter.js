import React from 'react';
import styles from './OrderWaiter.scss';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const OrderWaiter = () => (
<Container maxWidth="sm">
  <div className={styles.component}>
    <h2>OrderWaiter view</h2>
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>Table 1</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>Table 2</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>Table 3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>Table 4</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper><Button variant='outlined' size='small' color='primary'><Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Link></Button></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper><Button variant='outlined' size='small' color='primary'><Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Link></Button></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper><Button variant='outlined' size='small' color='primary'><Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Link></Button></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper><Button variant='outlined' size='small' color='primary'><Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Link></Button></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper><Button variant='outlined' size='small' color='secondary'><Link to={`${process.env.PUBLIC_URL}/waiter/id`}>Actual Order</Link></Button></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper><Button variant='outlined' size='small' color='secondary'><Link to={`${process.env.PUBLIC_URL}/waiter/id`}>Actual Order</Link></Button></Paper>
        </Grid>
      </Grid>
    </div>
  </div>
  </Container>
);


export default OrderWaiter;
