import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";
import "../FamilyTree/FamilyTree.css";

export const AssetContext = createContext("");
export const MoneyContext = createContext(0);

const FamilyTree = () => {
  const asset = "diamond";
  const newAsset = "gold";
  const [money,setMoney] = useState(0)

  return (
    <div className="family-tree">
        <h4>Total Family Money: {money}</h4>
      <h3>Family Tree</h3>
      <MoneyContext value={[money,setMoney]}>
        <AssetContext.Provider value={newAsset}>
          <Grandpa asset={asset}></Grandpa>
        </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;
