
import { Redirect, Route, Switch } from 'react-router-dom';
import logo from './assets/pepe-jeans-logo-2B4AF1BEA4-seeklogo.png'
import ChangeDropOff from './components/change-dropoff/change-dropoff.component';
import { OrderContextProvider } from './context/current-order/current-order.context';
import Homepage from './pages/homepage/homepage.component'
import ReschedulePage from './pages/reschedule/reshedule.component';


function App() {
  return (
    <div className="bg-white w-full h-full font-sans">
    <OrderContextProvider>
      <div className='flex flex-col items-center' >
        <img className='w-40' src={logo} alt='pepe jeans' />
        <Switch>
        <Route exact path='/' render={()=><Redirect to='/order' />} />
        <Route path='/order' component={Homepage} />
        <Route path='/reschedule/:paramOrderID' component={ReschedulePage} />
        <Route path='/change-dropoff/:paramOrderID' component={ChangeDropOff} />

        </Switch>
      </div>
    </OrderContextProvider>
    </div>
  );
}

export default App;
