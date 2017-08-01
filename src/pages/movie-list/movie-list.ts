import {Component} from '@angular/core';
import {Config, NavController} from 'ionic-angular';
import {MovieService} from '../../providers/movie-service-mock';
import {MovieDetailPage} from '../movie-detail/movie-detail';
import leaflet from 'leaflet';

@Component({
    selector: 'page-movie-list',
    templateUrl: 'movie-list.html'
})
export class MovieListPage {

    movies: Array<any>;
    searchKey: string = "";
    viewMode: string = "list";
    map;
    markersGroup;

    constructor(public navCtrl: NavController, public service: MovieService, public config: Config) {
        this.findAll();
    }

    openmovieDetail(movie: any) {
        this.navCtrl.push(MovieDetailPage, movie);
    }

    onInput(event) {
        this.service.findByName(this.searchKey)
            .then(data => {
                this.movies = data;
                if (this.viewMode === "map") {
                    this.showMarkers();
                }
            })
            .catch(error => alert(JSON.stringify(error)));
    }

    onCancel(event) {
        this.findAll();
    }

    findAll() {
        this.service.findAll()
            .then(data => this.movies = data)
            .catch(error => alert(error));
    }

    showMap() {
        setTimeout(() => {
            this.map = leaflet.map("map").setView([42.361132, -71.070876], 14);
            leaflet.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(this.map);
            this.showMarkers();
        })
    }

    showMarkers() {
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = leaflet.layerGroup([]);
        this.movies.forEach(movie => {
            if (movie.lat, movie.long) {
                let marker: any = leaflet.marker([movie.lat, movie.long]).on('click', event => this.openmovieDetail(event.target.data));
                marker.data = movie;
                this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    }

}
