import PartialLight from "./PartialLight";

export default interface Alarm {
  name?: string;
  isOn: boolean;
  id: string;
  color: string;
  time: string;
  days: number[];
  lights: PartialLight[];
}
