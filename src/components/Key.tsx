import { Light } from "./Light";

export interface Key {
  isOn: boolean;
}


export function Key() {
  return (
    <div className="key">
      <Light />
    </div>
  );
}
