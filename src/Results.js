export default function Results(props) {
  if (props.results) {
    return <div className="Results">Hello from results</div>;
  } else {
    return null;
  }
}
