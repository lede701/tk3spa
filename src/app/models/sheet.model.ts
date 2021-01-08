import { User } from './user.model';

export class Timesheet {
  id: number;
  user: User;
  startDate: Date;
  endDate: Date;

  monthName: Array<string> = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

  constructor(params?:any) {
    if (params !== undefined) {
      for (let key in params) {
        this[key] = params[key];
      }
    }
  }

  load(tsid: number): Timesheet {
    switch (tsid) {
      case 42957: {
          this.id = 42957;
          this.startDate = new Date("1/1/2021");
        this.endDate = new Date("1/15/2021");
        this.user = new User("Leland", "Ede", "lede", "ascd");
        }
        break;
    }
    return this;
  }


  getMonth(): string {
    let mon = "";

    mon = this.monthName[this.startDate.getMonth()];
    if (this.startDate.getMonth() != this.endDate.getMonth()) {
      mon += ` - ${this.monthName[this.endDate.getMonth()]}`;
    }

    return mon;
  }
}
