import React from 'react';
import Special from './Special';

const Cousin = ({name , asset}) => {
    return (
        <div>
            <h3>Name: {name}</h3>
            {
                name === 'ratul' && <Special asset={asset}></Special>
            }
        </div>
    );
};

export default Cousin;