/**
 * Created by Srikar on 22-12-2016.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'about',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AboutComponent  { name = 'About Component'; }
