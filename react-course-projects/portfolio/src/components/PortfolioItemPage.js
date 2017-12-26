import React from 'react';

const PortfolioItemPage = ( props ) =>  {

    return (
        <div>
            <h2>Things i've done</h2>
            <p>Project by number { props.match.params.id }</p>
        </div>
    );
};

export default PortfolioItemPage;