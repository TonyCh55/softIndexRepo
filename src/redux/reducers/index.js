import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import userArr from './userArrReducer'

const rootReducer = combineReducers({
    form: reduxForm,
    userArr: userArr,
})

export default rootReducer