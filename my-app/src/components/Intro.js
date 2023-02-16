export default function Intro(props) {
  return (
    <section id="intro" className="container">
      <h1>{props.title}</h1>
      <p>{props.instructions}</p>
    </section>
  );
}
