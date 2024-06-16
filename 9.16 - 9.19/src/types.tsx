export interface diary {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

export type newDiaryEntry = Omit<diary, "id">;

export enum Weather {
  Rainy = "rainy",
  Sunny = "sunny",
  Windy = "windy",
  Cloudy = "cloudy",
  // None = "none",
}

export enum Visibility {
  Great = "great",
  Good = "good",
  Ok = "ok",
  Poor = "poor",
  // None = "none",
}
