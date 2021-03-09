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
export class DtableComponent  implements AfterViewInit{

  
  tableApiData : any;
  @Input() dataSource: any;
  @Input() displayedColumns: any[]=[];
  @Input() moduleTitle: any;
  @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();

      @ViewChild(MatPaginator) paginator!: MatPaginator;
      @ViewChild(MatSort) sort!: MatSort;

      constructor (private router: Router, private service: ApiService)
      {
        
      }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  // ngAfterContentChecked() {
  //   console.log(this.paginator); 
  // }
  
  
  applyFilter(e: Event) {
    let  filterValue = (<HTMLInputElement>e.target).value
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  fetchRowDetails(id:any)
  {
    this.router.navigate(['/financial/paymentTerms/form',id]);
  }

}
