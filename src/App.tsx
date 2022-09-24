import "./styles/App.scss";
import Weather from "./components/Weather";

function App() {
  // const [temperature, setTemparature] = useState<IFetchData | null>(null);

  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
    </div>
  );
}

export default App;
