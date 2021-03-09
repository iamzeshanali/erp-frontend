import { Component,ViewChild, OnInit, AfterViewInit,AfterContentInit, AfterContentChecked } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ApiService } from '@app/@services/api.service';
@Component({
  selector: 'app-open-items',
  templateUrl: './open-items.component.html',
  styleUrls: ['./open-items.component.scss']
})
export class OpenItemsComponent implements AfterContentChecked {


  tableData: any;
  tableColumns: any[] = [];
  dataSource: any;
  testData: any;

  constructor( private dataService:ApiService) {
    this.tableData = new MatTableDataSource<object>();
    this.dataService.getCasePacksFromAPI().subscribe( data => {
      this.dataSource = data;
      this.testData = data;
      
      this.tableColumns = Object.keys(this.dataSource[0]);
   
      this.tableData = new MatTableDataSource<object>(this.dataSource);
     
      
    });
    
  }

      
  ngAfterContentChecked() {
    this.testData = this.tableData;
  }
 
  

  


}
