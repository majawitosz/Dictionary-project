import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <Dictionary />
        <footer className="footer">
          <a
            className="githubLink"
            href="https://github.com/majawitosz/dictionary-project"
          >
            Open-source code
          </a>{" "}
          by Maja Witosz 👩‍💻
        </footer>
      </div>
    </div>
  );
}
