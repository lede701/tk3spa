import { TimeDetails } from './timedetails.model';

export class GrantDetails {

  id: number;
  grantNum: string;
  projCode: string;

  data: TimeDetails[];

  constructor(params) {
    this.grantNum = '12021';
    this.projCode = '00';
  }

  getGrantCode() {
    return `${this.grantNum}-${this.projCode}`;
  }
}
