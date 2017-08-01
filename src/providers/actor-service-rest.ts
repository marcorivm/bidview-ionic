import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {SERVER_URL} from './config';
import {Http} from '@angular/http';

let actorsURL = SERVER_URL + 'actors/';

@Injectable()
export class ActorService {

    constructor(public http: Http) {

    }

    findAll() {
        alert("findall");
        return this.http.get(actorsURL)
            .map(res => res.json())
            .toPromise();
    }

    findById(id) {
        return this.http.get(actorsURL + id)
            .map(res => res.json())
            .toPromise();
    }

}
