import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {
  gridStyle = {
    width: '100%',
    textAlign: 'center',
    
  };
  activityForm!: FormGroup;
   constructor(private fb: FormBuilder,private message:NzMessageService) { }
    ngOnInit(){
      this.activityForm = this.fb.group({
      caloriesBurned: [null,Validators.required],
      steps: [null,Validators.required],
      distance: [null,Validators.required],
      date: [null,Validators.required],
    });
  }
      
   }
  



