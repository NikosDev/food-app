import React from 'react';

import  Auk  from '../../hoc/Auk';
import classes from './Layout.css'

const layout = ( props ) => (
    <Auk>
        <div>  </div>
        <main className={classes.Content}>  
            {props.children}
        </main>
    </Auk>
);

export default layout;