export default function Intro(props) {
  return (
    <section id="intro">
      <h1>{props.title}</h1>
      <p>{props.instructions}</p>
    </section>
  );
}
