import React from 'react';

const EditExpensePage = ( props ) =>  {

    return (
        <div>Edit expense with if { props.match.params.id }</div>
    );
};

export default EditExpensePage;