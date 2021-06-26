import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIurl = "http://127.0.0.1:8000";
  readonly PhotoUrl = "http://127.0.0.1:8000/media/";

  constructor(private http:HttpClient) { }

  getDepList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIurl + '/departamentos/')
  }

  addDepartment(val : any){
    return this.http.post(this.APIurl + '/departamentos/', val);
  }

  updateDepartment(val : any){
    return this.http.put(this.APIurl + '/departamentos/', val);
  }

  deleteDepartment(val : any){
    return this.http.delete(this.APIurl + '/departamentos/' + val);
  }

  getEmplList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIurl + '/empleados/')
  }

  addEmployee(val : any){
    return this.http.post(this.APIurl + '/empleados/', val);
  }

  updateEmployee(val : any){
    return this.http.put(this.APIurl + '/empleados/', val);
  }

  deleteEmployee(val : any){
    return this.http.delete(this.APIurl + '/empleados/' + val);
  }

  UploadPhoto(val: any){
    return this.http.post(this.APIurl + '/SaveFile', val);
  }

  getAllDepartmentsNames(): Observable<any[]>{
    return this.http.get<any[]>(this.APIurl + '/departamentos/')
  }


}
