import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">What word you are looking for?</header>
        <Dictionary />
        <footer className="footer">Coded by Maja Witosz</footer>
      </div>
    </div>
  );
}
