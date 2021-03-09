import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@app/@services/api.service';
@Component({
  selector: 'app-case-pack',
  templateUrl: './case-pack.component.html',
  styleUrls: ['./case-pack.component.scss']
})
export class CasePackComponent {

  tableData: any;
  tableColumns: any[] = [];
  dataSource: any;
  testData: any;
  moduleName:any = "Case Pack";
  constructor( private dataService:ApiService) 
  {
    this.tableData = new MatTableDataSource<object>();
    this.dataService.getCasePacksFromAPI().subscribe( data => 
    {
      this.dataSource = data;
      this.testData = data;
      
      this.tableColumns = Object.keys(this.dataSource[0]);
   
      this.tableData = new MatTableDataSource<object>(this.dataSource);
     
      
    });
  }
}