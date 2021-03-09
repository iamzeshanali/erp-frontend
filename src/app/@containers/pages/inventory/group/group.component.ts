import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@app/@services/api.service';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent  {

  tableData: any;
  tableColumns: any[] = [];
  dataSource: any;
  testData: any;
  moduleName:any = "Group";
  constructor( private dataService:ApiService) 
  {
    this.tableData = new MatTableDataSource<object>();
    this.dataService.getGroupsAPI().subscribe( data => 
    {
      this.dataSource = data;
      this.testData = data;
      
      this.tableColumns = Object.keys(this.dataSource[0]);
   
      this.tableData = new MatTableDataSource<object>(this.dataSource);
     
      
    });
  }

}