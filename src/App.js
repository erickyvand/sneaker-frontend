import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/Layouts/Home';
import Sneakers from './components/sneakers/Sneakers';
import './style.css';
import Sneaker from './components/sneakers/Sneaker';

const App = () => {
	return (
		<Router>
			<Provider store={store}>
				<div className='container'>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/sneakers' exact component={Sneakers} />
						<Route path='/sneaker/:sneakerId' exact component={Sneaker} />
					</Switch>
				</div>
			</Provider>
		</Router>
	);
};

export default App;
