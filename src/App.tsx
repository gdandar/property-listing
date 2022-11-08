import "./App.css";
import PropertyList from "./features/properties/PropertyList";
import PropertySearch from "./features/properties/PropertySearch";
import PropertySortOptions from "./features/properties/PropertySortOptions";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PropertySearch />
        <PropertySortOptions />
        <PropertyList />
      </header>
    </div>
  );
}

export default App;
