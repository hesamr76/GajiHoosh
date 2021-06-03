(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-splash-splash-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/splash/splash.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/splash/splash.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"no-scroll\" [ngClass]=\"{'popup-blur': isShowingAlert}\">\n  <div class=\"container\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/splash/splash.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/splash/splash.module.ts ***!
  \***********************************************/
/*! exports provided: SplashPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPageModule", function() { return SplashPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _splash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./splash */ "./src/app/pages/splash/splash.ts");








const routes = [
    {
        path: '',
        component: _splash__WEBPACK_IMPORTED_MODULE_7__["SplashPage"]
    }
];
let SplashPageModule = class SplashPageModule {
};
SplashPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [_splash__WEBPACK_IMPORTED_MODULE_7__["SplashPage"]]
    })
], SplashPageModule);



/***/ }),

/***/ "./src/app/pages/splash/splash.ts":
/*!****************************************!*\
  !*** ./src/app/pages/splash/splash.ts ***!
  \****************************************/
/*! exports provided: SplashPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPage", function() { return SplashPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data */ "./src/app/services/data.ts");
/* harmony import */ var _services_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/http */ "./src/app/services/http.ts");
/* harmony import */ var _services_smart_audio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/smart-audio */ "./src/app/services/smart-audio.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _alerts_alerts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../alerts/alerts */ "./src/app/pages/alerts/alerts.ts");









let SplashPage = class SplashPage {
    constructor(dataProvider, navCtrl, smartAudioProvider, router, httpProvider, modalCtrl, utils) {
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.smartAudioProvider = smartAudioProvider;
        this.router = router;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.utils = utils;
        this.isShowingAlert = false;
        this.updatingServer = "";
        this.signIn(this.dataProvider.client, this.dataProvider.APP_VERSION);
        this.dataProvider.isShowingAlert.subscribe((state) => {
            this.isShowingAlert = state;
        });
        // this.httpProvider.needToShowError.subscribe((payload) => {
        //   if (payload) {
        //     this.presentAlert(payload);
        //   }
        // });
        // this.httpProvider.needToRegister.subscribe((payload) => {
        //   if (payload) {
        //     this.gotoRegister(payload);
        //   }
        // });
    }
    signIn(client, version) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("platform: " + this.dataProvider.platform + ", client: " + client);
            let token = yield this.dataProvider.getFromStorage("token");
            this.hello(client, token, version);
        });
    }
    hello(client, token, version) {
        if (this.dataProvider.developerMode) {
            // (main-server: shahoosh)
            // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzU1NDc2LCJ0aW1lIjoiMjAyMC0wMi0wMlQxMToyODo0Mi4xOTdaIiwiaWF0IjoxNTgwNjQyOTIyfQ.kW1E0NZBA9pJoQAK4hJAa1DQ8IN7dDGqJkJ2aCqO2VM"
            // (main-server: Hesam)
            // token =
            //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsInRpbWUiOiIyMDIwLTEwLTA1VDEyOjU3OjQ5LjQ5M1oiLCJpYXQiOjE2MDE5MDI2Njl9.e7N7qaiNxVUD8SXoBJClPziWUqFJlOI6jseKB1lnJMY";
            // (local-server:Hesam)
            // token =
            //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsInRpbWUiOiIyMDIwLTEwLTA1VDE0OjEzOjI1LjkxMFoiLCJpYXQiOjE2MDE5MDcyMDV9.xl6-gF8sjAd8xe1qRF4QWlDSegCdUjKhPOw-Gt9x0c8";
        }
        const body = {
            client,
            version,
            token,
            timezone: new Date().getTimezoneOffset()
        };
        this.httpProvider.post("/users/auth/hello", body, (res) => {
            if (res.status == "success") {
                this.smartAudioProvider.play("achive");
                if (res.data.popup) {
                    setTimeout(() => this.presentAlert(res.data.popup), 4400);
                }
                this.utils.setDataAndGoToGame(res.data);
            }
            else {
                this.presentAlert(res.data);
            }
        });
    }
    gotoRegister(payload) {
        setTimeout(() => {
            this.navCtrl.setDirection("root");
            // this.router.navigate(["factions"], { state: { payload } });
        }, 3000);
    }
    presentAlert(payload) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.isShowingAlert) {
                let prizeModal = yield this.modalCtrl.create({
                    component: _alerts_alerts__WEBPACK_IMPORTED_MODULE_8__["AlertsPage"],
                    componentProps: { payload }
                });
                prizeModal.present();
            }
        });
    }
};
SplashPage.ctorParameters = () => [
    { type: _services_data__WEBPACK_IMPORTED_MODULE_4__["DataProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_smart_audio__WEBPACK_IMPORTED_MODULE_6__["SmartAudioProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_http__WEBPACK_IMPORTED_MODULE_5__["HttpProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsProvider"] }
];
SplashPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "page-splash",
        template: __webpack_require__(/*! raw-loader!./splash.html */ "./node_modules/raw-loader/index.js!./src/app/pages/splash/splash.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data__WEBPACK_IMPORTED_MODULE_4__["DataProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _services_smart_audio__WEBPACK_IMPORTED_MODULE_6__["SmartAudioProvider"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_http__WEBPACK_IMPORTED_MODULE_5__["HttpProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsProvider"]])
], SplashPage);



/***/ })

}]);
//# sourceMappingURL=pages-splash-splash-module-es2015.js.map