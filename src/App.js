import Header from "./components/header";
import './App123.css';
import EssentialVitamins from "./components/essential_vitamins";
import Features from "./components/features";
import Ingrediants from "./components/ingrediants";

function App() {
  return (
    <div className="App">
      <Header />
      <EssentialVitamins />
      <Features />
      <Ingrediants />
    </div>
  );
}

export default App;
