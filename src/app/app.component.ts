import { Component } from '@angular/core';

import {DataSource} from '@angular/cdk/table';
import { CdkTableModule } from '@angular/cdk/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicacion con angular 6';
  autor = 'Anibal';
  version = '1.0.0';
}
