import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addtask from './components/Addtask'
import Tasklist from './components/Tasklist';


function App() {
  return (
    <div className="App">
       <Addtask/>
       <Tasklist/>
    </div>
  );
}

export default App;
