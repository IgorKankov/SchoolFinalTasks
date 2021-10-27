import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map/map.component';
import {GeocodingComponent} from './geocoding/geocoding.component';
import {FormsModule} from '@angular/forms';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatOptionModule} from "@angular/material/core";


@NgModule({
  declarations: [
    MapComponent,
    GeocodingComponent,
  ],
  exports: [
    MapComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LeafletModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatAutocompleteModule,
    MatOptionModule
  ]
})
export class WeatherModule {
}
