
// import { createStore } from 'react-redux'
import { rootReducer } from '../Reducer/RootReducer';

// export const Store =()=>createStore(rootReducers);






import { createStore } from 'redux'
// import rootReducer from './reducer'

const store = createStore(rootReducer)

export default store