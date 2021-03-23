/* eslint-disable no-unused-vars */
/* eslint-disable no-self-assign */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    changeTableStatus: PropTypes.func,
    tables: PropTypes.array,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.node,
    }),
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderStatus(id, status, order){
    const {changeTableStatus} = this.props;
    switch (status) {
      case 'free':
        status = 'thinking';
        order = order;
        changeTableStatus(id, status, order);
        break;
      case 'thinking':
        status = 'ordered';
        order = order;
        changeTableStatus(id, status, order);
        break;
      case 'ordered':
        status = 'prepared';
        order = order;
        changeTableStatus(id, status, order);
        break;
      case 'prepared':
        status = 'delivered';
        order = order;
        changeTableStatus(id, status, order);
        break;
      case 'delivered':
        status = 'paid';
        order = order;
        changeTableStatus(id, status, order);
        break;
      case 'paid':
        break;
      default:
        return null;
    }
  }

  renderActions(row){
    let id  = row.id;
    let status = row.status;
    let order = row.order;

    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => this.renderStatus(id, status, order)}>thinking</Button>
            <Button onClick={() => this.renderStatus(id, status, order)}>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button onClick={() => this.renderStatus(id, status, order)}>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => this.renderStatus(id, status, order)}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => this.renderStatus(id, status, order)}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => this.renderStatus(id, status, order)}>paid</Button>

        );
      case 'paid':
        return (
          <Button onClick={() => this.renderStatus(id, status, order)}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables, changeTableStatus } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
