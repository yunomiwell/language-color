import { Color, Letter, Alphabet } from "./types";

export const calculateWordColor = (colors: Color[]): Color => {
  // TODO
  return colors[0];
};

export const letterToColorCode = (
  letter: Letter,
  alphabet: Alphabet
): Color => {
  const letterNumber = alphabet.findIndex(
    (currentLetter) => currentLetter === letter
  );
  const colorCode = (255 / alphabet.length) * letterNumber;
  return [colorCode, 100, 50];
};
