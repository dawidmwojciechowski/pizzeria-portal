import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import Login from '../src/components/views/Login/Login';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import Tables from '../src/components/views/Tables/Tables';
import OrderWaiter from '../src/components/views/OrderWaiter/OrderWaiter';
import Homepage from '../src/components/views/Homepage/Homepage';
import BookingDetails from '../src/components/views/BookingDetails/BookingDetails';
import NewBooking from '../src/components/views/NewBooking/NewBooking';
import EventDetails from '../src/components/views/EventDetails/EventDetails';
import NewEvent from '../src/components/views/NewEvent/NewEvent';
import AvailableTables from '../src/components/views/AvailableTables/AvailableTables';
import Waiter from '../src/components/views/Waiter/Waiter';
import NewOrder from '../src/components/views/NewOrder/NewOrder';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2b4c6f',
    },
  },
});


class App extends React.Component {
  render(){
    return (
      <BrowserRouter basename={'/'}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Homepage} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                <Route exact path={process.env.PUBLIC_URL + '/orderwaiter'} component={OrderWaiter} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={NewOrder} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={Waiter} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={BookingDetails} />
                <Route exact path={process.env.PUBLIC_URL + '/table/booking/new'} component={NewBooking} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={EventDetails} />
                <Route exact path={process.env.PUBLIC_URL + '/table/events/new'} component={NewEvent} />
                <Route exact path={process.env.PUBLIC_URL + '/table/available'} component={AvailableTables} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    );
  }
}

export default App;
