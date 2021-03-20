import React from 'react';
import styles from './BookingDetails.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const tableContent = [
  {id: '1', hour: '15:30', people: '2', duration:'2', phone:'123456789', email: 'lala@gmail.com'},
];

const BookingDetails = () => {
  const {id} = useParams();
  return (
    <Paper className={styles.component}>
      <Typography variant="h4" gutterBottom>
        Table booking {id} details
      </Typography>
      <Table>
        <TableHead className={styles.tableHeader}>
          <TableRow>
            <TableCell className={styles.tableHeadElement} align='center'>Godzina</TableCell>
            <TableCell className={styles.tableHeadElement} align='center'>Ilość osób</TableCell>
            <TableCell className={styles.tableHeadElement} align='center'>Czas</TableCell>
            <TableCell className={styles.tableHeadElement} align='center'>Telefon kontaktowy</TableCell>
            <TableCell className={styles.tableHeadElement} align='center'>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableContent.map(tableOrder => (
            <TableRow key={tableOrder.id}>
              <TableCell component="th" scope="row" className={styles.dataTable}>
                {tableOrder.hour}
              </TableCell>
              <TableCell className={styles.dataTable}>
                {tableOrder.people}
              </TableCell>
              <TableCell className={styles.dataTable}>
                {tableOrder.duration}
              </TableCell>
              <TableCell className={styles.dataTable}>
                {tableOrder.phone}
              </TableCell>
              <TableCell className={styles.dataTable}>
                {tableOrder.email}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={styles.button_box}>
        <Button
          className={styles.button}
          color="primary"
          variant="contained">Edytuj booking </Button>
        <Button
          className={styles.button}
          color="primary"
          variant="contained"
          component={NavLink} to={`${process.env.PUBLIC_URL}/tables`}>Powrót</Button>
      </div>
    </Paper>
  );
};

export default BookingDetails;