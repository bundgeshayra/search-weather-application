import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() newSearchEvent = new EventEmitter<string>();
  // filterTerm: string = "pune"

  search(city:any){
    if(city){

      this.newSearchEvent.emit(city.value);
    }
  }

  onSearchInput(e:any) {
    // console.log(e);
  }

}
