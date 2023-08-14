import { WordBox } from "./components/WordBox";
import { ALPHABET, Color, Letter } from "./types";
import { letterToColorCode, calculateWordColor } from "./utils";
import "./styles.css";

const TEXT = "f".split(" ");

const getWordColor = (word: string): Color => {
  const letters: Letter[] = word.split("") as Letter[];
  const colorCodes: Color[] = letters.map((letter) =>
    letterToColorCode(letter, ALPHABET)
  );
  return calculateWordColor(colorCodes);
};

export default function App() {
  return (
    <div className="Text">
      {TEXT.map((word) => (
        <>
          <WordBox color={getWordColor(word.toUpperCase())}>{word}</WordBox>{" "}
        </>
      ))}
    </div>
  );
}
