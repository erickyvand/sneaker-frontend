import { combineReducers } from 'redux';
import viewSneakerReducer from './reducers/sneakers/viewSneakerReducer';
import viewSneakersReducer from './reducers/sneakers/viewSneakersReducer';

const rootReducer = combineReducers({
	sneakers: viewSneakersReducer,
	sneaker: viewSneakerReducer,
});

export default rootReducer;
