webpackJsonp([0],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actor_detail_actor_detail__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_movie_service_mock__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieDetailPage = (function () {
    function MovieDetailPage(actionSheetCtrl, navCtrl, navParams, movieService, toastCtrl) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.movieService = movieService;
        this.toastCtrl = toastCtrl;
        this.movie = this.navParams.data;
        movieService.findById(this.movie.id).then(function (movie) { return _this.movie = movie; });
    }
    MovieDetailPage.prototype.openactorDetail = function (actor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__actor_detail_actor_detail__["a" /* ActorDetailPage */], actor);
    };
    MovieDetailPage.prototype.favorite = function (movie) {
        var _this = this;
        this.movieService.favorite(movie)
            .then(function (movie) {
            var toast = _this.toastCtrl.create({
                message: 'movie added to your favorites',
                cssClass: 'mytoast',
                duration: 1000
            });
            toast.present(toast);
        });
    };
    MovieDetailPage.prototype.share = function (movie) {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Twitter',
                    handler: function () { return console.log('share via twitter'); }
                },
                {
                    text: 'Facebook',
                    handler: function () { return console.log('share via facebook'); }
                },
                {
                    text: 'Email',
                    handler: function () { return console.log('share via email'); }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { return console.log('cancel share'); }
                }
            ]
        });
        actionSheet.present();
    };
    return MovieDetailPage;
}());
MovieDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-movie-detail',template:/*ion-inline-start:"C:\Users\Erza\Documents\Christina\WebDev\Projects\bidview-ionic\src\pages\movie-detail\movie-detail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Movie</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-card *ngIf="movie.id">\n\n        <img src="{{movie.poster}}"/>\n\n        <ion-card-content>\n\n            <h2 class="card-title">{{ movie.title }}</h2>\n\n            <p>{{ movie.year }}, {{ movie.genre }}</p>\n\n        </ion-card-content>\n\n        <ion-list>\n\n\n\n            <ion-item>\n\n                <h3>Description</h3><br>\n\n                <ion-note>{{ movie.description }}</ion-note><br>\n\n            </ion-item>\n\n            <button ion-item (click)="openactorDetail(movie.actor)">\n\n                <ion-avatar item-left>\n\n                    <img src="{{movie.actor.picture}}"/>\n\n                </ion-avatar>\n\n                <h2>{{movie.actor.name}}</h2>\n\n            </button>\n\n        </ion-list>\n\n\n\n        <ion-item>\n\n            <button ion-button icon-left (click)="favorite(movie)" clear item-left>\n\n                <ion-icon name="star"></ion-icon>\n\n                Favorite\n\n            </button>\n\n            <button ion-button icon-left (click)="share(movie)" clear item-right>\n\n                <ion-icon name="share"></ion-icon>\n\n                Share\n\n            </button>\n\n        </ion-item>\n\n\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Erza\Documents\Christina\WebDev\Projects\bidview-ionic\src\pages\movie-detail\movie-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_movie_service_mock__["a" /* MovieService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], MovieDetailPage);

//# sourceMappingURL=movie-detail.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActorDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_actor_service_mock__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActorDetailPage = (function () {
    function ActorDetailPage(navCtrl, navParams, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.actor = this.navParams.data;
        service.findById(this.actor.id).then(function (actor) { return _this.actor = actor; });
    }
    return ActorDetailPage;
}());
ActorDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-actor-detail',template:/*ion-inline-start:"C:\Users\Erza\Documents\Christina\WebDev\Projects\bidview-ionic\src\pages\actor-detail\actor-detail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Actor</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="actor">\n\n\n\n    <ion-card>\n\n\n\n        <ion-card-content>\n\n            <img src="{{actor.picture}}"/>\n\n            <h2>{{actor.name}}</h2>\n\n        </ion-card-content>\n\n\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Erza\Documents\Christina\WebDev\Projects\bidview-ionic\src\pages\actor-detail\actor-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_actor_service_mock__["a" /* ActorService */]])
], ActorDetailPage);

//# sourceMappingURL=actor-detail.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_actors__ = __webpack_require__(385);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ActorService = (function () {
    function ActorService() {
    }
    ActorService.prototype.findAll = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_actors__["a" /* default */]);
    };
    ActorService.prototype.findById = function (id) {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_actors__["a" /* default */][id - 1]);
    };
    return ActorService;
}());
ActorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
], ActorService);

//# sourceMappingURL=actor-service-mock.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_movie_service_mock__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movie_detail_movie_detail__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MovieListPage = (function () {
    function MovieListPage(navCtrl, service, config) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.config = config;
        this.searchKey = "";
        this.viewMode = "list";
        this.findAll();
    }
    MovieListPage.prototype.openmovieDetail = function (movie) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__movie_detail_movie_detail__["a" /* MovieDetailPage */], movie);
    };
    MovieListPage.prototype.onInput = function (event) {
        var _this = this;
        this.service.findByName(this.searchKey)
            .then(function (data) {
            _this.movies = data;
            if (_this.viewMode === "map") {
                _this.showMarkers();
            }
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    MovieListPage.prototype.onCancel = function (event) {
        this.findAll();
    };
    MovieListPage.prototype.findAll = function () {
        var _this = this;
        this.service.findAll()
            .then(function (data) { return _this.movies = data; })
            .catch(function (error) { return alert(error); });
    };
    MovieListPage.prototype.showMap = function () {
        var _this = this;
        setTimeout(function () {
            _this.map = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.map("map").setView([42.361132, -71.070876], 14);
            __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(_this.map);
            _this.showMarkers();
        });
    };
    MovieListPage.prototype.showMarkers = function () {
        var _this = this;
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.layerGroup([]);
        this.movies.forEach(function (movie) {
            if (movie.lat, movie.long) {
                var marker = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.marker([movie.lat, movie.long]).on('click', function (event) { return _this.openmovieDetail(event.target.data); });
                marker.data = movie;
                _this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    };
    return MovieListPage;
}());
MovieListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-movie-list',template:/*ion-inline-start:"C:\Users\Erza\Documents\Christina\WebDev\Projects\bidview-ionic\src\pages\movie-list\movie-list.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-searchbar [(ngModel)]="searchKey" (ionInput)="onInput($event)"\n\n                       (ionCancel)="onCancel($event)"></ion-searchbar>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="movie-list">\n\n\n\n    <ion-list *ngIf="viewMode===\'list\'">\n\n\n\n        <ion-item-sliding *ngFor="let movie of movies">\n\n            <button ion-item (click)="openmovieDetail(movie)">\n\n                <ion-thumbnail item-left>\n\n                    <img src="{{movie.thumbnail}}"/>\n\n                </ion-thumbnail>\n\n                <h2>{{ movie.title }}</h2>\n\n                <p>{{ movie.year }} - {{ movie.genre }} ∙ {{ movie.length }}</p>\n\n            </button>\n\n            <ion-item-options>\n\n                <button danger (click)="deleteItem(movie)">Delete</button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n\n\n    </ion-list>\n\n\n\n    <div *ngIf="viewMode===\'map\'" style="width:100%;height:100%;" id="map"></div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer padding>\n\n    <ion-segment [(ngModel)]="viewMode">\n\n        <ion-segment-button value="list">\n\n            <ion-icon name="list"></ion-icon>\n\n        </ion-segment-button>\n\n        <ion-segment-button value="map" (ionSelect)="showMap()">\n\n            <ion-icon name="map"></ion-icon>\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Erza\Documents\Christina\WebDev\Projects\bidview-ionic\src\pages\movie-list\movie-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_movie_service_mock__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Config */]])
], MovieListPage);

//# sourceMappingURL=movie-list.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActorListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_actor_service_mock__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actor_detail_actor_detail__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActorListPage = (function () {
    function ActorListPage(navCtrl, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        service.findAll().then(function (data) { return _this.actors = data; });
    }
    ActorListPage.prototype.openactorDetail = function (actor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__actor_detail_actor_detail__["a" /* ActorDetailPage */], actor);
    };
    return ActorListPage;
}());
ActorListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-actor-list',template:/*ion-inline-start:"C:\Users\Erza\Documents\Christina\WebDev\Projects\bidview-ionic\src\pages\actor-list\actor-list.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Actors</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-list>\n\n\n\n        <button ion-item *ngFor="let actor of actors" (click)="openactorDetail(actor)">\n\n            <ion-avatar item-left>\n\n                <img src="{{actor.picture}}"/>\n\n            </ion-avatar>\n\n            <h2>{{actor.name}}</h2>\n\n        </button>\n\n\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Erza\Documents\Christina\WebDev\Projects\bidview-ionic\src\pages\actor-list\actor-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_actor_service_mock__["a" /* ActorService */]])
], ActorListPage);

//# sourceMappingURL=actor-list.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_movie_service_mock__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movie_detail_movie_detail__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavoriteListPage = (function () {
    function FavoriteListPage(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.getFavorites();
    }
    FavoriteListPage.prototype.itemTapped = function (favorite) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__movie_detail_movie_detail__["a" /* MovieDetailPage */], favorite.movie);
    };
    FavoriteListPage.prototype.deleteItem = function (favorite) {
        var _this = this;
        this.service.unfavorite(favorite)
            .then(function () {
            _this.getFavorites();
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    FavoriteListPage.prototype.getFavorites = function () {
        var _this = this;
        this.service.getFavorites()
            .then(function (data) { return _this.favorites = data; });
    };
    return FavoriteListPage;
}());
FavoriteListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-favorite-list',template:/*ion-inline-start:"C:\Users\Erza\Documents\Christina\WebDev\Projects\bidview-ionic\src\pages\favorite-list\favorite-list.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Favorites</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item-sliding *ngFor="let favorite of favorites">\n\n            <button ion-item (click)="itemTapped(favorite)">\n\n                <ion-thumbnail item-left>\n\n                    <img src="{{favorite.movie.thumbnail}}"/>\n\n                </ion-thumbnail>\n\n                <h2>{{favorite.movie.title}}</h2>\n\n                <p>{{favorite.movie.city}}, {{favorite.movie.state}} ∙ {{favorite.movie.price}}</p>\n\n            </button>\n\n            <ion-item-options>\n\n                <button danger (click)="deleteItem(favorite)">Delete</button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Erza\Documents\Christina\WebDev\Projects\bidview-ionic\src\pages\favorite-list\favorite-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_movie_service_mock__["a" /* MovieService */]])
], FavoriteListPage);

//# sourceMappingURL=favorite-list.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WelcomePage = (function () {
    function WelcomePage() {
    }
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\Erza\Documents\Christina\WebDev\Projects\bidview-ionic\src\pages\welcome\welcome.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Welcome</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-bounce>\n\n    <ion-slides>\n\n\n\n        <ion-slide style="background-image: url(\'assets/img/home_image.jpg\')">\n\n        <h3>A new app for movie info!</h3> \n\n        </ion-slide>\n\n\n\n         <ion-slide style="background-image: url(\'https://internexcanada.files.wordpress.com/2010/06/movie-and-popcorn1.jpg\')">\n\n        <h3>Save your favorite movies</h3> \n\n        </ion-slide> \n\n\n\n        <ion-slide style="background-image: url(\'assets/img/slide_favorites.jpg\')">\n\n        <h3>Enjoy!</h3> \n\n        </ion-slide>\n\n\n\n    </ion-slides>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Erza\Documents\Christina\WebDev\Projects\bidview-ionic\src\pages\welcome\welcome.html"*/
    })
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\Erza\Documents\Christina\WebDev\Projects\bidview-ionic\src\pages\about\about.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>About</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <div class="about-header">\n\n        <img src="assets/img/small_film_logo.png">\n\n    </div>\n\n\n\n    <div>\n\n        <p>This app was built with Ionic 3, Angular 4, and Node.js.</p>\n\n\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Erza\Documents\Christina\WebDev\Projects\bidview-ionic\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(337);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_movie_list_movie_list__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_movie_detail_movie_detail__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_actor_list_actor_list__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_actor_detail_actor_detail__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_favorite_list_favorite_list__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_movie_service_mock__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_actor_service_mock__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//Importing the AF2 Module to use Firebase


// Firebase configuration
var firebaseConfig = {
    apiKey: "myApiKey",
    authDomain: "myAuthDomain",
    databaseURL: "myDatabaseURL",
    projectId: "myProjectId",
    storageBucket: "myStorageBucket",
    messagingSenderId: "myMessagingSenderId"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_movie_list_movie_list__["a" /* MovieListPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_movie_detail_movie_detail__["a" /* MovieDetailPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_favorite_list_favorite_list__["a" /* FavoriteListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_actor_list_actor_list__["a" /* ActorListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_actor_detail_actor_detail__["a" /* ActorDetailPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig), __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["a" /* AngularFireDatabaseModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_movie_list_movie_list__["a" /* MovieListPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_movie_detail_movie_detail__["a" /* MovieDetailPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_favorite_list_favorite_list__["a" /* FavoriteListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_actor_list_actor_list__["a" /* ActorListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_actor_detail_actor_detail__["a" /* ActorDetailPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_12__providers_movie_service_mock__["a" /* MovieService */],
            __WEBPACK_IMPORTED_MODULE_13__providers_actor_service_mock__["a" /* ActorService */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_movie_list_movie_list__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_actor_list_actor_list__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_favorite_list_favorite_list__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__["a" /* WelcomePage */];
        this.initializeApp();
        this.appMenuItems = [
            { title: 'Movies', component: __WEBPACK_IMPORTED_MODULE_4__pages_movie_list_movie_list__["a" /* MovieListPage */], icon: 'home' },
            { title: 'Actors', component: __WEBPACK_IMPORTED_MODULE_5__pages_actor_list_actor_list__["a" /* ActorListPage */], icon: 'people' },
            { title: 'Favorites', component: __WEBPACK_IMPORTED_MODULE_6__pages_favorite_list_favorite_list__["a" /* FavoriteListPage */], icon: 'star' },
        ];
        this.accountMenuItems = [
            { title: 'My Account', component: __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__["a" /* WelcomePage */], icon: 'ios-contact' },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__["a" /* WelcomePage */], icon: 'log-out' },
        ];
        this.helpMenuItems = [
            { title: 'Welcome', component: __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__["a" /* WelcomePage */], icon: 'bookmark' },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */], icon: 'information-circle' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Erza\Documents\Christina\WebDev\Projects\bidview-ionic\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n\n  <ion-content>\n\n\n\n    <img src="assets/img/small_film_logo.png" class="menu-logo"/>\n\n\n\n    <ion-list>\n\n      <ion-list-header>\n\n        Menu\n\n      </ion-list-header>\n\n      <button menuClose ion-item *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n\n        {{menuItem.title}}\n\n      </button>\n\n    </ion-list>\n\n\n\n    <ion-list>\n\n      <ion-list-header>\n\n        Main\n\n      </ion-list-header>\n\n      <button menuClose ion-item *ngFor="let menuItem of helpMenuItems" (click)="openPage(menuItem)">\n\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n\n        {{menuItem.title}}\n\n      </button>\n\n    </ion-list>\n\n\n\n    <ion-list>\n\n      <ion-list-header>\n\n        Account\n\n      </ion-list-header>\n\n      <button menuClose ion-item *ngFor="let menuItem of accountMenuItems" (click)="openPage(menuItem)">\n\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n\n        {{menuItem.title}}\n\n      </button>\n\n    </ion-list>\n\n\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Erza\Documents\Christina\WebDev\Projects\bidview-ionic\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var movies = [
    {
        id: 1,
        title: "Ghost in the Shell",
        year: "2017",
        genre: "Action",
        length: "2 hours",
        poster: "https://popcornsg.s3.amazonaws.com/movies/650/1891-11062-GhostInT.jpg",
        thumbnail: "https://popcornsg.s3.amazonaws.com/movies/650/1891-11062-GhostInT.jpg",
        description: "Lorem ipsum dolor sit amet",
        actor: {
            id: 1,
            name: "Scarlett Johansson",
            picture: "https://s-media-cache-ak0.pinimg.com/originals/b9/df/48/b9df48481f012264c2d01a4eda524da7.jpg"
        }
    },
    {
        id: 2,
        title: "Wonder Woman",
        year: "2017",
        genre: "Action",
        length: "2 hours",
        poster: "https://am23.akamaized.net/tms/cnt/uploads/2017/05/1491990205555-1.jpg",
        thumbnail: "https://am23.akamaized.net/tms/cnt/uploads/2017/05/1491990205555-1.jpg",
        description: "Lorem ipsum dolor sit amet",
        actor: {
            id: 2,
            name: "Gal Gadot",
            picture: "http://awiderbridge.org/wp-content/uploads/2016/10/5000958-17-gal-gadot.w750.h560.2x.jpg"
        }
    },
    {
        id: 3,
        title: "John Wick 2",
        year: "2017",
        genre: "Action",
        length: "2 hours",
        poster: "https://thetub104.files.wordpress.com/2017/02/john-wick-2.jpg?w=200",
        thumbnail: "https://thetub104.files.wordpress.com/2017/02/john-wick-2.jpg?w=200",
        description: "Lorem ipsum dolor sit amet",
        actor: {
            id: 3,
            name: "Keanu Reeves",
            picture: "http://gazettereview.com/wp-content/uploads/2016/12/keanu-reeves.jpg"
        }
    },
    {
        id: 4,
        title: "Boss Baby",
        year: "2017",
        genre: "Comedy",
        length: "2 hours",
        poster: "https://i.jeded.com/i/the-boss-baby.70675.jpg",
        thumbnail: "https://i.jeded.com/i/the-boss-baby.70675.jpg",
        description: "Lorem ipsum dolor sit amet",
        actor: {
            id: 4,
            name: "Alec Baldwin",
            picture: "http://assets.rebelcircus.com/blog/wp-content/uploads/2015/02/baldwin.jpg"
        }
    },
    {
        id: 5,
        title: "The Croods",
        year: "2015",
        genre: "Adventure",
        length: "2 hours",
        poster: "https://images-na.ssl-images-amazon.com/images/I/91xOS4p7wIL._SY445_.jpg",
        thumbnail: "https://images-na.ssl-images-amazon.com/images/I/91xOS4p7wIL._SY445_.jpg",
        description: "Lorem ipsum dolor sit amet",
        actor: {
            id: 5,
            name: "Nicholas Cage",
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_%28Mostra%29.jpg/220px-Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_%28Mostra%29.jpg"
        }
    },
    {
        id: 6,
        title: "The Fourth Kind",
        year: "2013",
        genre: "Thriller",
        length: "2 hours",
        poster: "https://theburningbloggerofbedlam.files.wordpress.com/2015/10/the-fourth-kind1.jpg",
        thumbnail: "https://theburningbloggerofbedlam.files.wordpress.com/2015/10/the-fourth-kind1.jpg",
        description: "Lorem ipsum dolor sit amet",
        actor: {
            id: 6,
            name: "Milla Jovavich",
            picture: "http://i.imgur.com/nsfU35Y.jpg"
        }
    },
]; // End of the array
/* harmony default export */ __webpack_exports__["a"] = (movies);
//# sourceMappingURL=mock-movies.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var actors = [
    {
        id: 1,
        name: "Scarlett Johansson",
        picture: "https://s-media-cache-ak0.pinimg.com/originals/b9/df/48/b9df48481f012264c2d01a4eda524da7.jpg"
    },
    {
        id: 2,
        name: "Gal Gadot",
        picture: "http://awiderbridge.org/wp-content/uploads/2016/10/5000958-17-gal-gadot.w750.h560.2x.jpg"
    },
    {
        id: 3,
        name: "Keanu Reeves",
        picture: "http://gazettereview.com/wp-content/uploads/2016/12/keanu-reeves.jpg"
    },
    {
        id: 4,
        name: "Alec Baldwin",
        picture: "http://assets.rebelcircus.com/blog/wp-content/uploads/2015/02/baldwin.jpg"
    },
    {
        id: 5,
        name: "Nicholas Cage",
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_%28Mostra%29.jpg/220px-Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_%28Mostra%29.jpg"
    },
    {
        id: 6,
        name: "Milla Jovovich",
        picture: "http://i.imgur.com/nsfU35Y.jpg"
    }
];
/* harmony default export */ __webpack_exports__["a"] = (actors);
//# sourceMappingURL=mock-actors.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_movies__ = __webpack_require__(384);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MovieService = (function () {
    function MovieService() {
        this.favoriteCounter = 0;
        this.favorites = [];
    }
    MovieService.prototype.findAll = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_movies__["a" /* default */]);
    };
    MovieService.prototype.findById = function (id) {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_movies__["a" /* default */][id - 1]);
    };
    MovieService.prototype.findByName = function (searchKey) {
        var key = searchKey.toUpperCase();
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_movies__["a" /* default */].filter(function (movie) {
            return (movie.title + ' ' + movie.year + ' ' + movie.description + ' ' + movie.genre).toUpperCase().indexOf(key) > -1;
        }));
    };
    MovieService.prototype.getFavorites = function () {
        return Promise.resolve(this.favorites);
    };
    MovieService.prototype.favorite = function (movie) {
        this.favoriteCounter = this.favoriteCounter + 1;
        this.favorites.push({ id: this.favoriteCounter, movie: movie });
        return Promise.resolve();
    };
    MovieService.prototype.unfavorite = function (favorite) {
        var index = this.favorites.indexOf(favorite);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    };
    return MovieService;
}());
MovieService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
], MovieService);

//# sourceMappingURL=movie-service-mock.js.map

/***/ })

},[321]);
//# sourceMappingURL=main.js.map