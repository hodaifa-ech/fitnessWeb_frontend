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
        }
     
     
    


}
