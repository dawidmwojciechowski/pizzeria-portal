import React from 'react';
import styles from './Homepage.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';



const todaysOrders = [
  {id: '1', type: 'take away', people: '-', time: '10:00', order: 123},
  {id: '2', type: 'take away', people: '-', time: '12:30', order: 124},
  {id: '3', type: 'take away', people: '-', time: '14:30', order: 125},
  {id: '4', type: 'take away', people: '-', time: '15:00', order: 127},
  {id: '5', type: 'stay in', people: '3', time: '15:30', order: 132},
  {id: '6', type: 'stay in', people: '5', time: '16:30', order: 128},
  {id: '7', type: 'event', people: '9', time: '17:30', order: 135},
  {id: '8', type: 'event', people: '25', time: '18:30', order: 136},
  {id: '9', type: 'event', people: '15', time: '21:00', order: 143},
];

const todaysStatistics = [
  {id: '1', type: 'take away', quantity: '35' },
  {id: '2', type: 'stay in', quantity: '20' },
  {id: '3', type: 'event', quantity: '1' },
];

class Homepage extends React.Component {
  render() {
    return (
      <Paper className={styles.component}>
        <Typography variant="h4" gutterBottom>
          Statystyki
        </Typography>
        <Table>
          <TableHead className={styles.tableHeader}>
            <TableRow>
              <TableCell className={styles.tableHeadElement} align='center'>Typ zamówienia</TableCell>
              <TableCell className={styles.tableHeadElement} align='center'>Ilość</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todaysStatistics.map(todaysStatistic => (
              <TableRow key={todaysStatistic.id}>
                <TableCell component="th" scope="row" className={styles.dataTable}>
                  {todaysStatistic.type}
                </TableCell>
                <TableCell className={styles.dataTable}>
                  {todaysStatistic.quantity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Toolbar />
        <Typography variant="h4" gutterBottom>
          Dzisiejsze eventy i wydarzenia
        </Typography>
        <Table>
          <TableHead className={styles.tableHeader}>
            <TableRow>
              <TableCell className={styles.tableHeadElement} align='center'>Godzina</TableCell>
              <TableCell className={styles.tableHeadElement} align='center'>Ilość osób</TableCell>
              <TableCell className={styles.tableHeadElement} align='center'>Rodzaj zamówienia</TableCell>
              <TableCell className={styles.tableHeadElement} align='center'>Numer zamówienia</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todaysOrders.map(todaysOrder => (
              <TableRow key={todaysOrder.id}>
                <TableCell component="th" scope="row" className={styles.dataTable}>
                  {todaysOrder.time}
                </TableCell>
                <TableCell className={styles.dataTable}>
                  {todaysOrder.people}
                </TableCell>
                <TableCell className={styles.dataTable}>
                  {todaysOrder.type}
                </TableCell>
                <TableCell className={styles.dataTable}>
                  <Button
                    color="primary"
                    variant="outlined"
                    component={NavLink} to={`${process.env.PUBLIC_URL}/tables/booking/${todaysOrder.order}`}>
                    {todaysOrder.order}</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default Homepage;
