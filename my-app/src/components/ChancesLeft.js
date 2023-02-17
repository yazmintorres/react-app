export default function ChancesLeft(props) {
  return (
    <div>
      <p>Chances Left</p>
      <div id="chances">{props.attempts}</div>
    </div>
  );
}
