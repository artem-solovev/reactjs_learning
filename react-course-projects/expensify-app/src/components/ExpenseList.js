import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = ( props ) => (
    <div>
        <h2>Expense List</h2>
        { props.expenses.map( ( expense ) => {
            return <ExpenseListItem key = { expense.id } { ...expense } />
        } ) }
    </div>
);

const mapStateProps = ( state ) => {
    return {
        expenses: selectExpenses( state.expenses, state.filters )
    };
};

export default connect( mapStateProps )( ExpenseList );