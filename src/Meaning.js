import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="ResultsBox">
            <div className="definition">{definition.definition}</div>

            {definition.example && definition.example.length > 0 && (
              <div className="example">"{definition.example}"</div>
            )}

            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
