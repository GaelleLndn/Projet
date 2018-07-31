import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-log-add-form',
  templateUrl: './log-add-form.component.html',
  styleUrls: ['./log-add-form.component.css']
})
export class LogAddFormComponent implements OnInit {

  myForm: FormGroup;
  today = new Date;
  cats$ = [
    {
      id: 1, label: 'cat1'
    },
    {
      id: 2, label: 'cat2'
    },
    {
      id: 3, label: 'cat3'
    },
    {
      id: 4, label: 'cat4'
    }
  ]

  constructor( private formBuilder: FormBuilder,  private apiService: ApiService) { }

  ngOnInit() {

    this.myForm = this.formBuilder.group({
      id: [''],
      date: [ this.today , Validators.required],
      log : ['', Validators.required],
      category: ['' , Validators.required]
    })
  }

  createLog(logData){
    this.apiService.addLog(logData);
  }

}
