import {Component, OnInit} from '@angular/core';
import {ColDef, ColumnApi, GridApi, GridReadyEvent} from "ag-grid-community";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  api: GridApi | undefined;
  columnApi: ColumnApi | undefined;

  ngOnInit() {
    console.log("init")
  }
  public onGridReady(params: GridReadyEvent) {
    console.log("test")
    this.api = params.api;
    this.columnApi = params.columnApi;
    this.title = "grid ready"
  }
}
