import PartialLight from "./PartialLight";

export default interface Alarm{
    id: string,
    color: string,
    date: string,
    days: number[],
    repeat: number,
    lights: PartialLight[],
}