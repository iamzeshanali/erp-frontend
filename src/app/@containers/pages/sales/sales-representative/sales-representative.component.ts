import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@app/@services/api.service';
@Component({
  selector: 'app-sales-representative',
  templateUrl: './sales-representative.component.html',
  styleUrls: ['./sales-representative.component.scss']
})
export class SalesRepresentativeComponent {
  tableData: any;
  tableColumns: any[] = [];
  dataSource: any;
  testData: any;
  moduleName:any = "Sales Representative";
  constructor( private dataService:ApiService) 
  {
    this.tableData = new MatTableDataSource<object>();
    this.dataService.getSalesRepresentativesFromAPI().subscribe( data => 
    {
      this.dataSource = data;
      this.testData = data;
      
      this.tableColumns = Object.keys(this.dataSource[0]);
   
      this.tableData = new MatTableDataSource<object>(this.dataSource);
     
      
    });
  }
  

}