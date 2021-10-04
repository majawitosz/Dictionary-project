export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetics.audio} target="_blank">
        <button>🔊</button>
      </a>
      <br />
      {props.phonetics.text}
    </div>
  );
}
