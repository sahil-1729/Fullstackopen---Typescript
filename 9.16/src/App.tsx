import { useEffect, useState } from "react";
import { diary } from "./types";
import diaryService from "./services/diary";

function App() {
  const [diaries, setDiary] = useState<diary[]>([]);

  useEffect(() => {
    const getDiary = async () => {
      const val = await diaryService.getAll();
      setDiary(val);
    };
    getDiary();
  }, []);

  return (
    <>
      {diaries.map((val, key) => {
        return (
          <div key={key}>
            <h3>{val.date}</h3>
            <br />
            Visibility - {val.visibility}&nbsp; Weather - {val.weather}
            <br />
            {val.comment}
          </div>
        );
      })}
    </>
  );
}

export default App;
