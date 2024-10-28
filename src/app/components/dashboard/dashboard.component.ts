import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UserService } from '../../service/user.service';
import Chart, { CategoryScale } from 'chart.js/auto';


Chart.register(CategoryScale);
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


  statsData:any;
  workouts:any;
  activities:any;


  @ViewChild('workoutLineChart') private workoutLineChartRef: ElementRef;
  @ViewChild('ActivitiesLineChart') private ActivitiesLineChartRef: ElementRef;
  constructor(private userService:UserService) { }
  ngOnInit(): void {
    this.getStats();
    this.getGraphStats();
  }


  getGraphStats(){
    this.userService.getGraphStats().subscribe(res => {
      this.workouts = res.workouts;
      this.activities = res.activities;
      console.log(res);
      if(this.workoutLineChartRef || this.ActivitiesLineChartRef){
        this.createLineChart();
      }
    });
  }

  createLineChart(){
    const workoutCtx=this.workoutLineChartRef.nativeElement.getContext('2d');
    const activitiesCtx=this.ActivitiesLineChartRef.nativeElement.getContext('2d');
   

    new Chart(workoutCtx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  getStats(){
    this.userService.getStats().subscribe(res => {
      console.log(res);
      this.statsData = res;

    });
  }

}
