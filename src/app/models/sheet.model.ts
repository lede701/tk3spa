import { User } from './user.model';
import { GrantDetails } from './grantdetails.model';

export class Timesheet {
  id: string;
  u_id: string;
  eSign: boolean;
  posDesc: string;
  tFirstName: string;
  tMiddleName: string;
  tLastName: string;
  workHours: number;
  workHoursPerWeek: number;
  tEmployeeStatus: number;
  startDate: Date;
  endDate: Date;
  employeeSignDate: Date;
  supervisorSignDate: Date;
  encryptKey: string;
  employeeSignature: string;
  supervisorSignature: string;

  grantDetails: GrantDetails[];
  user: User;
  daysData: Date[];
  timesheetHours: number = 0;

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
          this.id = '42957';
          this.u_id = '1';
          this.startDate = new Date("1/1/2021");
          this.endDate = new Date("1/15/2021");
          this.tFirstName = "Leland";
          this.tMiddleName = "";
          this.tLastName = "Ede";
          this.posDesc = "Web/Database Developer";
          this.tEmployeeStatus = 2;
          this.loadDaysData();
          this.loadUser();
          this.grantDetails = [];
          this.grantDetails.push(new GrantDetails({grantNum: '12021', projCode: '00' }));
        }
        break;
    }
    return this;
  }

  loadDaysData() {
    this.daysData = [];

    //let td = new TimeDetails();
    //this.timeDetails = td.loadSheet(this);

    // Create start day of time sheet
    let day = new Date(`${this.startDate.getDate()}/${this.startDate.getMonth() + 1}/${this.startDate.getFullYear()} 10:00 AM`);
    // Create a break point for runaway loops
    let runLoop = 0;
    let runAwayThreshold = 50;
    // Put start date into the list of days
    this.daysData.push(new Date(day));
    // Create list of days between start and end dates
    while (day.valueOf() < this.endDate.valueOf()) {
      // Add one day to the day date
      day.setDate(day.getDate() + 1);
      // Puch next day in list to the days array
      this.daysData.push(new Date(day));

      // Check if this day is counted as a work day
      if (day.getDay() != 0 && day.getDay() != 6) {
        this.timesheetHours += 8;
      }

      // Check if loop is no running away
      if (runLoop++ > runAwayThreshold) {
        // Report there was an error in build list of days for this time sheet!
        console.error("app-timesheet-model day loop has exceeded its limit!")
        break;
      }
    }
  }

  loadUser() {
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


  getMonth(): string {
    let mon = "";

    mon = this.monthName[this.startDate.getMonth()];
    if (this.startDate.getMonth() != this.endDate.getMonth()) {
      mon += ` - ${this.monthName[this.endDate.getMonth()]}`;
    }

    return mon;
  }

  getTimesheetYear(): string {
    let yr = `${this.startDate.getFullYear()}`;
    if (this.startDate.getFullYear() != this.endDate.getFullYear()) {
      yr += ` - ${this.endDate.getFullYear()}`;
    }

    return yr;
  }

  getDaysData(): Date[] {
    return this.daysData;
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
    return `${this.tLastName}, ${this.tFirstName}`;
  }

  getTitle(): string {
    return this.posDesc;
  }

  getEmployeeStatus(): string {
    let lookup: string[] = ['Non-Exempt', 'Exempt', 'Part Time'];
    return lookup[(this.tEmployeeStatus - 1)];
  }

  getTimesheetHours(): number {
    return this.timesheetHours;
  }

  getGrantList(): GrantDetails[] {
    return this.grantDetails;
  }
}
