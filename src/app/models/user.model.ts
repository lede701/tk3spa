export class User {

  id: number;
  fkid: number;
  workScheduleId: number;
  workHoursPerWeek: number;
  firstName: string;
  middleName: string;
  lastName: string;
  positionDescription: string;
  employeeStatus: number;
  startDate: Date;
  endDate: Date;
  eMailAddr: string;
  username: string;
  password: string;
  created: Date;
  createdBy: number;
  modified: Date;
  modifiedBy: number;
  status: number;

  constructor(params) {
    if (params !== undefined) {
      for (let key in params) {
        this[key] = params[key];
      }
    }
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }

  getLastFirstName(): string {
    return `${this.lastName}, ${this.firstName}`;
  }

  getTitle(): string {
    return this.positionDescription;
  }

}
