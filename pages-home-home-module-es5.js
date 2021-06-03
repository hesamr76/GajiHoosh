(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.html":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"no-scroll\">\r\n  <ion-grid>\r\n    <player-info [player]=\"player\" [games]=\"player.games\"></player-info>\r\n    <!--\r\n    <p\r\n      *ngIf=\"readyToPlay.ready && player.games > 0\"\r\n      class=\"text text-success-2 lg animated fadeIn fast\"\r\n      style=\"margin: 0 32px; transform: translateY(-13vh)\"\r\n    >\r\n      Choose one of the quizzes below (one free quiz and five coin-demand\r\n      quizzes)\r\n    </p>\r\n\r\n    <p\r\n      *ngIf=\"!readyToPlay.ready && player.games == 1\"\r\n      class=\"text text-success-2 lg animated fadeIn fast\"\r\n      style=\"margin: 0 32px; transform: translateY(-7vh)\"\r\n    >\r\n      Continue to play more games to unlock more features!\r\n    </p>\r\n  -->\r\n    <ion-row\r\n      class=\"ion-justify-content-between ion-align-items-center\"\r\n      [ngStyle]=\"{ zIndex: readyToPlay.ready ? '5' : '11' }\"\r\n    >\r\n      <!--  Mini Brain  -->\r\n      <ion-col class=\"ion-text-start\">\r\n        <img\r\n          class=\"icon\"\r\n          id=\"brain-icon-home\"\r\n          (click)=\"goToBrain()\"\r\n          src=\"../../assets/imgs/home/brain-icon.png\"\r\n          [ngClass]=\"{'firstTime': player.games == 2 && !readyToPlay.ready,'inVisible': player.games < 2, 'animated fadeOutLeft fast': readyToPlay.ready}\"\r\n        />\r\n      </ion-col>\r\n      <!-- ./ Mini Brain  -->\r\n\r\n      <!-- Quests -->\r\n      <ion-col class=\"ion-text-end\">\r\n        <!-- (click)=\"goToGifts()\" -->\r\n        <img\r\n          class=\"icon\"\r\n          id=\"quest-icon-home\"\r\n          src=\"../../assets/imgs/home/gift-icon.png\"\r\n          [ngClass]=\"{'firstTime': player.games == 4 && !readyToPlay.ready, 'inVisible': player.games < 4, 'animated fadeOutRight fast': readyToPlay.ready}\"\r\n        />\r\n        <loading-loading\r\n          *ngIf=\"badges.quest\"\r\n          animationName=\"badge\"\r\n        ></loading-loading>\r\n      </ion-col>\r\n      <!-- ./Quests -->\r\n    </ion-row>\r\n\r\n    <!-- islands - slider -->\r\n    <ion-row class=\"island\" [ngClass]=\"{ 'readyToPlay': readyToPlay.ready }\">\r\n      <div class=\"island-container\">\r\n        <!-- NEXT PREV BTN -->\r\n        <ion-icon\r\n          *ngIf=\"selectedCountry + 1 < countries.length\"\r\n          class=\"island-arrow next\"\r\n          [ngClass]=\"{'inVisible': player.games < 3, 'animated fadeOutLeft fast': readyToPlay.ready}\"\r\n          (click)=\"slideNext()\"\r\n          name=\"arrow-dropright-circle\"\r\n        ></ion-icon>\r\n\r\n        <ion-icon\r\n          *ngIf=\"selectedCountry\"\r\n          class=\"island-arrow prev\"\r\n          [ngClass]=\"{'inVisible': player.games < 3, 'animated fadeOutLeft fast': readyToPlay.ready}\"\r\n          (click)=\"slidePrev()\"\r\n          name=\"arrow-dropright-circle\"\r\n        ></ion-icon>\r\n        <!-- ./NEXT PREV BTN -->\r\n\r\n        <ion-slides (ionSlideDidChange)=\"countryChanged()\" #slides>\r\n          <ion-slide\r\n            *ngFor=\"let package of countries; let i = index; first as isFirst;last as isLast\"\r\n          >\r\n            <!-- show county name and trophy bar + onclick => go to map -->\r\n            <!-- (click)=\"goToMap()\" -->\r\n            <ion-col\r\n              id=\"map-box-home\"\r\n              class=\"country-name\"\r\n              [ngClass]=\"{'animated fadeOut fast': readyToPlay.ready,'firstTime': player.games == 1 && !readyToPlay.ready, 'inVisible': player.games < 1}\"\r\n            >\r\n              <!-- island name -->\r\n              <span class=\"text\"> {{ package.name }} </span>\r\n              <!-- ./island name -->\r\n\r\n              <!-- trophy bar and map -->\r\n              <div class=\"island-trophy\">\r\n                <!-- map -->\r\n                <!-- <div id=\"trophyicon\" class=\"map-icon\">\r\n                  <loading-loading\r\n                    *ngIf=\"badges.map\"\r\n                    animationName=\"badge\"\r\n                  ></loading-loading>\r\n\r\n                  <div\r\n                    [id]=\"'map-icon-' + countries[selectedCountry].enName\"\r\n                    class=\"map-btn\"\r\n                  ></div>\r\n                </div> -->\r\n\r\n                <!-- trophy bar -->\r\n                <div id=\"trophybar\" class=\"trophy-bar\">\r\n                  <b class=\"text trophy-text\">\r\n                    {{ player.trophy > package.trophy ? package.trophy :\r\n                    player.trophy }}/ {{ package.trophy }}\r\n                  </b>\r\n                  <div\r\n                    class=\"island-trophy-amount\"\r\n                    [style.width.%]=\" player.trophy > package.trophy ? 100 : selectedCountry > 0 ? player.trophy >= countries[selectedCountry - 1].trophy ? ((player.trophy - countries[selectedCountry - 1].trophy ) / (package.trophy - countries[selectedCountry - 1].trophy) * 87 + 13) : 13 : player.trophy >= 0 ? player.trophy / package.trophy * 87 + 13 : 13\"\r\n                  ></div>\r\n                </div>\r\n              </div>\r\n              <!-- ./trophy bar and map -->\r\n            </ion-col>\r\n            <!-- ./show county name and trophy bar + onclick => go to map -->\r\n            <div *ngIf=\"package.lock\" class=\"island-lock\"></div>\r\n\r\n            <!-- class=\"islandEntery\" -->\r\n            <div class=\"country-city-container\">\r\n              <!-- island image -->\r\n              <img\r\n                [id]=\"'island-image-' + package.enName\"\r\n                [src]=\"package.src\"\r\n                [ngClass]=\"{'compact': readyToPlay.ready}\"\r\n              />\r\n              <!-- ./island image -->\r\n\r\n              <!-- buttons like quizzes and faction flags -->\r\n              <div class=\"mainCities\">\r\n                <!-- change game cost -->\r\n                <div\r\n                  *ngFor=\"let item of package.cities;let index = index;\"\r\n                  [class]='\"game-cost text \" + item.class'\r\n                  [ngClass]=\"{'inVisible': !readyToPlay.ready || randomId === item.id || hasChangedQuizzes !== false, 'disable-cost': player.silver < changeCityCost}\"\r\n                >\r\n                  <img src=\"../../assets/imgs/coin.png\" />\r\n                  {{ changeCityCost }}\r\n                </div>\r\n\r\n                <!-- game icon -->\r\n                <img\r\n                  *ngFor=\"let item of package.cities\"\r\n                  [id]=\"'Q_' + item.id\"\r\n                  [src]=\"item.src\"\r\n                  [class]='\"animated fast btn-q \" + item.class'\r\n                  [ngClass]=\"{\r\n                    'btn-q-active': randomId === item.id || hasChangedQuizzes,\r\n                    'inVisible': !readyToPlay.ready,\r\n                    'zoomOut': hasChangedQuizzes === null,\r\n                    'zoomIn': hasChangedQuizzes}\"\r\n                  (click)=\"startGame(item.id)\"\r\n                />\r\n              </div>\r\n              <!-- ./ buttons like quizzes and faction flags -->\r\n            </div>\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </div>\r\n    </ion-row>\r\n    <!-- ./island -->\r\n\r\n    <!-- start button -->\r\n    <!-- <ion-col class=\"text\">\r\n        <button\r\n          class=\"startBtn text animated\"\r\n          (click)=\"preCheck()\"\r\n          [ngClass]=\"{'fadeOut fast': readyToPlay.ready, 'pulse infinite': player.games < 5 && !readyToPlay.ready}\"\r\n        >\r\n          Start\r\n        </button>\r\n\r\n        <button\r\n          *ngIf=\"readyToPlay.ready\"\r\n          class=\"qmarz-button backBtn clear animated fadeIn\"\r\n          (click)=\"iAmNotReadyToPlay()\"\r\n        >\r\n          Back\r\n        </button>\r\n      </ion-col> -->\r\n    <!-- ./start button -->\r\n\r\n    <!-- leaderboard -->\r\n    <!-- <ion-col\r\n        class=\" center-right ion-no-padding\"\r\n        [ngClass]=\"{'inVisible': player.games < 5, 'animated fadeOutRight fast': readyToPlay.ready}\"\r\n      >\r\n        <ion-row (click)=\"goToLeaderboard()\">\r\n          <ion-col\r\n            id=\"leaderboard-icon-home\"\r\n            size=\"12\"\r\n            class=\"icon ion-no-padding\"\r\n            [ngClass]=\"{'firstTime': player.games == 5 && !readyToPlay.ready}\"\r\n          >\r\n            <img src=\"../../assets/imgs/home/leaderboard-icon.png\" />\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col> -->\r\n    <!-- ./leaderboard -->\r\n  </ion-grid>\r\n\r\n  <!-- <div class=\"tutorial\" *ngIf=\"showTutorials\" (click)=\"tutorialSubmit()\">\r\n    <div\r\n      class=\"arrow\"\r\n      [ngClass]=\"{\r\n        'inVisible': player.games == 0,\r\n        'vertical-arrow': player.games > 1 && player.games != 3,\r\n        'vertial-arrow_down': player.games == 2 || player.games == 5 || player.games == 10,\r\n        'vertical-arrow_up': player.games == 4\r\n      }\"\r\n      [ngStyle]=\"tutorialArrowPosition\"\r\n    >\r\n      <img src=\"../../assets/imgs/tutorial.png\" />\r\n    </div>\r\n\r\n    <div\r\n      class=\"text-box\"\r\n      [ngClass]=\"{'top': player.games == 0, 'center': player.games == 5 || player.games == 10}\"\r\n    >\r\n      <p class=\"text xlg text-success-2\">{{ tutorialText }}</p>\r\n    </div>\r\n  </div> -->\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: "",
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http */ "./src/app/services/http.ts");
/* harmony import */ var _services_smart_audio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/smart-audio */ "./src/app/services/smart-audio.ts");
/* harmony import */ var _services_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data */ "./src/app/services/data.ts");
/* harmony import */ var _map_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../map/map */ "./src/app/pages/map/map.ts");
/* harmony import */ var _gifts_gifts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../gifts/gifts */ "./src/app/pages/gifts/gifts.ts");
/* harmony import */ var _leadership_leadership__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../leadership/leadership */ "./src/app/pages/leadership/leadership.ts");
/* harmony import */ var _brain_brain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../brain/brain */ "./src/app/pages/brain/brain.ts");
/* harmony import */ var _profile_profile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../profile/profile */ "./src/app/pages/profile/profile.ts");
/* harmony import */ var _alerts_alerts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../alerts/alerts */ "./src/app/pages/alerts/alerts.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");













var HomePage = /** @class */ (function () {
    function HomePage(dataProvider, SmartAudioProvider, router, navCtrl, modalCtrl, httpProvider) {
        var _this = this;
        this.dataProvider = dataProvider;
        this.SmartAudioProvider = SmartAudioProvider;
        this.router = router;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.httpProvider = httpProvider;
        this.selectedCountry = 0;
        this.changeCityCost = 20;
        this.player = {
            role: "PLAYER",
            name: "",
            level: 0,
            avatar: null,
            xp: 0,
            gold: 0,
            silver: 0,
            trophy: 0,
            id: 0,
            code: "HOSH",
            games: 3,
            brain: {
                brainScore: {
                    value: 0
                }
            }
        };
        this.badges = {
            quest: false,
            map: false
        };
        // for tutorial senario
        this.showTutorials = false;
        this.tutorialTips = [
            "Choose one of the quizzes below👇🏻",
            "Win and fill the advance bar to unlock other cities. Tap here to check the map.",
            "This is the performance beads. It shows your progress in each category.",
            "This your avatar and level progress. by tapping it you can modify your avatar.",
            "Claim your achievements and gifts here. Also submit your daily presence to collect daily gifts.",
            "Here you can check the leaderboards.",
            "Live quizzes are special events that happens on certain dates." // live
        ];
        this.tutorialArrowPosition = { top: 0, left: 0 };
        this.dataProvider.needToSetIsland.subscribe(function (state) {
            if (state) {
                _this.setIslands(_this.player.trophy);
            }
        });
        // // play home music after 4000 mili second
        // this.playAudio(1000);
        this.player = this.dataProvider.getPlayer();
        this.countries = this.dataProvider.getCountries();
        this.badges = this.dataProvider.getBadges();
        this.readyToPlay = this.dataProvider.startGame;
        this.setIslands(this.player.trophy);
        if (this.dataProvider.developerMode) {
            this.dataProvider.setPlayer({ games: 11 });
        }
    }
    HomePage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var index;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.SmartAudioProvider.play("change");
                // // if need to switch to any island
                if (this.dataProvider.getIslandIndex().index !== null) {
                    index = this.dataProvider.getIslandIndex().index;
                    this.dataProvider.setIslandIndex(null);
                    this.slides.slideTo(index, 400);
                }
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.playAudio = function (delay) {
        var _this = this;
        setTimeout(function () {
            _this.SmartAudioProvider.homeMusic();
        }, delay);
    };
    HomePage.prototype.handleTutorial = function (games, delay) {
        if (games == 0 && this.readyToPlay.ready) {
            this.setTextAndArrowPositionAndShowTutorial(games, "island-image-najaf", -20, 20, delay);
        }
        if (games == 1) {
            this.setTextAndArrowPositionAndShowTutorial(games, "map-box-home", 18, -73, delay);
        }
        if (games == 2) {
            this.setTextAndArrowPositionAndShowTutorial(games, "brain-icon-home", -70, -7, delay);
        }
        if (games == 3) {
            this.setTextAndArrowPositionAndShowTutorial(games, "home-avatar-component", 0, -45, delay);
        }
        if (games == 4) {
            this.setTextAndArrowPositionAndShowTutorial(games, "quest-icon-home", 50, -8, delay);
        }
        if (games == 5) {
            this.setTextAndArrowPositionAndShowTutorial(games, "leaderboard-icon-home", -65, -8, delay);
        }
        if (games == 10) {
            this.setTextAndArrowPositionAndShowTutorial(games, "live-icon-home", -70, -7, delay);
        }
    };
    HomePage.prototype.setTextAndArrowPositionAndShowTutorial = function (games, id, deltaY, deltaX, delay) {
        var _this = this;
        // handle tutorial with game = 10
        // set games to last item of tutorialTips
        if (games > this.tutorialTips.length - 1) {
            games = this.tutorialTips.length - 1;
        }
        // set text
        this.tutorialText = this.tutorialTips[games];
        // correction delta when using delay (when the icon transited left or right)
        // if delay > 0 then player should see the arrow onboarding with diffrent delta
        if (delay) {
            if (games == 2) {
                deltaX = deltaX + 50;
                deltaY = deltaY - 30;
            }
            if (games == 3) {
                deltaX = deltaX - 20;
                deltaY = deltaY + 150;
            }
            if (games == 4) {
                deltaX = deltaX - 50;
                deltaY = deltaY - 30;
            }
            if (games == 5) {
                deltaX = deltaX - 112;
                deltaY = deltaY - 60;
            }
            if (games == 6) {
                deltaX = deltaX + 111;
                deltaY = deltaY - 60;
            }
        }
        // set arrow position
        try {
            var element = document.getElementById(id).getBoundingClientRect();
            this.tutorialArrowPosition.top = +element.top.toFixed(0) + deltaY + "px";
            this.tutorialArrowPosition.left =
                +element.left.toFixed(0) + deltaX + "px";
        }
        catch (error) {
            this.tutorialArrowPosition = {
                top: "-200px",
                left: "0"
            };
        }
        // show updated tutorial state
        setTimeout(function () {
            _this.checkForTutorial(id);
        }, delay);
    };
    HomePage.prototype.checkForTutorial = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var condition;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataProvider.getFromStorage(id)];
                    case 1:
                        condition = _a.sent();
                        if (!condition) {
                            this.showTutorials = true;
                            this.dataProvider.setTostorage(id, true);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.tutorialSubmit = function () {
        this.showTutorials = false;
    };
    HomePage.prototype.setIslands = function (myTrophy) {
        var _this = this;
        this.countries.sort(function (a, b) { return a.trophy - b.trophy; });
        var myIsland = this.countries.find(function (con) { return con.trophy > myTrophy; });
        this.countries.map(function (con, index) {
            if (con.trophy < myIsland.trophy) {
                // past island
                con["lock"] = false;
            }
            else if (con.trophy > myIsland.trophy) {
                // next island
                con["lock"] = true;
            }
            else {
                // current island
                con["lock"] = false;
                try {
                    _this.slides.slideTo(index, 0);
                }
                catch (error) {
                    setTimeout(function () { return _this.setIslands(myTrophy); }, 1000);
                    return;
                }
            }
            con["src"] = "../../assets/imgs/islands/" + con.enName + ".png";
            con.cities.map(function (city) {
                city["src"] = "../../assets/imgs/icons/" + city.info + ".png";
                city["class"] = "city-category-" + city.category;
            });
        });
    };
    HomePage.prototype.slideNext = function () {
        this.slides.slideNext();
    };
    HomePage.prototype.slidePrev = function () {
        this.slides.slidePrev();
    };
    HomePage.prototype.countryChanged = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.SmartAudioProvider.play("slide");
                        _a = this;
                        return [4 /*yield*/, this.slides.getActiveIndex()];
                    case 1:
                        _a.selectedCountry = _b.sent();
                        if (this.selectedCountry > this.countries.length - 1) {
                            this.slides.slideTo(this.countries.length - 1);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.iAmNotReadyToPlay = function () {
        if (!this.readyToPlay.ready) {
            return;
        }
        this.dataProvider.setStartGame(false);
        this.slides.lockSwipes(false);
    };
    HomePage.prototype.preCheck = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.readyToPlay.ready) {
                            return [2 /*return*/];
                        }
                        _a = this.countries;
                        return [4 /*yield*/, this.slides.getActiveIndex()];
                    case 1:
                        if (!_a[_b.sent()].lock) {
                            this.SmartAudioProvider.play("buttonClick");
                            // set this state in dataprovider for all page
                            this.dataProvider.setStartGame(true);
                            // player can not swipe in either direction on slide
                            this.slides.lockSwipes(true);
                            // set random city
                            this.selectRandomGame();
                            // show first tutorial after click on start game button
                            if (this.player.games == 0) {
                                this.handleTutorial(0, 0);
                            }
                        }
                        else {
                            // const payload = {
                            //   code: 20,
                            //   count:
                            //     this.countries[(await this.slides.getActiveIndex()) - 1].trophy -
                            //     this.player.trophy,
                            // };
                            // this.presentAlert(payload);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.selectRandomGame = function (force) {
        if (force === void 0) { force = false; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body, cities, _a, randomIndex;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        body = { force: force };
                        this.httpProvider.post("/timetrials/random", body, function (res) {
                            if (res.status == "success") {
                                _this.dataProvider.setPlayer({ silver: res.data.silver });
                            }
                            else {
                                _this.slides.lockSwipes(false);
                                _this.dataProvider.setStartGame(false);
                                _this.presentAlert(res.data);
                            }
                        }, function (error) {
                            _this.dataProvider.setStartGame(false);
                            _this.slides.lockSwipes(false);
                            _this.presentAlert({
                                code: "CONNECTION_ERROR",
                                reply: function () {
                                    _this.selectRandomGame(force);
                                }
                            });
                        });
                        if (!!force) return [3 /*break*/, 2];
                        _a = this.countries;
                        return [4 /*yield*/, this.slides.getActiveIndex()];
                    case 1:
                        cities = _a[_b.sent()].cities;
                        randomIndex = Math.floor(Math.random() * cities.length);
                        this.randomId = cities[randomIndex].id;
                        return [3 /*break*/, 3];
                    case 2:
                        this.randomId = -1;
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.startGame = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.SmartAudioProvider.play("start");
                        _a = this.countries;
                        return [4 /*yield*/, this.slides.getActiveIndex()];
                    case 1:
                        _a[_b.sent()].cities.map(function (city) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var country;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                if (city.id == id) {
                                    // set next tutorial
                                    if (this.player.games < 4 || this.player.games == 9) {
                                        this.handleTutorial(this.player.games + 1, 5000);
                                    }
                                    country = this.countries.find(function (con) { return con.trophy > _this.player.trophy; });
                                    this.dataProvider.setGame({
                                        city: city,
                                        country: country,
                                        countryIndex: this.countries.indexOf(country)
                                    });
                                    this.slides.lockSwipes(false);
                                    this.router.navigate(["/game"]);
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.goToBrain = function (componentProps) {
        if (componentProps === void 0) { componentProps = null; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.readyToPlay.ready) {
                            return [2 /*return*/];
                        }
                        this.SmartAudioProvider.play("trophy");
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _brain_brain__WEBPACK_IMPORTED_MODULE_9__["BrainPage"],
                                componentProps: componentProps
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.goToGifts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.readyToPlay.ready) {
                            return [2 /*return*/];
                        }
                        this.SmartAudioProvider.play("trophy");
                        return [4 /*yield*/, this.modalCtrl.create({ component: _gifts_gifts__WEBPACK_IMPORTED_MODULE_7__["GiftsPage"] })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        modal.onDidDismiss().then(function (payload) {
                            if (payload.data == "myQmarz") {
                                _this.goToProfile({ activeTab: 1 });
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.goToMap = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mapModal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.readyToPlay.ready) {
                            return [2 /*return*/];
                        }
                        this.SmartAudioProvider.play("trophy");
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _map_map__WEBPACK_IMPORTED_MODULE_6__["MapPage"]
                            })];
                    case 1:
                        mapModal = _a.sent();
                        mapModal.present();
                        mapModal.onDidDismiss().then(function (payload) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var duration, _a, _b;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        if (!payload.data) return [3 /*break*/, 2];
                                        _b = (_a = Math).abs;
                                        return [4 /*yield*/, this.slides.getActiveIndex()];
                                    case 1:
                                        duration = _b.apply(_a, [(_c.sent()) - payload.data["setIsland"]]) * 400;
                                        this.slides.slideTo(payload.data["setIsland"], duration);
                                        _c.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.goToLeaderboard = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var leaderboardModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.readyToPlay.ready) {
                            return [2 /*return*/];
                        }
                        this.SmartAudioProvider.play("trophy");
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _leadership_leadership__WEBPACK_IMPORTED_MODULE_8__["LeadershipPage"]
                            })];
                    case 1:
                        leaderboardModal = _a.sent();
                        leaderboardModal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.goToProfile = function (componentProps) {
        if (componentProps === void 0) { componentProps = null; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var profileModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.readyToPlay.ready) {
                            return [2 /*return*/];
                        }
                        this.SmartAudioProvider.play("trophy");
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _profile_profile__WEBPACK_IMPORTED_MODULE_10__["ProfilePage"],
                                componentProps: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ isForMe: true }, componentProps)
                            })];
                    case 1:
                        profileModal = _a.sent();
                        profileModal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.presentAlert = function (payload) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var prizeModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.dataProvider.isShowingAlert.value) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _alerts_alerts__WEBPACK_IMPORTED_MODULE_11__["AlertsPage"],
                                componentProps: { payload: payload }
                            })];
                    case 1:
                        prizeModal = _a.sent();
                        prizeModal.present();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _services_data__WEBPACK_IMPORTED_MODULE_5__["DataProvider"] },
        { type: _services_smart_audio__WEBPACK_IMPORTED_MODULE_4__["SmartAudioProvider"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_http__WEBPACK_IMPORTED_MODULE_3__["HttpProvider"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("slides", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], HomePage.prototype, "slides", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "page-home",
            template: __webpack_require__(/*! raw-loader!./home.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data__WEBPACK_IMPORTED_MODULE_5__["DataProvider"],
            _services_smart_audio__WEBPACK_IMPORTED_MODULE_4__["SmartAudioProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_http__WEBPACK_IMPORTED_MODULE_3__["HttpProvider"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map