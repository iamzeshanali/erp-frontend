import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DtableComponent } from '@app/@components/dynamic/dtable/dtable.component';
import { ApiService } from '@app/@services/api.service';
@Component({
  selector: 'app-sales-invoice',
  templateUrl: './sales-invoice.component.html',
  styleUrls: ['./sales-invoice.component.scss']
})
export class SalesInvoiceComponent {

  
  tableData: any;
  tableColumns: any[] = [];
  dataSource: any;
  testData: any;
  moduleName:any = "Sales Invoice";
  entityName = 'financial/salesInvoice'
  @ViewChild(DtableComponent) parentPaginator!: DtableComponent;
  @ViewChild(DtableComponent) parentSort!: DtableComponent;

  constructor( private dataService:ApiService)
  {
    this.tableData = new MatTableDataSource<object>();
    this.dataService.getAPI('salesInvoice').subscribe( data =>
    {
      if(data.hasOwnProperty('error'))
      {
        this.tableData = 0;
      }else{
        this.dataSource = data;
        this.tableColumns = Object.keys(this.dataSource[0]);
        this.tableColumns.splice(Object.keys(this.dataSource[0]).length-1);
        this.tableData = new MatTableDataSource<object>(this.dataSource);
        
        this.tableData.paginator =  this.parentPaginator.paginator;
        this.tableData.sort =  this.parentSort.sort;
      }
      

    });
  }

}
