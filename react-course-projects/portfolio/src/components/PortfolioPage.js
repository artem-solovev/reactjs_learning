import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <div>Here is my best works</div>
        <p><Link to = "/portfolio/1">Project number 1</Link></p>
        <p><Link to = "/portfolio/2">Project number 2</Link></p>
    </div>
);

export default PortfolioPage;