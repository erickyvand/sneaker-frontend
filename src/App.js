import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/Layouts/Home';
import Sneakers from './components/sneakers/Sneakers';
import './style.css';
import Sneaker from './components/sneakers/Sneaker';
import Carts from './components/sneakers/Carts';
import PageNotFound from './components/Layouts/PageNotFound';

const App = () => {
	return (
		<Router>
			<Provider store={store}>
				<div className='container'>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/sneakers' exact component={Sneakers} />
						<Route path='/sneaker/:sneakerId' exact component={Sneaker} />
						<Route path='/carts' exact component={Carts} />
						<Route exact component={PageNotFound} />
					</Switch>
				</div>
			</Provider>
		</Router>
	);
};

export default App;
