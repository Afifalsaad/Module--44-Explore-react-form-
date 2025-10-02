import React from 'react';
import Cousin from './Cousin';

const Uncle = ({asset}) => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin asset={asset} name='yoyo'></Cousin>
                <Cousin name='jojo'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;