(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.html":
/*!**********************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar> </ion-toolbar>\n\n  <ion-icon\n    name=\"ios-arrow-round-back\"\n    style=\"font-size: 40px\"\n    (click)=\"dismiss()\"\n  ></ion-icon>\n\n  <p class=\"text\">گاجیهوش</p>\n\n  <ion-icon name=\"help\" style=\"font-size: 24px\"></ion-icon>\n</ion-header>\n\n<ion-content class=\"no-scroll\" [ngClass]=\"{'popup-blur': isShowingAlert}\">\n  <ion-tabs\n    [ngClass]=\"{'hide-tabs': readyToPlay.ready || player.games < 5}\"\n    (select)=\"onTabSelect($event)\"\n    tabsPlacement=\"bottom\"\n  >\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button *ngFor=\"let tab of tabs\" [tab]=\"tab.route\">\n        <img [src]=\"tab.route == activeRoute ? tab.activeSrc : tab.src\" />\n        <ion-label class=\"text\">{{ tab.text }}</ion-label>\n        <loading-loading\n          *ngIf=\"badge[tab.route]\"\n          class=\"tab-badge\"\n          animationName=\"badge\"\n        ></loading-loading>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");








var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_6__["TabsPageRoutingModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_smart_audio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/smart-audio */ "./src/app/services/smart-audio.ts");
/* harmony import */ var _services_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data */ "./src/app/services/data.ts");
/* harmony import */ var _assets_Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/Constants */ "./src/assets/Constants.js");







var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, dataProvider, smartAudio, route, router) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.dataProvider = dataProvider;
        this.smartAudio = smartAudio;
        this.route = route;
        this.router = router;
        this.tabs = [
            {
                text: "پیام‌ها",
                id: "inboxTab",
                src: "../../assets/imgs/tab/inbox.png",
                activeSrc: "../../assets/imgs/tab/inbox-active.png",
                route: "inbox"
            },
            {
                text: "گروهی",
                id: "clanTab",
                src: "../../assets/imgs/tab/clan.png",
                activeSrc: "../../assets/imgs/tab/clan-active.png",
                route: "clan"
            },
            {
                text: "خانه",
                id: "homeTab",
                src: "../../assets/imgs/tab/home.png",
                activeSrc: "../../assets/imgs/tab/home-active.png",
                route: "home"
            },
            {
                text: "تمرینی",
                id: "trainingTab",
                src: "../../assets/imgs/tab/training.png",
                activeSrc: "../../assets/imgs/tab/training-active.png",
                route: "training"
            },
            {
                text: "برترین‌ها",
                id: "trainingTab",
                src: "../../assets/imgs/tab/leaderboard.png",
                activeSrc: "../../assets/imgs/tab/leaderboard-active.png",
                route: "leaderboard"
            }
        ];
        this.activeRoute = "home";
        this.isShowingAlert = false;
        this.playerRoles = _assets_Constants__WEBPACK_IMPORTED_MODULE_6__["PlayerRoles"];
        this.dataProvider.isShowingAlert.subscribe(function (state) {
            _this.isShowingAlert = state;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.activeRoute = event.urlAfterRedirects.split("/")[2];
            }
        });
        this.route.queryParams.subscribe(function (params) {
            var state = _this.router.getCurrentNavigation().extras.state;
            if (state) {
                if (state.islandIndex !== undefined) {
                    _this.dataProvider.setIslandIndex(state.islandIndex);
                    setTimeout(function () { return _this.slideToIndex("tabs/home"); }, 150);
                }
            }
        });
        this.readyToPlay = this.dataProvider.startGame;
        this.player = this.dataProvider.getPlayer();
        this.badge = this.dataProvider.getBadges();
    }
    TabsPage.prototype.slideToIndex = function (route) {
        this.router.navigate([route]);
    };
    // when any event change current tab this function will update active tab in store
    TabsPage.prototype.onTabSelect = function (e) {
        this.smartAudio.play("change");
    };
    TabsPage.prototype.dismiss = function () {
        window["backButton"]();
    };
    TabsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _services_data__WEBPACK_IMPORTED_MODULE_5__["DataProvider"] },
        { type: _services_smart_audio__WEBPACK_IMPORTED_MODULE_4__["SmartAudioProvider"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "page-tabs",
            template: __webpack_require__(/*! raw-loader!./tabs.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _services_data__WEBPACK_IMPORTED_MODULE_5__["DataProvider"],
            _services_smart_audio__WEBPACK_IMPORTED_MODULE_4__["SmartAudioProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




var routes = [
    {
        path: "",
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            // {
            //   path: "clan",
            //   children: [
            //     {
            //       path: "",
            //       loadChildren: () =>
            //         import("../pages/clan/clan.module").then((m) => m.ClanPageModule)
            //     }
            //   ]
            // },
            // {
            //   path: "training",
            //   children: [
            //     {
            //       path: "",
            //       loadChildren: () =>
            //         import("../pages/training/training.module").then(
            //           (m) => m.TrainingPageModule
            //         )
            //     }
            //   ]
            // },
            {
                path: "home",
                children: [
                    {
                        path: "",
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | pages-home-home-module */ "pages-home-home-module").then(__webpack_require__.bind(null, /*! ../pages/home/home.module */ "./src/app/pages/home/home.module.ts")).then(function (m) { return m.HomePageModule; });
                        }
                    }
                ]
            },
            // {
            //   path: "inbox",
            //   children: [
            //     {
            //       path: "",
            //       loadChildren: () =>
            //         import("../pages/inbox/inbox.module").then(
            //           (m) => m.InboxPageModule
            //         )
            //     }
            //   ]
            // },
            {
                path: "",
                redirectTo: "/tabs/home",
                pathMatch: "full"
            }
        ]
    },
    {
        path: "",
        redirectTo: "/tabs/home",
        pathMatch: "full"
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map