import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}> {synonym}</li>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
