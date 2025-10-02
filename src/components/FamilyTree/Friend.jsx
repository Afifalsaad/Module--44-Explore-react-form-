import React, { use } from "react";
import { MoneyContext } from "./FamilyTree";

const Friend = () => {
  const [money, setMoney] = use(MoneyContext);

  return (
    <div>
      <h3>Friend</h3>
      <button onClick={() => setMoney(money + 10000)}>Add Money</button>
    </div>
  );
};

export default Friend;
