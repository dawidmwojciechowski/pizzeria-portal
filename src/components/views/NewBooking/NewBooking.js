import React, { useState } from 'react';
import styles from './NewBooking.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';

const NewBooking = () => {
  const [date, setDate] = useState(new Date());
  const [people, setPeople] = React.useState('');
  const handleChangePeople = (event) => {
    setPeople(event.target.value);
  };

  const [duration, setDuration] = React.useState('');
  const handleChangeDuration = (event) => {
    setDuration(event.target.value);
  };

  const [table, setTable] = React.useState('');
  const handleChangeTable = (event) => {
    setTable(event.target.value);
  };
  return (
    <Paper className={styles.component}>
      <Typography variant="h4" gutterBottom>
        Table reservation
      </Typography>
      <Grid container justify="center">
        <Typography variant="h6" gutterBottom>
          Please select date and time
        </Typography>
      </Grid>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="center" className={styles.section}>
          <KeyboardDatePicker
            className={styles.datePicker}
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Select date"
            value={date}
            onChange={setDate}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={date}
            onChange={setDate}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <Grid container justify="center">
        <Typography variant="h6" gutterBottom>
          Reservation details
        </Typography>
      </Grid>
      <Grid container justify="center" item xs={12} className={styles.section}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-age-native-simple" className={styles.input}>Guests</InputLabel>
          <Select
            native
            value={people}
            onChange={handleChangePeople}
            label="People"
            className={styles.input}
          >
            <option aria-label="None" value="" />
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={+9}>+9</option>
          </Select>
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-age-native-simple" className={styles.input}>Duration</InputLabel>
          <Select
            native
            value={duration}
            onChange={handleChangeDuration}
            label="Duration"
            className={styles.input}
          >
            <option aria-label="None" value="" />
            <option value={1}>1 hour</option>
            <option value={2}>2 hours</option>
            <option value={3}>3 hours</option>
            <option value={+4}>4 or more hours</option>
          </Select>
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-age-native-simple" className={styles.input}>Table</InputLabel>
          <Select
            native
            value={table}
            onChange={handleChangeTable}
            label="Table"
            className={styles.input}
          >
            <option aria-label="None" value="" />
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </Select>
        </FormControl>
      </Grid>
      <Grid container justify="center">
        <Typography variant="h6" gutterBottom>
          Contact details
        </Typography>
      </Grid>
      <Grid container justify="center" item xs={12} className={styles.section}>
        <TextField
          id="outlined-basic1"
          label="Name and surname"
          variant="outlined"
          className={styles.input}
        />
        <TextField
          id="outlined-basic2"
          label="Email"
          variant="outlined"
          className={styles.input}
        />
        <TextField
          id="outlined-basic3"
          label="Phone number"
          variant="outlined"
          className={styles.input}
        />
      </Grid>
      <Grid container justify="center">
        <Typography variant="h6" gutterBottom>
          Comments
        </Typography>
      </Grid>
      <Grid container justify="center" className={styles.section}>
        <TextField
          id="outlined-multiline-static"
          label="Comments"
          multiline
          rows={4}
          variant="outlined"
          className={styles.input_text}
        />
      </Grid>
      <Grid container justify="center">
        <Button
          className={styles.login_button}
          color="primary"
          variant="contained">Save</Button>
      </Grid>
    </Paper>
  );
};

export default NewBooking;