import React, { createContext } from "react";
import Grandpa from "./Grandpa";
import "../FamilyTree/FamilyTree.css";

export const AssetContext = createContext("");

const FamilyTree = () => {
  const asset = "diamond";
  const newAsset = "gold";

  return (
    <div className="family-tree">
      <h3>Family Tree</h3>
      <AssetContext.Provider value={newAsset}>
        <Grandpa asset={asset}></Grandpa>
      </AssetContext.Provider>
    </div>
  );
};

export default FamilyTree;
