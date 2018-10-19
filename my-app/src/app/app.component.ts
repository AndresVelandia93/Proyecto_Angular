import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tu Consejero';
  descr = 'Calculadora';
  show : boolean=true;
  opers  = ['Suma', 'Resta', 'Multi', 'Divid'];
}
