import { Component } from '@angular/core';
import { TopWidgetsComponent } from '../top-widgets/top-widgets.component';
import { SalesByCategoryComponent } from '../sales-by-category/sales-by-category.component';
import { TopThreePerfComponent } from '../top-three-perf/top-three-perf.component';
import { PerfByShiftComponent } from '../perf-by-shift/perf-by-shift.component';
import { SalesbymonthComponent } from '../salesbymonth/salesbymonth.component';
import { LastfewcomponentComponent } from '../lastfewcomponent/lastfewcomponent.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports:[
    TopWidgetsComponent,
    SalesByCategoryComponent,
    TopThreePerfComponent,
    PerfByShiftComponent,
    SalesbymonthComponent,
    LastfewcomponentComponent
   ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
