export class Model {
  public static assign<T>(obj: any) {
    if (!obj)
      return undefined;

    // @ts-ignore
    return Object.assign(<T>{}, obj);
  }

  public static assigns<T>(objs: any[]){
    let results: any[] = [];
    objs.forEach(item => results.push(this.assign<T>(item)));
    return results;
  }
}
