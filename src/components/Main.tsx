import { Key } from "./Key";
import { JSX } from "react";

function generateIDs(count: number): Array<string> {
  return Array.from({length: count}, () => crypto.randomUUID());
}

function generateKeys(count: number): JSX.Element[] {
  return generateIDs(count).map((id) => (
    <Key key={id} id={id} />
  ));
}

export function Main() {
  return <main>{generateKeys(10)}</main>;
}
