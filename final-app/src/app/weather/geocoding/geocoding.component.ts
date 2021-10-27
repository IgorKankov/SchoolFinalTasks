import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NominatimService} from '../services/nominatim-service';
import {NominatimResponse} from '../shared/models/nominatim-response.model';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-geocoding',
  templateUrl: './geocoding.component.html',
  styleUrls: ['./geocoding.component.scss'],
  providers: [NominatimService]
})
export class GeocodingComponent {
  @Output()
  locationSelected = new EventEmitter();

  @Output() onSearch = new EventEmitter();
  searchResults: NominatimResponse[];
  search: FormControl;

  constructor (private nominatimService: NominatimService) {
    this.search = new FormControl()
  }

  addressLookup (address: string) {
    if (address.length > 2) {
      this.nominatimService.addressLookup(address).subscribe(results => {
        this.searchResults = results;
      });
    } else {
      this.searchResults = [];
    }
    this.onSearch.emit(this.searchResults);
  }

  selectResult (result: NominatimResponse) {
    this.locationSelected.emit(result);
  }

}
