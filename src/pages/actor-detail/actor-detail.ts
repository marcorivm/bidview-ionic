import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ActorService} from '../../providers/actor-service-mock';

@Component({
    selector: 'page-actor-detail',
    templateUrl: 'actor-detail.html'
})
export class ActorDetailPage {

    actor: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public service: ActorService) {
        this.actor = this.navParams.data;
        service.findById(this.actor.id).then(
            actor => this.actor = actor
        );
    }

}
