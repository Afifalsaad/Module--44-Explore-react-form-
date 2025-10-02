import React from 'react';
import Grandpa from './Grandpa';
import '../FamilyTree/FamilyTree.css'

const FamilyTree = () => {

    const asset = 'diamond'

    return (
        <div className='family-tree'>
            <h3>Family Tree</h3>
            <Grandpa></Grandpa>
        </div>
    );
};

export default FamilyTree;