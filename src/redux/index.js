import { combineReducers } from 'redux';
import addCartReducer from './reducers/sneakers/addCartReducer';
import descReducer from './reducers/sneakers/descReducer';
import paymentReducer from './reducers/sneakers/paymentReducer';
import viewCartsReducer from './reducers/sneakers/viewCartsReducer';
import viewSneakerReducer from './reducers/sneakers/viewSneakerReducer';
import viewSneakersReducer from './reducers/sneakers/viewSneakersReducer';

const rootReducer = combineReducers({
	sneakers: viewSneakersReducer,
	sneaker: viewSneakerReducer,
	addCart: addCartReducer,
	viewCarts: viewCartsReducer,
	payment: paymentReducer,
	descriptions: descReducer,
});

export default rootReducer;
