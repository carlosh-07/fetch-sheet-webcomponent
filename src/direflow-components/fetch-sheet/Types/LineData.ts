import { HermanoData } from "./HermanoData";

export interface Line {
  group_pic: string;
  hermanoData: HermanoData[];
  line: string;
}

export type LineData = Line[];
