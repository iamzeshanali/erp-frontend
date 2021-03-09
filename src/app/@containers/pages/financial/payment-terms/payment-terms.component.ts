import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@app/@services/api.service';
@Component({
  selector: 'app-payment-terms',
  templateUrl: './payment-terms.component.html',
  styleUrls: ['./payment-terms.component.scss']
})
export class PaymentTermsComponent  {

  moduleName:any ="Payment Terms"
  tableData: any;
  tableColumns: any[] = [];
  dataSource: any;
  testData: any;

  rowClickedData:any;

  constructor( private dataService:ApiService)
  {
    this.tableData = new MatTableDataSource<object>();
    this.dataService.getPaymentTermsFromAPI().subscribe( data =>
    {
      this.dataSource = data;
      this.testData = data;

      this.tableColumns = Object.keys(this.dataSource[0]);

      this.tableData = new MatTableDataSource<object>(this.dataSource);


    });
  }
  parentEventHandler(valueEmitter : any)
  {
    this.rowClickedData = valueEmitter;
    console.log(this.rowClickedData);
  }
 
}
