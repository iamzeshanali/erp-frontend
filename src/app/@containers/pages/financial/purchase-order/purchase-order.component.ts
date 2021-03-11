import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DtableComponent } from '@app/@components/dynamic/dtable/dtable.component';
import { ApiService } from '@app/@services/api.service';
@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss']
})
export class PurchaseOrderComponent {

  tableData: any;
  tableColumns: any[] = [];
  dataSource: any;
  testData: any;
  moduleName:any = "Purchase Order";
  entityName = '/financial/purchaseOrder/form'

  @ViewChild(DtableComponent) parentPaginator!: DtableComponent;
  @ViewChild(DtableComponent) parentSort!: DtableComponent;

  constructor( private dataService:ApiService)
  {
    this.tableData = new MatTableDataSource<object>();
    this.dataService.getAPI('purchaseOrder').subscribe( data =>
    {
      this.dataSource = data;
      this.testData = data;

      this.tableColumns = Object.keys(this.dataSource[0]);
      this.tableColumns.splice(19)
      this.tableColumns.splice(18)
      
      this.tableData = new MatTableDataSource<object>(this.dataSource);
      this.tableData.paginator =  this.parentPaginator.paginator;
      this.tableData.sort =  this.parentSort.sort;

    });
  }

}
