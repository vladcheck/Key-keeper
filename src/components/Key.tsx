import { Light } from "./Light";

export interface KeyProps {
  id: string;
}


export function Key(props: KeyProps) {
  return (
    <div className="key" key={props.id}>
      <Light />
    </div>
  );
}
