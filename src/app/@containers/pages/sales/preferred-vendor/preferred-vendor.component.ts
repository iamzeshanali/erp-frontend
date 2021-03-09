import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '@app/@services/api.service';
@Component({
  selector: 'app-preferred-vendor',
  templateUrl: './preferred-vendor.component.html',
  styleUrls: ['./preferred-vendor.component.scss']
})
export class PreferredVendorComponent {

  tableData: any;
  tableColumns: any[] = [];
  dataSource: any;
  testData: any;
  moduleName:any = "Preferred Vendor";

  constructor( private dataService:ApiService) 
  {
    this.tableData = new MatTableDataSource<object>();
    this.dataService.getPreferredVendorsAPI().subscribe( data => 
    {
      this.dataSource = data;
      this.testData = data;
      
      this.tableColumns = Object.keys(this.dataSource[0]);
   
      this.tableData = new MatTableDataSource<object>(this.dataSource);
     
      
    });
  }

}
