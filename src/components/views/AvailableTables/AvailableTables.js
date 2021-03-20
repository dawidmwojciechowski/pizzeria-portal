import React from 'react';
import styles from './AvailableTables.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';




const AvailableTables = () => {
  return (
    <Paper className={styles.component}>
      <Typography variant="h4" gutterBottom>
        Select type of booking you want to add
      </Typography>
      <div className={styles.button_box}>
        <Button
          className={styles.add_button}
          color="primary"
          variant="contained"
          component={NavLink}
          to={`${process.env.PUBLIC_URL}/table/events/new`}>
        Add new event</Button>
        <Button
          className={styles.add_button}
          color="primary"
          variant="contained"
          component={NavLink}
          to={`${process.env.PUBLIC_URL}/table/booking/new`}>
        Add new booking</Button>
      </div>
    </Paper>
  );
};

export default AvailableTables;