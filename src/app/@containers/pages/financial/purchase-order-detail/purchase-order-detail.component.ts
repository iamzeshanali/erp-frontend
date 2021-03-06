import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DtableComponent } from '@app/@components/dynamic/dtable/dtable.component';
import { ApiService } from '@app/@services/api.service';
@Component({
  selector: 'app-purchase-order-detail',
  templateUrl: './purchase-order-detail.component.html',
  styleUrls: ['./purchase-order-detail.component.scss']
})
export class PurchaseOrderDetailComponent {
  tableData: any;
  tableColumns: any[] = [];
  dataSource: any;
  testData: any;
  moduleName:any = "Purchase Order Detail";
  entityName = 'purchaseOrderDetail'

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
