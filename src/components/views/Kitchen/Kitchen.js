import React from 'react';
import styles from './Kitchen.scss';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const kitchenOrders = [
  {id: '1', type: 'take away', products: 'pizza, cola', table:'-', order: '123'},
  {id: '2', type: 'stay in', products: '2x fries, 2x latte', table:'1', order: '124'},
  {id: '3', type: 'take away', products: 'salad, fries, cake, water', table:'-', order: '125'},
  {id: '4', type: 'stay in', products: '3x cake, 3x black coffee', table:'3', order: '126'},
  {id: '5', type: 'stay in', products: 'pizza', table:'2', order: '127'},
];

const Kitchen = () => {
  return (
    <Paper className={styles.component}>
      <Typography variant="h4" gutterBottom>
        Zamówienia
      </Typography>
      <Table>
        <TableHead className={styles.tableHeader}>
          <TableRow>
            <TableCell className={styles.tableHeadElement} align='center'>Typ zamówienia</TableCell>
            <TableCell className={styles.tableHeadElement} align='center'>Produkty</TableCell>
            <TableCell className={styles.tableHeadElement} align='center'>Numer stolika</TableCell>
            <TableCell className={styles.tableHeadElement} align='center'>Numer zamówienia</TableCell>
            <TableCell className={styles.tableHeadElement} align='center'>Oznacz jako zrobione</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {kitchenOrders.map(kitchenOrder => (
            <TableRow key={kitchenOrder.id}>
              <TableCell component="th" scope="row" align='center' className={styles.dataTable}>
                {kitchenOrder.type}
              </TableCell>
              <TableCell align='center' className={styles.dataTable}>
                {kitchenOrder.products}
              </TableCell>
              <TableCell align='center' className={styles.dataTable}>
                {kitchenOrder.table}
              </TableCell>
              <TableCell align='center' className={styles.dataTable}>
                {kitchenOrder.order && (
                  <Button component={NavLink} variant="outlined" color="primary" to={`${process.env.PUBLIC_URL}/waiter/order/${kitchenOrder.order}`}>
                    {kitchenOrder.order}
                  </Button>
                )}
              </TableCell>
              <TableCell align='center' className={styles.dataTable}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Zrobione"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Kitchen;