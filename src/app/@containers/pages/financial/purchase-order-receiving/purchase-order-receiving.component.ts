import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DtableComponent } from '@app/@components/dynamic/dtable/dtable.component';
import { ApiService } from '@app/@services/api.service';
@Component({
  selector: 'app-purchase-order-receiving',
  templateUrl: './purchase-order-receiving.component.html',
  styleUrls: ['./purchase-order-receiving.component.scss']
})
export class PurchaseOrderReceivingComponent  {

  tableData: any;
  tableColumns: any[] = [];
  dataSource: any;
  testData: any;
  moduleName:any = "Purchase Order Receiving";

  entityName = 'purchaseOrderReceiving'

  @ViewChild(DtableComponent) parentPaginator!: DtableComponent;
  @ViewChild(DtableComponent) parentSort!: DtableComponent;

  constructor( private dataService:ApiService)
  {
    this.tableData = new MatTableDataSource<object>();
    this.dataService.getAPI(this.entityName).subscribe( data =>
    {
      this.dataSource = data;
      this.testData = data;

      this.tableColumns = Object.keys(this.dataSource[0]);

      this.tableData = new MatTableDataSource<object>(this.dataSource);
      this.tableData.paginator =  this.parentPaginator.paginator;
      this.tableData.sort =  this.parentSort.sort;
    });
  }

}
