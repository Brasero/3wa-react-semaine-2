import React from 'react';

import './Col.css';

function Col({children}) {
    return (
       <div className="Col-main">
           {children}
       </div>
    );
}

export default Col;
