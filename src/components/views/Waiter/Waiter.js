import React from 'react';
import styles from './Waiter.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';


const demoContent = [
  {id: '1', status: 'free', order: null},
  {id: '2', status: 'thinking', order: null},
  {id: '3', status: 'ordered', order: 123},
  {id: '4', status: 'prepared', order: 234},
  {id: '5', status: 'delivered', order: 345},
  {id: '6', status: 'paid', order: 456},
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button >thinking</Button>
          <Button
            color="primary"
            variant="outlined"
            component={NavLink} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Button>
        </>
      );
    case 'thinking':
      return (
        <Button
          color="primary"
          variant="outlined"
          component={NavLink} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Button>
      );
    case 'ordered':
      return (
        <Button>prepared</Button>
      );
    case 'prepared':
      return (
        <Button>delivered</Button>
      );
    case 'delivered':
      return (
        <Button>paid</Button>
      );
    case 'paid':
      return (
        <Button>free</Button>
      );
    default:
      return null;
  }
};

const Waiter = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead className={styles.tableHeader}>
        <TableRow>
          <TableCell className={styles.tableHeadElement} align='center'>Table</TableCell>
          <TableCell className={styles.tableHeadElement} align='center'>Status</TableCell>
          <TableCell className={styles.tableHeadElement} align='center'>Order</TableCell>
          <TableCell className={styles.tableHeadElement} align='center'>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row" className={styles.dataTable}>
              {row.id}
            </TableCell>
            <TableCell className={styles.dataTable}>
              {row.status}
            </TableCell>
            <TableCell className={styles.dataTable}>
              {row.order && (
                <Button
                  color="primary"
                  variant="outlined"
                  component={NavLink}
                  to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                  {row.order}
                </Button>
              )}
            </TableCell>
            <TableCell className={styles.dataTable}>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Waiter;