import React from 'react';
import styles from './NewOrder.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const NewOrder = () => {
  const [people, setPeople] = React.useState('');
  const handleChangePeople = (event) => {
    setPeople(event.target.value);
  };

  const [table, setTable] = React.useState('');
  const handleChangeTable = (event) => {
    setTable(event.target.value);
  };

  const [amountPizza, setAmountPizza] = React.useState('');
  const handleChangeAmountPizza = (event) => {
    setAmountPizza(event.target.value);
  };
  const [amountSalad, setAmountSalad] = React.useState('');
  const handleChangeAmountSalad = (event) => {
    setAmountSalad(event.target.value);
  };
  const [amountBurger, setAmountBurger] = React.useState('');
  const handleChangeAmountBurger = (event) => {
    setAmountBurger(event.target.value);
  };

  const amountOrder = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const pizzaExtras = [
    'extra cheese',
    'extra sauce',
    'basil',
    'ham',
    'mushrooms',
    'tuna',
    'pepperoni',
  ];

  const saladExtras = [
    'feta',
    'mozarella',
    'ham',
  ];

  const burgerExtras = [
    'meat',
    'cheese',
    'fries',
  ];

  const [pizza, setPizza] = React.useState([]);
  const handleChangePizza = (event) => {
    setPizza(event.target.value);
  };

  const [salad, setSalad] = React.useState([]);
  const handleChangeSalad = (event) => {
    setSalad(event.target.value);
  };

  const [burger, setBurger] = React.useState([]);
  const handleChangeBurger = (event) => {
    setBurger(event.target.value);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <Paper className={styles.component}>
      <Typography variant="h4" gutterBottom>
        Add new order
      </Typography>
      <Grid container justify="center">
        <Typography variant="h6" gutterBottom>
          Select  order details
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
            {amountOrder.map((singleAmount) => (
              <option key={singleAmount} value={singleAmount}>{singleAmount}</option>
            ))}
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
          Select Menu
        </Typography>
      </Grid>
      <Grid container justify="center" item xs={12} className={styles.sectionMenu}>
        <FormControlLabel control={<Checkbox name="checkedC" color="primary"/>} label="Pizza" />
        <FormControl variant="outlined" className={styles.amount}>
          <InputLabel htmlFor="outlined-age-native-simple">Amount</InputLabel>
          <Select
            native
            value={amountPizza}
            onChange={handleChangeAmountPizza}
            label="Amount"
            className={styles.input_menu}
          >
            <option aria-label="None" value="" />
            {amountOrder.map((singleAmount) => (
              <option key={singleAmount} value={singleAmount}>{singleAmount}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl className={styles.checkbox} variant="outlined">
          <InputLabel id="demo-mutiple-checkbox-label">Pizza extras</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={pizza}
            onChange={handleChangePizza}
            input={<Input />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {pizzaExtras.map((pizzaExtra) => (
              <MenuItem key={pizzaExtra} value={pizzaExtra}>
                <Checkbox checked={pizza.indexOf(pizzaExtra) > -1} />
                <ListItemText primary={pizzaExtra} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid container justify="center" item xs={12} className={styles.sectionMenu}>
        <FormControlLabel control={<Checkbox name="checkedC" color="primary"/>} label="Salad" />
        <FormControl variant="outlined" className={styles.amount}>
          <InputLabel htmlFor="outlined-age-native-simple">Amount</InputLabel>
          <Select
            native
            value={amountSalad}
            onChange={handleChangeAmountSalad}
            label="Amount"
            className={styles.input_menu}
          >
            <option aria-label="None" value="" />
            {amountOrder.map((singleAmount) => (
              <option key={singleAmount} value={singleAmount}>{singleAmount}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl className={styles.checkbox} variant="outlined">
          <InputLabel id="demo-mutiple-checkbox-label">Add to salad</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={salad}
            onChange={handleChangeSalad}
            input={<Input />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {saladExtras.map((saladExtra) => (
              <MenuItem key={saladExtra} value={saladExtra}>
                <Checkbox checked={salad.indexOf(saladExtra) > -1} />
                <ListItemText primary={saladExtra} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid container justify="center" item xs={12} className={styles.sectionMenu}>
        <FormControlLabel control={<Checkbox name="checkedC" color="primary"/>} label="Burger" />
        <FormControl variant="outlined" className={styles.amount}>
          <InputLabel htmlFor="outlined-age-native-simple">Amount</InputLabel>
          <Select
            native
            value={amountBurger}
            onChange={handleChangeAmountBurger}
            label="Amount"
            className={styles.input_menu}
          >
            <option aria-label="None" value="" />
            {amountOrder.map((singleAmount) => (
              <option key={singleAmount} value={singleAmount}>{singleAmount}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl className={styles.checkbox} variant="outlined">
          <InputLabel id="demo-mutiple-checkbox-label">Burger extras</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={burger}
            onChange={handleChangeBurger}
            input={<Input />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {burgerExtras.map((burgerExtra) => (
              <MenuItem key={burgerExtra} value={burgerExtra}>
                <Checkbox checked={burger.indexOf(burgerExtra) > -1} />
                <ListItemText primary={burgerExtra} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid container justify="center" className={styles.section}>
        <Button
          className={styles.login_button}
          color="primary"
          variant="contained">Save</Button>
      </Grid>
    </Paper>
  );
};

export default NewOrder;