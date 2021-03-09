import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@app/@services/api.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent  {

  tableData: any;
  tableColumns: any[] = [];
  dataSource: any;
  testData: any;
  moduleName:any = "Customers";

  constructor( private dataService:ApiService) 
  {
    this.tableData = new MatTableDataSource<object>();
    this.dataService.getCustomersFromAPI().subscribe( data => 
    {
      this.dataSource = data;
      this.testData = data;
      
      this.tableColumns = Object.keys(this.dataSource[0]);
   
      this.tableData = new MatTableDataSource<object>(this.dataSource);
     
      
    });
  }

}
