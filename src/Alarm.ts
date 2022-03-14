import CustomData from "./CustomData";
import Leds from "./Leds";
import PartialLight from "./PartialLight";

export default interface Alarm {
  name?: string;
  isOn: boolean;
  id: string;
  leds: Omit<Leds, "timeout">;
  custom_sequence?: CustomData[];
  time: string;
  days: number[];
  lights: PartialLight[];
}
