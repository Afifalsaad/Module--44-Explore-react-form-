import "./App.css";
import ActionForm from "./components/ActionForm/ActionForm";
import ControlledField from "./components/ControlledField/ControlledField";
import FamilyTree from "./components/FamilyTree/FamilyTree";
import HookForm from "./components/HookForm/HookForm";
import ProductManagement from "./components/ProductManagement/ProductMangement";
import SimpleForm from "./components/SimpleFrom/SimpleForm";
import UnControlledForm from "./components/UncontrolledForm/UnControlledForm";

function App() {
  return (
    <>
      <h1>Explore React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <ActionForm></ActionForm> */}
      {/* <ControlledField></ControlledField> */}
      {/* <UnControlledForm></UnControlledForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ProductManagement></ProductManagement> */}
      <FamilyTree></FamilyTree>
    </>
  );
}

export default App;
