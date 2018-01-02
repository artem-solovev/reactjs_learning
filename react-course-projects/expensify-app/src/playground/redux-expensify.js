import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ( 
                    { description = '',
                    note = '',
                    amount = 0,
                    createdAt = 0 
                } = {} ) => ( {
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
} );

const removeExpense = ( { id } = {} ) => ( {
    type: 'REMOVE_EXPENSE',
    id
} );

const editExpense = ( ( id, updates ) => ( {
    type: 'EDIT_EXPENSE',
    id,
    updates
} ) );

const setTextFilter = ( text = '' ) => ( {
    type: 'SET_TEXT_FILTER',
    text
} );

const expenseReducerDefaultState = [];

const expensesReducer = ( state = expenseReducerDefaultState, action ) => {
    switch ( action.type ) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];

        case 'REMOVE_EXPENSE':
            return state.filter( ( { id } ) => id !== action.id );

        case 'EDIT_EXPENSE':
            return state.map( ( expense ) => {
                if ( expenseTwo.id === action.id ) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            } );

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
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
};

const store = createStore( combineReducers( {
    expenses: expensesReducer,
    filters: filtersReducer
} ) );

store.subscribe( () => {
    console.log( store.getState() );
} );

const expenseOne =  store.dispatch( addExpense( { description: 'Rent', amount: 100 } ) );
const expenseTwo =  store.dispatch( addExpense( { description: 'Coffee', amount: 300 } ) );

store.dispatch( removeExpense( { id: expenseOne.expense.id } ) );
store.dispatch( editExpense( expenseTwo.expense.id, { amount: 500 } ) );

store.dispatch( setTextFilter( 'rent' ) );
store.dispatch( setTextFilter() );

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