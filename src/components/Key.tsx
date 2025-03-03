import { Light } from "./Light";

export interface KeyProps {
  isOn?: boolean;
  id: string;
}


export function Key({id}: KeyProps) {
  return (
    <div className="key" key={id}>
      <Light />
    </div>
  );
}
