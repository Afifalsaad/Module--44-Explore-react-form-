import React from 'react';
import Cousin from './Cousin';

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name='ratul'></Cousin>
                <Cousin name='rafsu'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;