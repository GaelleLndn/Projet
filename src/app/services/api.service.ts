import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Rx'
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


import { Log } from '../logs/log.interface'
import { Category } from '../categories/category.interface'
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  API_URL = 'http://localhost:8000';
  logs = [];
  logSubject = new Subject();


  constructor(private http: HttpClient) { }

// API: GET /categoriess
 public getAllCategories(){
  return this.http.get(`${this.API_URL}/categories`).pipe(
    map( (data: any) => data.categories)
  )
}

// API: POST /categories
public createCategory(category: Category) {
  // will use this.http.post()
}


// API: GET /categories/:id
public getCategoryById(categoryId: any) {
// will use this.http.get()
}


// API: PATCH /categories/:id
public updateCategory(category: Category) {
  // will use this.http.put()
}

// DELETE /categories/:id
public deleteCategoryById(categoryId: any){
  // will use this.http.delete()
}



  public getAllLogs(){
    return this.http.get(`${this.API_URL}/logs`).pipe(
      map( (data: any) => data.logs)
    )
  };

  public addLog(logData){
    return this.logSubject.next(logData)
  }

}
