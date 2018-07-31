import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../services/api.service';
import { Log }  from '../log.interface';


@Component({
  selector: 'app-logs-list',
  templateUrl: './logs-list.component.html',
  styleUrls: ['./logs-list.component.css']
})
export class LogsListComponent implements OnInit {
  logs: Log[] = [];
  error = '';

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.showAllLogs();

    this.apiService.logSubject
      .subscribe(
        (data:Log) => { 
          this.logs = [data, ...this.logs];
          console.log('CREATE', data) 
        }
      )
  }


  showAllLogs(){
    this.apiService.getAllLogs()
      .subscribe(
        (data: Log[]) => { 
          this.logs = data;
          console.log('DATAS', this.logs) 
        },
        error => {
          this.error = error;
          console.log(error)
        }
      
      )
  }
}
