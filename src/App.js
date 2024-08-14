import './App.css';
import TodoListApp from './components/todo-component/todo.component';
import WeatherApp from './components/weather-component/weather.component';

function App() {
  return (
    <div className="App w-screen h-screen flex justify-center items-center">
      <div className="app-item-container flex flex-row w-[80%] h-[80%] border-4">
        <WeatherApp />
        <TodoListApp />
      </div>
    </div>
  );
}

export default App;
