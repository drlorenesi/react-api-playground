import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
// Navbar
import Navigation from './components/Navigation';
// Menu items
import Home from './components/Home';
import Movies from './components/Movies';
import Api from './components/Api';
import Counters from './components/Counters';
import Charts from './components/Charts';
import LogIn from './components/LogIn';
// Footer
import Footer from './components/Footer';
// CSS Modules
import './App.css';

function App() {
  const loggedIn = true;

  const initialCounters = [{ id: 1, value: 0 }];
  const [counters, setCounters] = useState(initialCounters);

  const handleReset = () => {
    setCounters(initialCounters);
  };

  const handleDecrement = (counter) => {
    const newCounters = [...counters];
    const index = newCounters.indexOf(counter);
    newCounters[index].value--;
    setCounters(newCounters);
  };

  const handleIncrement = (counter) => {
    const newCounters = [...counters];
    const index = newCounters.indexOf(counter);
    newCounters[index].value++;
    setCounters(newCounters);
  };

  const handleAdd = () => {
    const newCounter = { id: uuidv4(), value: 0 };
    const newCounters = [...counters, newCounter];
    setCounters(newCounters);
  };

  const handleDelete = (counterId) => {
    setCounters(counters.filter((counter) => counter.id !== counterId));
  };

  if (loggedIn === true)
    return (
      <div className='page-container'>
        <div className='content-wrap'>
          <Navigation
            items={counters.reduce((accum, item) => accum + item.value, 0)}
          />
          <main role='main' className='container-fluid mt-2'>
            <Switch>
              <Route path='/movies' component={Movies} />
              <Route path='/api' component={Api} />
              <Route
                path='/counters'
                render={() => (
                  <Counters
                    onReset={handleReset}
                    onAdd={handleAdd}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    counters={counters}
                  />
                )}
              />
              <Route path='/charts' component={Charts} />
              <Route path='/' component={Home} />
            </Switch>
          </main>
        </div>
        <Footer />
      </div>
    );
  return <LogIn path='/' exact component={LogIn} />;
}

export default App;
