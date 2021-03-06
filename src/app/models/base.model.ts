export class BaseModel {
  constructor(params?: any) {
    if (params !== undefined) {
      for (let key in params) {
        this[key] = params[key];
      }
    }
  }

  getDateKey(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  }

  serailize(): string {
    return JSON.stringify(this);
  }
}
