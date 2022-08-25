import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  public title  = 'Liste hotels';
  public hotels : any[]=[
    {
      id: 1,
      hotelName: 'Buea sweet life',
      description: 'Belle vue au bord de la mer',
      price: 230.5,
      imageUrl: 'assets/img/hotel-room.jpg',
    }, {
      id: 2,
      hotelName: 'Marakech',
      description: 'Profitez de la vue sur les montagnes',
      price: 145.5,
      imageUrl: 'assets/img/the-interior.jpg',
    }, {
      id: 3,
      hotelName: 'Abudja new look palace',
      description: 'Séjour complet avec service de voitures',
      price: 120.12,
      imageUrl: 'assets/img/indoors.jpg',

    }, {
      id: 4,
      hotelName: 'Cape town city',
      description: 'Magnifique cadre pour votre séjour',
      price: 135.12,
      imageUrl: 'assets/img/window.jpg',
 
    }

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
