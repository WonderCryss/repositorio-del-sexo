import { Component, OnInit } from '@angular/core';

declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  map=null

  markers: Marker[] = [
    {
      position: {
        lat: -33.3926798,
        lng: -70.6861262,
      },
      title: 'Librería Martina Trinidad'
    },
    {
      position: {
        lat: -33.3667325,
        lng: -70.6801958,
      },
      title: 'Librería Nacional'
    },
    {
      position: {
        lat: -33.3748408,
        lng: -70.6816431,
      },
      title: 'Buscalibre'
    },
    {
      position: {
        lat: -33.3633195,
        lng: -70.7016303,
      },
      title: 'Qué Leo Huechuraba'
    },
    {
      position: {
        lat: -33.3562681,
        lng: -70.7328181,
      },
      title: 'Librería Tick Office'
    },
  ];
  constructor() {}

  ngOnInit(){
    this.loadMap();
  }

  loadMap() {
    const mapEle: HTMLElement = document.getElementById('map');
    const myLatLng = {lat: -33.3665111, lng: -70.6786732};
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.renderMarkers();
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }
}
