import { CoursePart } from "../App";

interface contents {
  courseParts: CoursePart[];
}

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part = ({ arr }: { arr: CoursePart[] }) => {
  return arr.map((val) => {
    switch (val.kind) {
      case "basic":
        // console.log("1");
        return (
          <p>
            {val.name} {val.exerciseCount} <br />
            {val.description}
          </p>
        );
      case "group":
        return (
          <p>
            {val.name} {val.exerciseCount} <br />
            Project exercises (Group project count) {val.groupProjectCount}
          </p>
        );
      case "background":
        return (
          <p>
            {val.name} {val.exerciseCount}
            <br />
            {val.description}
            <br />
            Submit to {val.backgroundMaterial}
          </p>
        );
      default:
        return assertNever(val);
    }
  });
};

export default function Content(props: contents): JSX.Element {
  return <Part arr={props.courseParts} />;
}
