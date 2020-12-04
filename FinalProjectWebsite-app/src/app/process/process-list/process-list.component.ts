import { Component, OnInit } from '@angular/core';
import {MyProcess} from "../../shared/models/process";
import {ProcessService} from "../../shared/services/process.service";
import {map} from "rxjs/operators";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DeleteDialogComponent} from "../../shared/dialogComponent/delete-dialog/delete-dialog.component";

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss']
})
export class ProcessListComponent implements OnInit {
  panelOpenState = false;
  processes: MyProcess[];

  constructor(private processService: ProcessService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.processService.getProcesses().subscribe(listOfProcesses => {
      this.processes = listOfProcesses;
    });
  }

  openDialog(id: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = id;

    let dialogRef = this.dialog.open(DeleteDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe( () => {
      this.refresh();
      }
    );
  }

  getProcessLength(): number {
    return this.processes.length;
  }

}
