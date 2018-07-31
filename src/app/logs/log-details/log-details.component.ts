import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

import { Log } from '../log.interface'

@Component({
  selector: 'app-log-details',
  templateUrl: './log-details.component.html',
  styleUrls: ['./log-details.component.css']
})
export class LogDetailsComponent implements OnInit {

  logDetails : Log ;
  error = '';
  errorMessage = '';

  constructor( private apiService: ApiService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    console.log({id})
    this.apiService.getLogById(id).subscribe(
      (data: Log) => { 
        this.logDetails = data;
        console.log('this.logDetails', this.logDetails)
      },
      error => {
        this.handleError(error)
      }
    )
  }


  handleError(error){
    console.log('handleError', error.satusText);
    this.error = error
  }
}
