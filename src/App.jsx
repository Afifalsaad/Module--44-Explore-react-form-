import "./App.css";
import ActionForm from "./components/ActionForm/ActionForm";
import ControlledField from "./components/ControlledField/ControlledField";
import HookForm from "./components/HookForm/HookForm";
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
      <HookForm></HookForm>
    </>
  );
}

export default App;
