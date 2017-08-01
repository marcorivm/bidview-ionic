import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ActorService} from '../../providers/actor-service-mock';
import {ActorDetailPage} from '../actor-detail/actor-detail';

@Component({
    selector: 'page-actor-list',
    templateUrl: 'actor-list.html'
})
export class ActorListPage {

    actors: Array<any>;

    constructor(public navCtrl: NavController, public service: ActorService) {
        service.findAll().then(data => this.actors = data);
    }

    openactorDetail(actor) {
        this.navCtrl.push(ActorDetailPage, actor);
    }

}
