interface LightProps {
  isOn?: boolean;
}

export function Light(props: LightProps) {
  return <div className={`light ${props.isOn ? "on" : ""}`}></div>;
}
