import {Component} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import {ActorDetailPage} from '../actor-detail/actor-detail';
import {MovieService} from '../../providers/movie-service-mock';

@Component({
    selector: 'page-movie-detail',
    templateUrl: 'movie-detail.html'
})
export class MovieDetailPage {

    movie: any;

    constructor(
        public actionSheetCtrl: ActionSheetController, 
        public navCtrl: NavController, 
        public navParams: NavParams, 
        public movieService: MovieService, 
        public toastCtrl: ToastController) 
    {
        this.movie = this.navParams.data;
        movieService.findById(this.movie.id).then(
            movie => this.movie = movie
        );
    }

    openactorDetail(actor) {
        this.navCtrl.push(ActorDetailPage, actor);
    }

    favorite(movie) {
        this.movieService.favorite(movie)
            .then(movie => {
                let toast = this.toastCtrl.create({
                    message: 'movie added to your favorites',
                    cssClass: 'mytoast',
                    duration: 1000
                });
                toast.present(toast);
            });
    }

    share(movie) {
        let actionSheet: ActionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Twitter',
                    handler: () => console.log('share via twitter')
                },
                {
                    text: 'Facebook',
                    handler: () => console.log('share via facebook')
                },
                {
                    text: 'Email',
                    handler: () => console.log('share via email')
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => console.log('cancel share')
                }
            ]
        });

        actionSheet.present();
    }

}
