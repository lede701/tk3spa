import { User } from './user.model';

export class Timesheet {
  id: number;
  user: User;
  startDate: Date;
  endDate: Date;

  monthName: Array<string> = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  monthFullName: Array<string> = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
        this.user = new User({
          id: 1,
          fkid: 32,
          workScheduleId: 1,
          hoursPerWeek: 40,
          firstName: "Leland",
          middleName: "",
          lastName: "Ede",
          positionDescription: "Web/Database Developer",
          employeeStatus: 1,
          startDate: new Date("11/1/2001"),
          eMailAddr: "lede@ncjfcj.org",
          username: "lede",
          password: "password1234",
          created: new Date(),
          createdBy: 1,
          modified: new Date(),
          modifiedBy: 1,
          status: 1
          });
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

  getFullMonth(): string {
    let mon = "";

    mon = this.monthFullName[this.startDate.getMonth()];
    if (this.startDate.getMonth() != this.endDate.getMonth()) {
      mon += ` - ${this.monthFullName[this.endDate.getMonth()]}`;
    }

    return mon;
  }

  getLastFirstName(): string {
    // TODO: pull this from the timesheet data when it is available
    return this.user.getLastFirstName();
  }

  getTitle(): string {
    // TODO: pull this from the timesheet data when it is available
    return this.user.getTitle();
  }
}
