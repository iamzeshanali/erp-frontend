import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DtableComponent } from '@app/@components/dynamic/dtable/dtable.component';
import { ApiService } from '@app/@services/api.service';
@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent  {

  tableData: any;
  tableColumns: any[] = [];
  dataSource: any;
  testData: any;
  moduleName:any = "Family";
  entityName = 'inventory/family'

  @ViewChild(DtableComponent) parentPaginator!: DtableComponent;
  @ViewChild(DtableComponent) parentSort!: DtableComponent;
  constructor( private dataService:ApiService) 
  {
    this.tableData = new MatTableDataSource<object>();
    this.dataService.getAPI('family').subscribe( data => 
    {
      if(data.hasOwnProperty('error'))
      {
        this.tableData = 0;
      }else{
        this.dataSource = data;
        this.testData = data;
        
        this.tableColumns = Object.keys(this.dataSource[0]);
     
        this.tableData = new MatTableDataSource<object>(this.dataSource);
        this.tableData.paginator =  this.parentPaginator.paginator;
        this.tableData.sort =  this.parentSort.sort;
      }
    });
  }

}
