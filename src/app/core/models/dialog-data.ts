import {Model} from "./model";

export class DialogData extends Model {
  title: string;
  message: string;
  textCancel: string;
  textOk: string;

  constructor() {
    super();
    this.title = '';
    this.message = '';
    this.textCancel = '';
    this.textOk = '';
  }


  public static override assign(obj: any) {
    if (!obj)
      return undefined;

    return Object.assign(new DialogData(), obj);
  }
}
