import { createStore, combineReducers } from 'redux';

const expenseReducerDefaultState = [];

const expensesReducer = ( state = expenseReducerDefaultState, action ) => {
    switch ( action.type ) {
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = ( state = filtersReducerDefaultState, action ) => {
    switch ( action.type ) {
        default:
            return state;
    }
};

const store = createStore( combineReducers( {
    expenses: expensesReducer,
    filters: filtersReducer
} ) );

console.log( store.getState() );

const demoState = {
    expenses: [ {
        id: 'sdkfjsldf',
        description: 'January rent',
        note: 'This was the final payment for that adress',
        amount: 54500,
        createdAt: 0
    } ],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};