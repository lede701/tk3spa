export class GrantInfo{
  ObjectType: string = "GRANTINFO";

  grantId: number;
  grantNum: string;
  projCode: string;
  grantDesc: string;
  grantType: number;
  commentType: number;
  status: number;
  created: Date;
  createdBy: number;
  modified: Date;
  modifiedBy: number;
}
