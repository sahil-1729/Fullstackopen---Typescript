interface bmiVal {
  value1: number;
  value2: number;
}

const parseArg = (args: string[]): bmiVal => {
  console.log(args.length);
  if (args.length < 4) {
    throw new Error("Very few arguements");
  }
  if (args.length > 4) {
    throw new Error("Too many arguements");
  }

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3]),
    };
  } else {
    throw new Error("No numbers were found!");
  }
};

export function bmiCalculator(height: number, weight: number) {
  const result: number = weight / (height * height);
  //   console.log("Here's the result ", result);
  var message: string = "";
  if (result < 18.5) {
    message = "Underweight";
  } else if (result < 25) {
    message = "Normal (Healthy)";
  } else {
    message = "Overweight";
  }
  return message;
}

try {
  const { value1, value2 } = parseArg(process.argv);
  console.log(bmiCalculator(value1, value2));
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}
// const h:number = Number(process.argv[2]);
// const w:number = Number(process.argv[3]);
// function parseArgsWeb(h: number, w: number) {
//   // console.log(args.length);
//   if (!(h && w)) {
//     throw new Error("Very few arguements");
//   }

//   if (!isNaN(Number(h)) && !isNaN(Number(w))) {
//     return {
//       value1: Number(h),
//       value2: Number(w),
//     };
//   } else {
//     throw new Error("No numbers were found!");
//   }
// }

// function bmiCalculatorWeb(height: number, weight: number) {
//   try {
//     const { value1, value2 } = parseArgsWeb(height, weight);
//     console.log(bmiCalculator(value1, value2));

//     return bmiCalculator(value1, value2);
//   } catch (error: unknown) {
//     let errorMessage = "Something bad happened.";
//     if (error instanceof Error) {
//       errorMessage += " Error: " + error.message;
//     }
//     console.log(errorMessage);
//     return errorMessage;
//   }
// }
