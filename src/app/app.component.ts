import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rezept-buch';
  selectedFeature = 'recipes';

  onFeatureSelect(feature: string) {
    this.selectedFeature = feature;
  }
}
