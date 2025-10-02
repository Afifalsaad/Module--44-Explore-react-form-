import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Uncle = ({asset}) => {

    const [money,setMoney] = use(MoneyContext)
    const handleAddMoney = () => {
        setMoney(money+5000)
    }

    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin asset={asset} name='yoyo'></Cousin>
                <Cousin name='jojo'></Cousin>
                <button onClick={handleAddMoney}>Add 5000 tk</button>
            </section>
        </div>
    );
};

export default Uncle;