/*
author: martin wcr
version: v1
project: automation dashboard
*/
import "./App.css";

import CreateForm from "./Components/CreateForm";
import PageHeader from "./Components/PageHeader";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <CreateForm />
    </div>
  );
}

export default App;
