import { Component } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  // tslint:disable-next-line: object-literal-sort-keys
  styleUrls: [ './nopagefound.component.css',
  ]
})
export class NopagefoundComponent  {

  public year = new Date().getFullYear();

}
