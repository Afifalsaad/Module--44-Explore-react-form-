import React from 'react';
import Uncle from './Uncle';
import Aunt from './Aunt';
import Dad from './Dad';
// import 

const Grandpa = ({asset}) => {
    return (
        <div>
            <h3>Grandpa</h3>
            <section className='flex'>
                <Dad asset={asset}></Dad>
                <Uncle asset={asset}></Uncle>
                <Aunt asset={asset}></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;