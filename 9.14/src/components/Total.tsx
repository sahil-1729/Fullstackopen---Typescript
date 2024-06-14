interface Count {
  count: number;
}

export default function Total(props: Count): JSX.Element {
  return <p>Number of exercises {props.count}</p>;
}
