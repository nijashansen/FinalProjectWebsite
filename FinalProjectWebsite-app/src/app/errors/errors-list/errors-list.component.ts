import { Component, OnInit } from '@angular/core';
import {MyError} from "../../shared/models/error";
import {ErrorService} from "../../shared/services/error.service";
import {Time} from "@angular/common";
import {AuthenticationService} from "../../shared/services/authentication.service";

@Component({
  selector: 'app-errors-list',
  templateUrl: './errors-list.component.html',
  styleUrls: ['./errors-list.component.scss']
})
export class ErrorsListComponent implements OnInit {

  errors: MyError[];

  constructor(private errorService: ErrorService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.errorService.getErrors().subscribe(listOfErrors => {
      this.errors = listOfErrors;
    });
  }

  deleteError(id: number){
    this.errorService.deleteError(id).subscribe(value => {
      console.log(value.id);
      this.refresh();
    });
  }

  getErrorLength(): number {
    return this.errors.length;
  }

}
