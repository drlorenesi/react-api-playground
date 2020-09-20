import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Navigation from './components/Navigation';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Api from './components/Api';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <main role='main' className='container-fluid mt-2'>
        <Switch>
          <Route path='/products/:id' component={ProductDetails} />
          <Route
            path='/products'
            render={(props) => <Products testProp='test' {...props} />}
          />
          <Route path='/api' component={Api} />
          <Route path='/' exact component={Home} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
