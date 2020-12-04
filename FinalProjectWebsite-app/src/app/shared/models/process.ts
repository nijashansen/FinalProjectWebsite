import {MyError} from "./error";

export class MyProcess {
  id: number;
  processName: string;
  errors: MyError[];
}
