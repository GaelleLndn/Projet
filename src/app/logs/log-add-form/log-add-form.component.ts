import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { ApiService } from '../../services/api.service';
import { Category } from '../../categories/category.interface';

@Component({
  selector: 'app-log-add-form',
  templateUrl: './log-add-form.component.html',
  styleUrls: ['./log-add-form.component.css']
})
export class LogAddFormComponent implements OnInit {

  myForm: FormGroup;
  today = new Date;
  error = '';

  categories : Category [] = []

  constructor( private formBuilder: FormBuilder,  private apiService: ApiService) { }

  ngOnInit() {
    this.showAllCategories();

    this.myForm = this.formBuilder.group({
      id: [''],
      date: [ this.today , Validators.required],
      title: ['', Validators.required],
      category: ['', Validators.required ]
    })
  }

  showAllCategories() {
    this.apiService.getAllCategories()
      .subscribe(
        (data: Category[]) => { 
          this.categories = data;
          console.log('CATS', this.categories) 
        },
        error => {
          this.error = error;
          console.log(error)
        }
      
      )
  }

  createLog(logData){
    console.log('ajoute un log')
    this.apiService.createLog(logData).subscribe()
  }

}
