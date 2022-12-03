import Form from "../components/Form";
import CheckBox from "../components/CheckBox";
import List from "../components/List";
import Navbar from "../components/Navbar";

export default function App() {
  return (
    <div className="main flex flex-col justify-start items-center overflow-y-scroll no-scrollbar">
      <Navbar></Navbar>
      <Form />
      <List />
    </div>
  );
}
