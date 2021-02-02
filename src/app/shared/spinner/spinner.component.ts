import { Component } from "@angular/core";

@Component({
  selector: 'app-spinner',
  styleUrls: ['./spinner.component.less'],
  template: '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>'
})
export class SpinnerComponent { }
