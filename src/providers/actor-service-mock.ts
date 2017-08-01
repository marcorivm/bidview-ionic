import {Injectable} from '@angular/core';
import actors from './mock-actors';

@Injectable()
export class ActorService {

    findAll() {
        return Promise.resolve(actors);
    }

    findById(id) {
        return Promise.resolve(actors[id - 1]);
    }

}
