interface courseName {
  name: string;
}

export default function Header(props: courseName): JSX.Element {
  return <h1>{props.name}</h1>;
}
