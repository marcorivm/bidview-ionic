import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MovieService} from '../../providers/movie-service-mock';
import {MovieDetailPage} from '../movie-detail/movie-detail';

@Component({
    selector: 'page-favorite-list',
    templateUrl: 'favorite-list.html'
})
export class FavoriteListPage {

    favorites: Array<any>;

    constructor(
        public navCtrl: NavController, 
        public service: MovieService) 
    {
        this.getFavorites();
    }

    itemTapped(favorite) {
        this.navCtrl.push(MovieDetailPage, favorite.movie);
    }

    deleteItem(favorite) {
        this.service.unfavorite(favorite)
            .then(() => {
                this.getFavorites();
            })
            .catch(error => alert(JSON.stringify(error)));
    }

    getFavorites() {
        this.service.getFavorites()
            .then(data => this.favorites = data);
    }

}
