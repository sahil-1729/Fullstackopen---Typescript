// const express = require("express");
import express from "express";
import { bmiCalculator } from "./bmiCalculator";

const app = express();

app.get("/hello", (_req, res) => {
  res.send("Hello Full stack!");
});

function parseArgsWeb(h: number, w: number) {
  // console.log(args.length);
  if (!(h && w)) {
    throw new Error("Very few arguements");
  }

  if (!isNaN(Number(h)) && !isNaN(Number(w))) {
    return {
      value1: Number(h),
      value2: Number(w),
    };
  } else {
    throw new Error("No numbers were found!");
  }
}

app.get("/bmi", (req, res) => {
  try {
    const h: number = Number(req.query.height);
    const w: number = Number(req.query.weight);

    const { value1, value2 } = parseArgsWeb(h, w);
    const message: string = bmiCalculator(value1, value2);

    res.send({
      weight: w,
      height: h,
      bmi: message,
    });
  } catch (error: unknown) {
    let errorMessage = "Something bad happened.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    console.log(errorMessage);
    res.send({
      error: errorMessage,
    });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
