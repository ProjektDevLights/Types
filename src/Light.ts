import Leds from "./Leds";

export default interface Light {
  name: string;
  id: string;
  leds: Leds;
  count: number;
  brightness: number;
  tags?: string[];
  isOn: boolean;
  position: number;
}
