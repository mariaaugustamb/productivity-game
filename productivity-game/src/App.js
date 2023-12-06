import logo from './logo.svg';
import './App.css';
import Selectmenu from './components/selectMenu';
import ScoreBoard from './components/scoreBoard';


function App() {
  return (
    <div>

        <div class="items-stretch h-full"> 
          <div class="flex justify-center items-center min-h-screen">
            <div class="rounded-lg pt-4 pb-10 pr-6 pl-6 flex flex-col items-center justify-center box-border bg-gray-200">
              <h3 class="mt-4">Select</h3>
              <div class="box-border w-80 m-4">
                <Selectmenu people={[{ id: 0, name: "User" }, { id: 1, name: "Chico" }, { id: 2, name: "Mary" }]} />
              </div>
              <div class="box-border w-80 m-4">
                <Selectmenu people={[{ id: 0, name: "Activity" }, { id: 1, name: "activity 1", points: 1 }, { id: 2, name: "activity 2", points: 1 }, { id: 3, name: "activity 3", points: 1 }]} />
              </div>
            </div>

            <div class="rounded-lg pt-4 pb-6 pr-6 pl-6 ml-4 flex flex-col items-center justify-center box-border bg-gray-200">
              <h3 class="mt-6">Score Board</h3>
              <div class="box-border w-80 m-4">
                <ScoreBoard />
              </div>

            </div>
          </div>
        </div>

    </div>
  );
}

export default App;
