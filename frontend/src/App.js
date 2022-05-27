import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import TodaysDeal from './components/TodaysDeal';
import CustomerService from './components/CustomerService';
import Home from './components/Home';
function App() {

  const [user, setUser]= useState(null)

  useEffect(() => {
    if(!user){
      axios.get('http://localhost:8000/auth/login/success',{withCredentials: true})
      .then(res=> setUser(res.data.user))
      .catch(err=> console.log(err))
    }
  }, [user])
    console.log(user)

  return (
    <Router>
      <Header user={user}/>
      <Switch>
        <Route path='/todays-deal' component={TodaysDeal}/>
        <Route path='/customer-service' component={CustomerService}/>
        <Route path='/' component={Home}/>
      </Switch>
    </Router>
  )
}

export default App;
