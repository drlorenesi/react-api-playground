import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Navbar
import Navigation from './components/Navigation';
// Menu items
import Home from './components/Home';
import Movies from './components/Movies';
import Api from './components/Api';
import Counter from './components/Counter';
import Charts from './components/Charts';
import LogIn from './components/LogIn';

// Footer
import Footer from './components/Footer';
// CSS Modules
import './App.css';
// import './SignIn.css';

function App() {
  const loggedIn = true;

  if (loggedIn === true)
    return (
      <div className='page-container'>
        <div className='content-wrap'>
          <Navigation />
          <main role='main' className='container-fluid mt-2'>
            <Switch>
              <Route path='/movies' component={Movies} />
              <Route path='/api' component={Api} />
              <Route path='/counter' component={Counter} />
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
