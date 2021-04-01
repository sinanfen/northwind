import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //index sayfasında <app-root></app-root> yazılmasını sağlayan kısımdır.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'northwind'; //bu satırın TScript deki yazılımı title:string = 'northwind'; şeklindedir.
  user: string = "Sinan Fen";
  
}

//COMPONENT : HTML'NIN DATASINI KONTROL ETTIGIMIZ YER.
