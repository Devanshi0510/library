import { Component, OnInit,EventEmitter ,Output} from '@angular/core';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
// constructor() { }

// ngOnInit(): void {
  
// }

enteredSearchValue: string='';

@Output()
searchTextChanged: EventEmitter<string> = new EventEmitter<string>();


OnSearchEnter()
{
  this.enteredSearchValue=document.getElementsByTagName('input')[0].value;
  this.searchTextChanged.emit(this.enteredSearchValue);
}

}
