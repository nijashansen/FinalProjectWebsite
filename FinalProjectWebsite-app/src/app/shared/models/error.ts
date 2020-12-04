import {MyProcess} from "./process";

export class MyError{
  id?: number;
  errorType: string;
  errorDetail: string;
  process: MyProcess;
}
