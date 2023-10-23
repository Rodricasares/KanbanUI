import "./App.css";
import { Kanban } from "./assets/components/kanban/Kanban";
//import { Card } from './assets/components/Card'

function App() {
  return (
    <div className="flex-container">
      {" "}

        <h1>Kanban UI</h1>
        <Kanban />
    </div>
  );
}

export default App;
