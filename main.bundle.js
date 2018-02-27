webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/hr/hr.module": [
		"../../../../../src/app/hr/hr.module.ts",
		"hr.module"
	],
	"app/shooping/shooping.module": [
		"../../../../../src/app/shooping/shooping.module.ts",
		"shooping.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'hr',
        loadChildren: 'app/hr/hr.module#HrModule'
    },
    {
        path: 'shopping',
        loadChildren: 'app/shooping/shooping.module#ShoopingModule',
        data: { preload: true }
    },
    {
        path: '',
        redirectTo: 'hr',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* PreloadAllModules */] })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      <app-menubar >Shopping Cart</app-menubar>\n\n    </div>\n    <div class=\"col-sm-9\">\n        <router-outlet></router-outlet>\n    </div>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["initializeApp"]({
            apiKey: "AIzaSyA0lCdy6nLvF2UjX42QEtawspfS2IZtj-U",
            authDomain: "dataservice-ebe36.firebaseapp.com"
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menubar_menubar_component__ = __webpack_require__("../../../../../src/app/menubar/menubar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__roleguard_service__ = __webpack_require__("../../../../../src/app/roleguard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__hr_auth_auth_service__ = __webpack_require__("../../../../../src/app/hr/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rolrserv_service__ = __webpack_require__("../../../../../src/app/rolrserv.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__menubar_menubar_component__["a" /* MenubarComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_8__roleguard_service__["a" /* RoleguardService */], __WEBPACK_IMPORTED_MODULE_10__hr_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_11__rolrserv_service__["a" /* RolrservService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hr_auth_auth_service__ = __webpack_require__("../../../../../src/app/hr/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    // login:boolean = false;
    function AuthGuardService(router, authact) {
        this.router = router;
        this.authact = authact;
    }
    AuthGuardService.prototype.canActivate = function (route) {
        // if(this.login){
        //   return true;
        // }
        // const expectedRole = route.data.expectedRole;
        if (
        // expectedRole == 'admin' || expectedRole ==   'manager'
        this.authact.isauthenticated()) {
            return true;
        }
        return false;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__hr_auth_auth_service__["a" /* AuthService */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/hr/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(rout) {
        this.rout = rout;
    }
    AuthService.prototype.signupuser = function (email, password) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().createUserWithEmailAndPassword(email, password).then(function (response) {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.getToken().then(function (response) {
                _this.token = response;
                _this.rout.navigateByUrl('shopping/viewitem');
            });
        }).catch(function (error) { return alert(error); });
    };
    AuthService.prototype.signinuser = function (email, password) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signInWithEmailAndPassword(email, password).then(function (response) {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.getToken().then(function (response) {
                _this.token = response;
                console.log(response);
                _this.rout.navigateByUrl('shopping/viewitem');
            });
        }).catch(function (error) {
            alert(error);
            _this.rout.navigateByUrl('shopping/signin');
        });
    };
    AuthService.prototype.gettoken = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.getToken().then(function (response) { _this.token = response; });
        return this.token;
    };
    AuthService.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signOut();
        this.token = null;
    };
    AuthService.prototype.isauthenticated = function () {
        if (this.token != null) {
            return true;
        }
        return false;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/menubar/menubar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vertical-menu {\n    width:573px; /* Set a width if you like */\n}\n\n.vertical-menu a {\n    background-color: #eee; /* Grey background color */\n    color: black; /* Black text color */\n    display: block; /* Make the links appear below each other */\n    padding: 12px; /* Add some padding */\n    text-decoration: none; /* Remove underline from links */\n    text-align: center;\n}\n\n.vertical-menu a:hover {\n    background-color: #ccc; /* Dark grey background on mouse-over */\n}\n\n.vertical-menu a.active {\n    background-color: #4CAF50; /* Add a green color to the \"active/current\" link */\n    color: white;\n}\n\n.menutop h3{\n  margin: 0 auto;\n\n}\n\n.menutop {\n    background: rgb(76, 160, 175);\n    padding: 20px 0;\n    \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menubar/menubar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row menutop\">\n  \n  <h3><i><ng-content></ng-content></i></h3>\n</div>\n\n<div class=\"row\">\n    <div class=\"vertical-menu\">\n        <ng-template [ngIf]=\"ser.isauthenticated() \">\n          \n        <a *ngIf=\"role.getrole() == 'admin' \" routerLink=\"shopping/additem\" routerLinkActive=\"active\" >Add Product</a>\n        <a  routerLink=\"shopping/viewitem\" routerLinkActive=\"active\"  >View Products</a>\n         <a  routerLink=\"shopping/deliveries\" routerLinkActive=\"active\"  >Deliveries</a> \n        </ng-template>\n         <ng-template [ngIf]=\"!ser.isauthenticated() \">\n            <a  routerLink=\"hr/signin\" routerLinkActive=\"active\"  >signin</a> \n                  <a  routerLink=\"hr/signup\" routerLinkActive=\"active\"  >signup</a> \n               \n         </ng-template>\n         <ng-template [ngIf]=\"ser.isauthenticated() \">\n\n            <a (click)=\"logout()\" >logout</a> \n         </ng-template>\n         \n      \n        \n       \n      </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/menubar/menubar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenubarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rolrserv_service__ = __webpack_require__("../../../../../src/app/rolrserv.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hr_auth_auth_service__ = __webpack_require__("../../../../../src/app/hr/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenubarComponent = /** @class */ (function () {
    function MenubarComponent(ser, rout, role) {
        this.ser = ser;
        this.rout = rout;
        this.role = role;
    }
    MenubarComponent.prototype.ngOnInit = function () {
        console.log(this.ser.isauthenticated());
    };
    MenubarComponent.prototype.logout = function () {
        this.ser.logout();
        alert('loged out');
        this.rout.navigateByUrl('hr/signin');
    };
    MenubarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menubar',
            template: __webpack_require__("../../../../../src/app/menubar/menubar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menubar/menubar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__hr_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__rolrserv_service__["a" /* RolrservService */]])
    ], MenubarComponent);
    return MenubarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/roleguard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleguardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hr_auth_auth_service__ = __webpack_require__("../../../../../src/app/hr/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rolrserv_service__ = __webpack_require__("../../../../../src/app/rolrserv.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoleguardService = /** @class */ (function () {
    function RoleguardService(router, authact, serv) {
        this.router = router;
        this.authact = authact;
        this.serv = serv;
    }
    RoleguardService.prototype.canActivate = function (route) {
        // this will be passed from the route config
        // on the data property
        var expectedRole = route.data.expectedRole;
        var token = localStorage.getItem('token');
        var role = this.serv.getrole();
        // decode the token to get its payload
        ;
        if (!this.authact.isauthenticated() ||
            (expectedRole !== role)) {
            return false;
        }
        return true;
    };
    RoleguardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__hr_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__rolrserv_service__["a" /* RolrservService */]])
    ], RoleguardService);
    return RoleguardService;
}());



/***/ }),

/***/ "../../../../../src/app/rolrserv.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolrservService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RolrservService = /** @class */ (function () {
    function RolrservService() {
    }
    RolrservService.prototype.getrole = function () {
        return 'admin';
    };
    RolrservService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], RolrservService);
    return RolrservService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map