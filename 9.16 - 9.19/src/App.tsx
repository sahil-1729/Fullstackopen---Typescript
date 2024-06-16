import { useEffect, useState } from "react";
import { Visibility, Weather, diary, newDiaryEntry } from "./types";
import diaryService from "./services/diary";
import axios from "axios";

function App() {
  const [diaries, setDiary] = useState<diary[]>([]);
  const [entry, setEntry] = useState<newDiaryEntry>({
    date: "",
    weather: "" as Weather,
    // or you could use - weather: Weather.None
    visibility: "" as Visibility,
    comment: "",
  });
  const [errorM, setErrorM] = useState<string>("");

  useEffect(() => {
    const getDiary = async () => {
      const val = await diaryService.getAll();
      setDiary(val);
    };
    getDiary();
  }, []);

  const changeEntry = (field: string, val: string) => {
    const obj = {
      ...entry,
      [field]: val,
    };
    setEntry(obj);
  };

  return (
    <>
      <div>{errorM}</div>
      <form
        onSubmit={async (e: React.SyntheticEvent) => {
          e.preventDefault();
          console.log(entry);
          try {
            const result = await diaryService.create(entry);
            // console.log(result);
            const updated = [...diaries, result];
            // console.log(updated);
            setDiary(updated);
          } catch (error: any) {
            console.log(error.response.data);
            setErrorM(error.response.data);
          }
        }}
      >
        <div>
          <label>Enter Date</label>
          <input
            type="date"
            onChange={(e) => {
              console.log(e.target.value);
              const obj = {
                ...entry,
                date: e.target.value,
              };
              setEntry(obj);
            }}
          />
        </div>

        <div>
          <label>Enter Visibility</label> &nbsp;
          <input
            type="radio"
            name="visibility"
            value="great"
            onClick={() => {
              changeEntry("visibility", "great");
            }}
          />
          <label>great</label>
          <input
            type="radio"
            name="visibility"
            value="good"
            onClick={() => {
              changeEntry("visibility", "good");
            }}
          />
          <label>good</label>
          <input
            type="radio"
            name="visibility"
            value="ok"
            onClick={() => {
              changeEntry("visibility", "ok");
            }}
          />
          <label>ok</label>
          <input
            type="radio"
            value="poor"
            onClick={() => {
              changeEntry("visibility", "poor");
            }}
            name="visibility"
          />
          <label>poor</label>
          {/* <input
            type="text"
            onChange={(e) => {
              // console.log(e.target.value);
            }}
          /> */}
        </div>
        <div>
          <label>Enter weather</label>
          &nbsp;
          <input
            type="radio"
            value="rainy"
            name="weather"
            onClick={() => {
              changeEntry("weather", "rainy");
            }}
          />
          <label>rainy</label>
          <input
            type="radio"
            value="sunny"
            name="weather"
            onClick={() => {
              changeEntry("weather", "sunny");
            }}
          />
          <label>sunny</label>
          <input
            type="radio"
            value="windy"
            name="weather"
            onClick={() => {
              changeEntry("weather", "windy");
            }}
          />
          <label>windy</label>
          <input
            type="radio"
            value="cloudy"
            name="weather"
            onClick={() => {
              changeEntry("weather", "cloudy");
            }}
          />
          <label>cloudy</label>
        </div>
        <div>
          <label>Enter comment</label>
          <input
            type="text"
            onChange={(e) => {
              // console.log(e.target.value);
              const obj = {
                ...entry,
                comment: e.target.value,
              };
              setEntry(obj);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {diaries.map((val, key) => {
        return (
          <div key={key}>
            <h3>{val.date}</h3>
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
