import "./Phonetics.css";
import { FaVolumeUp } from "react-icons/fa";
export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        <button>
          <FaVolumeUp className="volumeIcon" />
        </button>
      </a>
      <span className="text">{props.phonetics.text}</span>
    </div>
  );
}
