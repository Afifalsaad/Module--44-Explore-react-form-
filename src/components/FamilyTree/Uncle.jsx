import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin name='yoyo'></Cousin>
                <Cousin name='jojo'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;