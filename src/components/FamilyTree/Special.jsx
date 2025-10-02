import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({asset,name}) => {
    const newAsset = useContext(AssetContext);
    console.log('New asset', newAsset)
    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Asset: {asset}</h3>
            <h3>New Asset: {newAsset}</h3>
        </div>
    );
};

export default Special;