import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASE_URL = 'http://localhost:8081/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  postActivity(activityDto:any):Observable<any>{
    return this.http.post(BASE_URL +"api/activity",activityDto);
  }

  getActivity():Observable<any>{
    return this.http.get(BASE_URL +"api/activities");
  }
  postWorkout(workoutDto:any):Observable<any>{
    return this.http.post(BASE_URL +"api/workout",workoutDto);
  }

  getWorkouts():Observable<any>{
    return this.http.get(BASE_URL +"api/workouts");
  }


  postGoal(goalDto:any):Observable<any>{
    return this.http.post(BASE_URL +"api/goal",goalDto);
  }
  getGoals():Observable<any>{
    return this.http.get(BASE_URL +"api/goals");
  }
  updateGoalStatus(id:number):Observable<any>{
    return this.http.get(BASE_URL +"api/goal/status/"+id);
  }
  getStats():Observable<any>{
    return this.http.get(BASE_URL +"api/stats");
  }
   
}
