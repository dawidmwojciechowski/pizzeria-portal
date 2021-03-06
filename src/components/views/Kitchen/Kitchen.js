import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import SwitchChanger from '../../features/Switch/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFromAPI } from '../../../redux/kitchenRedux';


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(dish, orderNumber, clientType, status, price) {
  return {
    dish,
    orderNumber,
    clientType,
    status,
    price,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 1 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  const dispatch = useDispatch();
  const dishes = useSelector(state => state.dishes.data);

  if(dishes) {
    console.log(dishes);
  }

  useEffect(() => {
    dispatch(fetchFromAPI());
  }, [dispatch]);

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.dish}
        </TableCell>
        <TableCell align="right">{row.orderNumber}</TableCell>
        <TableCell align="right">{row.clientType}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
        <TableCell align="right">{row.price}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    dish: PropTypes.string.isRequired,
    orderNumber: PropTypes.number.isRequired,
    clientType: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    price: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData('Pizza 1', 159, 'IN', <SwitchChanger/>, 3.99),
  createData('Pizza 1', 159, 'IN', <SwitchChanger/>, 3.99),
  createData('Pizza 1', 159, 'IN', <SwitchChanger/>, 3.99),
  createData('Pizza 1', 159, 'IN', <SwitchChanger/>, 3.99),
  createData('Pizza 1', 159, 'IN', <SwitchChanger/>, 3.99),
];


export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Dish</TableCell>
            <TableCell align="right">Order number</TableCell>
            <TableCell align="right">Client type(In/Out)</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
