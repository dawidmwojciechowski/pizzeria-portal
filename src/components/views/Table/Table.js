/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Table.module.scss';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
// eslint-disable-next-line no-unused-vars
import { CgEventbrite } from 'react-icons/cg';
import { RiReservedFill, RiReservedLine } from 'react-icons/ri';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import { dateToStr, numberToHour } from '../../../utils';
// eslint-disable-next-line no-unused-vars
import { fetchFromAPI, getAll, getBookingsForDate } from '../../../redux/bookingRedux';


const TableView = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const bookings = useSelector((state) => {
    return getBookingsForDate(state, dateToStr(startDate));});

  useEffect(() => {
    dispatch(fetchFromAPI());
  }, []);

  const renderActions = (table, hour) => {
    const hourBooking = bookings[hour].find((booking) => booking.table === table);
    if(!hourBooking) {
      return (
        <Button component={Link} to={`${process.env.PUBLIC_URL}/table/booking/new`}><RiReservedLine/>Free</Button>
      );
    } else {
      return (
        <Button component={Link} to={`${process.env.PUBLIC_URL}/table/booking/${hourBooking.id}`}><RiReservedFill/>Booked </Button>
      );
    }
  };

  const renderBody = () => {
    return bookings ?
      (<TableBody>
        {Object.keys(bookings).map((hour) => (
          <TableRow key={hour}>
            <TableCell component='td'>{numberToHour(hour)}</TableCell>
            {[1,2,3].map((table) => (
              <TableCell key={table}>
                {renderActions(table, hour)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      ) : (null);
  };

  return (
    <div className={styles.component}>
      <div className={styles.datepicker}>
        <DatePicker selected={startDate} onChange={date => {
          setStartDate(date);
        }} />
      </div>
      <Paper>
        <Table>
          <TableHead component='thead'>
            <TableRow className={styles.tableRow}>
              <TableCell component='td' className={styles.table}>Hours</TableCell>
              <TableCell component='td' className={styles.table}>Table 1 </TableCell>
              <TableCell component='td' className={styles.table}>Table 2 </TableCell>
              <TableCell component='td' className={styles.table}>Table 3 </TableCell>
            </TableRow>
          </TableHead>
          {renderBody()}
        </Table>
      </Paper>
    </div>

  );
/*
  return (

  */
};

export default TableView;
