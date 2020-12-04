import { Component, OnInit } from '@angular/core';
import {MyError} from "../../shared/models/error";
import {ErrorService} from "../../shared/services/error.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-errors-details',
  templateUrl: './errors-details.component.html',
  styleUrls: ['./errors-details.component.scss']
})
export class ErrorsDetailsComponent implements OnInit {
  error: MyError;

  constructor(
    private errorService: ErrorService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.errorService.getErrorById(id).subscribe(err => {
      this.error = err;
    });
  }

}
