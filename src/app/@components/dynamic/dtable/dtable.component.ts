import {Component,ViewChild,Input,EventEmitter, AfterViewInit,OnInit, AfterContentChecked, Output} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from '@app/@services/api.service';

@Component({
  selector: 'app-dtable',
  templateUrl: './dtable.component.html',
  styleUrls: ['./dtable.component.scss']
})
export class DtableComponent {

  
  tableApiData : any;
  @Input() dataSource: any;
  @Input() displayedColumns: any[]=[];
  @Input() moduleTitle: any;
  @Input() routeTitle: any;
  @Input() nestedComponentName: any;
  @Input() primaryId: any;
  @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() addDocumentClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() recevingDocumentClicked: EventEmitter<any> = new EventEmitter<any>();

      @ViewChild(MatPaginator) paginator!: MatPaginator;
      @ViewChild(MatSort) sort!: MatSort;

      constructor (private router: Router, private service: ApiService)
      {
        
      }
      
  applyFilter(e: Event) {
    let  filterValue = (<HTMLInputElement>e.target).value
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  fetchRowDetails(id:any, entity: any, moduleTitle:any)
  {
    if(moduleTitle == 'salesInvoiceForm'){
      this.addDocumentClicked.emit(id);
    }else if(moduleTitle == 'purchaseOrderForm'){
      this.addDocumentClicked.emit(id);
    }else if(moduleTitle == 'purchaseOrderReceiving'){
      this.recevingDocumentClicked.emit(id);
    }
    else{
      this.router.navigate([entity+'/form',id]);
    }   
  }


  changeTab(e: Event){
    this.addDocumentClicked.emit('edit');
  }
  changeTabReceving(e:Event) {
    this.recevingDocumentClicked.emit('edit');
  }

}
