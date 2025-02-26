import { Key } from "./Key";

function generateIDs(count: number): Array<string> {
  return Array.from({length: count}, () => crypto.randomUUID());
}

function generateKeys(count: number): Array<any> {
  const KEY_ID_LIST: Array<string> = generateIDs(count);
  const keys: Array<any> = Array.from({length: count}, Key);
  for (let i = 0; i < count; i++) {
    keys[i] = KEY_ID_LIST[i];
  }
  return keys;
}

export function Main() {
  return <main>{generateKeys(10)}</main>;
}
