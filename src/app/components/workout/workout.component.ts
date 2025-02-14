import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.scss'
})
export class WorkoutComponent {
    gridStyle = {

      width:'100%',
      textAlign: 'center',
    };

    workouts:any;
    workoutForm!:FormGroup;


    listOfType:any[]=[
      "Cardio",
      "Strength",
      "Flexibility",
      "Balance",
      "Endurance",
      "atibility",

    ];

    constructor(private fb: FormBuilder,
      private userService:UserService,
      private message:NzMessageService
    ) {  

    }

      ngOnInit() {
          this.workoutForm = this.fb.group({
            type: [null,[Validators.required]],
            duration: [null,[Validators.required]],
            caloriesBurned: [null,[Validators.required]],
         
            date: [null,[Validators.required]],
          });
          this.getAllWorkouts();
        }
        getAllWorkouts() {

          this.userService.getWorkouts().subscribe(res => {
            this.workouts = res;
            console.log(this.workouts);
          });
        }
        submiForm(){
          this.userService.postWorkout(this.workoutForm.value).subscribe(res=>{
            this.message.success('Form submitted successfully',{nzDuration:5000});
            this.workoutForm.reset();
            this.getAllWorkouts();
            
        },error=>{
          this.message.error('Error submitting form',{nzDuration:5000});
        })
      }
    
     

}
