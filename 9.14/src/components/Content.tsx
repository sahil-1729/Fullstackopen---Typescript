interface contents {
  courseParts: courseContent[];
}

interface courseContent {
  name: string;
  exerciseCount: number;
}

export default function Content(props: contents): JSX.Element[] {
  return props.courseParts.map((val) => (
    <p>
      {val.name} {val.exerciseCount}
    </p>
  ));
}
