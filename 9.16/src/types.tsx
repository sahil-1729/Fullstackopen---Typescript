export interface diary {
  id: number;
  date: string;
  weather: "rainy" | "sunny" | "windy" | "cloudy";
  visibility: "poor" | "good";
  comment: string;
}

export enum Weather {
  Rainy = "rainy",
  Sunny = "sunny",
  Windy = "windy",
  Cloudy = "cloudy",
}

export enum Visibility {
  Great = "great",
  Good = "good",
  Ok = "ok",
  Poor = "poor",
}
