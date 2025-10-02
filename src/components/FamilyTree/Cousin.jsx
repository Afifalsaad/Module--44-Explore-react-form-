import React from 'react';
import Special from './Special';
import Friend from './Friend';

const Cousin = ({name , asset}) => {
    return (
        <div>
            <h3>Name: {name}</h3>
            {
                name === 'ratul' && <Special asset={asset}></Special>
            }
            {
                name === 'rafsu' && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;