import logo from './logo.svg';
import './App.css';
import Selectmenu from './components/selectMenu';


function App() {
  return (
    <div>

        <div class="box-border h-32 w-80">
          <Selectmenu people = {[{id: 1, name: "thiago"}, {id: 2, name: "maria"}]}/>
        </div>

        <div class="box-border h-32 w-80">
          <Selectmenu people = {[{id: 1, name: "activity 1", points: 1}, {id: 2, name: "activity 2", points: 1}, {id: 3, name: "activity 3", points: 1} ]}/>
        </div>

      </div>
  );
}

export default App;
