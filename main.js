(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-movie-compnent/add-movie-compnent.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/add-movie-compnent/add-movie-compnent.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-movie-compnent/add-movie-compnent.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/add-movie-compnent/add-movie-compnent.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add Movie</h1>\n<form novalidate [formGroup]=\"addMovieDialog\" (ngSubmit)=\"onSubmit()\">\n  <mat-dialog-content>\n    <mat-form-field>\n      <input matInput placeholder=\"title *\" formControlName=\"title\" (focus)=\"this.changeMovieExistsToFalse()\">\n      <mat-error *ngIf=\"this.titleCtrl.invalid\">{{this.getRequiredErrorMessage(this.titleCtrl)}}</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"year (4 digit) *\" formControlName=\"year\">\n      <mat-error *ngIf=\"this.yearCtrl.invalid\">{{this.getRequiredErrorMessage(this.yearCtrl)}}</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"runtime *\" formControlName=\"runtime\">\n      <mat-error *ngIf=\"this.runtimeCtrl.invalid\">{{this.getRequiredErrorMessage(this.runtimeCtrl)}}</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"genre *\" formControlName=\"genre\">\n      <mat-error *ngIf=\"this.genreCtrl.invalid\">{{this.getRequiredErrorMessage(this.genreCtrl)}}</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"director *\" formControlName=\"director\">\n      <mat-error *ngIf=\"this.directorCtrl.invalid\">{{this.getRequiredErrorMessage(this.directorCtrl)}}</mat-error>\n    </mat-form-field>\n  </mat-dialog-content>\n  <button mat-button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!addMovieDialog.valid\" cdkFocusInitial>Save Movie</button>\n  <button mat-button class=\"btn btn-danger\" type=\"button\" (click)=\"this.onCancel()\">Cancel</button>\n</form>\n<div *ngIf=\"this.movieExists\" class=\"alert alert-danger alert-dismissible\">\n    <a href=\"#\" class=\"close\" (click)=\"this.changeMovieExistsToFalse()\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n   Movie not added - movie with the name \"{{this.titleCtrl.value}}\" already exists\n</div>\n"

/***/ }),

/***/ "./src/app/add-movie-compnent/add-movie-compnent.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/add-movie-compnent/add-movie-compnent.component.ts ***!
  \********************************************************************/
/*! exports provided: AddMovieCompnentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovieCompnentComponent", function() { return AddMovieCompnentComponent; });
/* harmony import */ var _model_errorsservice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../model/errorsservice */ "./src/model/errorsservice.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _model_dataservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/dataservice */ "./src/model/dataservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AddMovieCompnentComponent = /** @class */ (function () {
    function AddMovieCompnentComponent(dialogRef, errorservice, dataservice, data) {
        this.dialogRef = dialogRef;
        this.errorservice = errorservice;
        this.dataservice = dataservice;
        this.data = data;
    }
    AddMovieCompnentComponent.prototype.getRequiredErrorMessage = function (ctrl) {
        return this.errorservice.getRequiredErrorMessage(ctrl);
    };
    AddMovieCompnentComponent.prototype.onSubmit = function () {
        if (this.dataservice.checkIfMovieExists(this.titleCtrl.value) == 0) {
            this.dataservice.addMovie(this.titleCtrl.value, this.yearCtrl.value, this.runtimeCtrl.value, this.genreCtrl.value, this.directorCtrl.value);
            this.dialogRef.close("Added");
        }
        else
            this.movieExists = true;
    };
    AddMovieCompnentComponent.prototype.onCancel = function () {
        this.dialogRef.close("Cancel");
    };
    AddMovieCompnentComponent.prototype.changeMovieExistsToFalse = function () {
        if (this.movieExists == true)
            this.movieExists = false;
    };
    AddMovieCompnentComponent.prototype.ngOnInit = function () {
        this.titleCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.yearCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[0-9]*")]);
        this.runtimeCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[0-9]*")]);
        this.genreCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        ;
        this.directorCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        ;
        this.buildForm();
    };
    AddMovieCompnentComponent.prototype.buildForm = function () {
        this.addMovieDialog = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: this.titleCtrl,
            year: this.yearCtrl,
            runtime: this.runtimeCtrl,
            genre: this.genreCtrl,
            director: this.directorCtrl,
        });
    };
    AddMovieCompnentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-movie-compnent',
            template: __webpack_require__(/*! ./add-movie-compnent.component.html */ "./src/app/add-movie-compnent/add-movie-compnent.component.html"),
            styles: [__webpack_require__(/*! ./add-movie-compnent.component.css */ "./src/app/add-movie-compnent/add-movie-compnent.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], _model_errorsservice__WEBPACK_IMPORTED_MODULE_0__["errorService"], _model_dataservice__WEBPACK_IMPORTED_MODULE_4__["dataService"], Object])
    ], AddMovieCompnentComponent);
    return AddMovieCompnentComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainContainer {\r\n    background-image: url('cinema.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    height: 800px;;\r\n}\r\nheader {\r\n    background-color: #2d2a33cc;\r\n    \r\n}\r\nheader h1 {\r\n    font-weight: 700;   \r\n    color:white;\r\n    padding-bottom: 10px;\r\n    letter-spacing: 1.5px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"row text-center\">\n    <h1>\n       {{ title }}\n    </h1>\n  </div>\n</header>\n<div class=\"container-fluid mainContainer\">\n  <div class=\"row text-center\">\n    <div class=\"col-md-12 test\">\n      <app-movies-list></app-movies-list>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Movies List';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _model_dataservice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../model/dataservice */ "./src/model/dataservice.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies-list/movies-list.component */ "./src/app/movies-list/movies-list.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _movie_edit_popup_movie_edit_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie-edit-popup/movie-edit-popup.component */ "./src/app/movie-edit-popup/movie-edit-popup.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _remove_non_english_char_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./remove-non-english-char.pipe */ "./src/app/remove-non-english-char.pipe.ts");
/* harmony import */ var _remove_confirmation_dialog_remove_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./remove-confirmation-dialog/remove-confirmation-dialog.component */ "./src/app/remove-confirmation-dialog/remove-confirmation-dialog.component.ts");
/* harmony import */ var _add_movie_compnent_add_movie_compnent_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-movie-compnent/add-movie-compnent.component */ "./src/app/add-movie-compnent/add-movie-compnent.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_errorsservice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../model/errorsservice */ "./src/model/errorsservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_4__["MoviesListComponent"],
                _movie_edit_popup_movie_edit_popup_component__WEBPACK_IMPORTED_MODULE_6__["MovieEditPopupComponent"],
                _remove_non_english_char_pipe__WEBPACK_IMPORTED_MODULE_9__["RemoveNonEnglishCharPipe"],
                _remove_confirmation_dialog_remove_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_10__["RemoveConfirmationDialogComponent"],
                _add_movie_compnent_add_movie_compnent_component__WEBPACK_IMPORTED_MODULE_11__["AddMovieCompnentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
            ],
            entryComponents: [
                _movie_edit_popup_movie_edit_popup_component__WEBPACK_IMPORTED_MODULE_6__["MovieEditPopupComponent"],
                _remove_confirmation_dialog_remove_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_10__["RemoveConfirmationDialogComponent"],
                _add_movie_compnent_add_movie_compnent_component__WEBPACK_IMPORTED_MODULE_11__["AddMovieCompnentComponent"]
            ],
            providers: [_model_dataservice__WEBPACK_IMPORTED_MODULE_0__["dataService"], _model_errorsservice__WEBPACK_IMPORTED_MODULE_13__["errorService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/movie-edit-popup/movie-edit-popup.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/movie-edit-popup/movie-edit-popup.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert {\r\n    margin-top:20px;\r\n}"

/***/ }),

/***/ "./src/app/movie-edit-popup/movie-edit-popup.component.html":
/*!******************************************************************!*\
  !*** ./src/app/movie-edit-popup/movie-edit-popup.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title class=\"text-center\">{{data.movieToEdit.title}}</h1>\n<form [formGroup]=\"editMovieForm\">\n  <mat-dialog-content>\n    <mat-form-field>\n      <input matInput formControlName=\"title\"placeholder=\"title *\" [(ngModel)]=\"data.movieToEdit.title\" value=\"{{data.movieToEdit.title | titlecase | removeNonEnglishChar}}\" (focus)=\"this.changeMovieExistsToFalse()\">   \n      <mat-error *ngIf=\"this.titleCtrl.invalid\">{{this.getRequiredErrorMessage(this.titleCtrl)}}</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput formControlName=\"year\" placeholder=\"year (4 digit) *\" [(ngModel)]=\"data.movieToEdit.year\" value=\"{{data.movieToEdit.year}}\">\n      <mat-error *ngIf=\"this.yearCtrl.invalid\">{{this.getRequiredErrorMessage(this.yearCtrl)}}</mat-error>\n      <mat-hint>4 digit</mat-hint>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput formControlName=\"runtime\" placeholder=\"runtime *\" [(ngModel)]=\"data.movieToEdit.runtime\" value=\"{{data.movieToEdit.runtime}}\">\n      <mat-error *ngIf=\"this.runtimeCtrl.invalid\">{{this.getRequiredErrorMessage(this.runtimeCtrl)}}</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput formControlName=\"genre\" placeholder=\"genre *\" [(ngModel)]=\"data.movieToEdit.genre\" value=\"{{data.movieToEdit.genre}}\">\n      <mat-error *ngIf=\"this.genreCtrl.invalid\">{{this.getRequiredErrorMessage(this.genreCtrl)}}</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput formControlName=\"director\" placeholder=\"director *\" [(ngModel)]=\"data.movieToEdit.director\" value=\"{{data.movieToEdit.director}}\">\n      <mat-error *ngIf=\"this.directorCtrl.invalid\">{{this.getRequiredErrorMessage(this.directorCtrl)}}</mat-error>\n    </mat-form-field>\n  </mat-dialog-content>\n  <div mat-dialog-actions>    \n    <button mat-button class=\"btn btn-success\" [disabled]=\"!editMovieForm.valid\"  (click)=\"this.onSave(data.movieToEdit)\" cdkFocusInitial>Save Changes</button>\n    <button mat-button class=\"btn btn-danger\" (click)=\"this.onCancel()\">Cancel</button>\n  </div>\n</form>\n<div *ngIf=\"this.movieExists\" class=\"alert alert-danger alert-dismissible\">\n    <a href=\"#\" class=\"close\" (click)=\"this.changeMovieExistsToFalse()\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n   Movie not saved - movie with the name \"{{this.titleCtrl.value}}\" already exists\n</div>\n\n"

/***/ }),

/***/ "./src/app/movie-edit-popup/movie-edit-popup.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/movie-edit-popup/movie-edit-popup.component.ts ***!
  \****************************************************************/
/*! exports provided: MovieEditPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieEditPopupComponent", function() { return MovieEditPopupComponent; });
/* harmony import */ var _model_errorsservice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../model/errorsservice */ "./src/model/errorsservice.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _model_dataservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/dataservice */ "./src/model/dataservice.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var MovieEditPopupComponent = /** @class */ (function () {
    function MovieEditPopupComponent(dialogRef, errorservice, dataservice, data) {
        this.dialogRef = dialogRef;
        this.errorservice = errorservice;
        this.dataservice = dataservice;
        this.data = data;
    }
    MovieEditPopupComponent.prototype.getRequiredErrorMessage = function (ctrl) {
        return this.errorservice.getRequiredErrorMessage(ctrl);
    };
    MovieEditPopupComponent.prototype.onCancel = function () {
        this.dialogRef.close("Cancel");
    };
    MovieEditPopupComponent.prototype.onSave = function (movie) {
        if (this.dataservice.checkIfMovieExists(this.titleCtrl.value) == 1) {
            this.dialogRef.close();
        }
        else
            this.movieExists = true;
    };
    MovieEditPopupComponent.prototype.changeMovieExistsToFalse = function () {
        if (this.movieExists == true)
            this.movieExists = false;
    };
    MovieEditPopupComponent.prototype.ngOnInit = function () {
        this.titleCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.yearCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[0-9]*")]);
        this.runtimeCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[0-9]*")]);
        this.genreCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        ;
        this.directorCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        ;
        this.buildForm();
    };
    MovieEditPopupComponent.prototype.buildForm = function () {
        this.editMovieForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: this.titleCtrl,
            year: this.yearCtrl,
            runtime: this.runtimeCtrl,
            genre: this.genreCtrl,
            director: this.directorCtrl,
        });
    };
    MovieEditPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-edit-popup',
            template: __webpack_require__(/*! ./movie-edit-popup.component.html */ "./src/app/movie-edit-popup/movie-edit-popup.component.html"),
            styles: [__webpack_require__(/*! ./movie-edit-popup.component.css */ "./src/app/movie-edit-popup/movie-edit-popup.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _model_errorsservice__WEBPACK_IMPORTED_MODULE_0__["errorService"], _model_dataservice__WEBPACK_IMPORTED_MODULE_3__["dataService"], Object])
    ], MovieEditPopupComponent);
    return MovieEditPopupComponent;
}());



/***/ }),

/***/ "./src/app/movies-list/movies-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/movies-list/movies-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, th,td,tr {    \r\n    padding: 10px;\r\n    text-align: center;\r\n    border: none !important;\r\n}\r\ntable {\r\n    margin: 20px auto;\r\n    max-width:900px;\r\n}\r\n.table-striped tr:nth-child(odd)  {\r\n    background-color: #d0efd0;\r\n }\r\n.table-striped tr:nth-child(even)  {\r\n    background-color: #cdddcd;\r\n }\r\n.table-striped tr:hover {\r\n    background-color: #70d09f ;\r\n}\r\nth {\r\n    text-transform: uppercase;\r\n    background-color: #479494;\r\n    color:#333a42;    \r\n}\r\n.glyphicon {\r\n    font-size: 20px;\r\n    padding: 5px;\r\n}\r\n.glyphicon:hover {\r\n    cursor: pointer;\r\n}\r\n.glyphicon-pencil {\r\n    color:green;\r\n}\r\n.glyphicon-remove {\r\n    color:#e50f0f;\r\n}\r\nbutton {\r\n    margin-top:10px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/movies-list/movies-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/movies-list/movies-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table-striped table-bordered table-hover\">\n  <tr>\n    <th>Title</th>\n    <th>year</th>\n    <th>runtime</th>\n    <th>genre</th>\n    <th>director</th>\n    <th>actions</th>\n  </tr>\n  <tr *ngFor=\"let movie of this.movies\">\n    <td>{{movie.title | titlecase | removeNonEnglishChar}}</td>\n    <td>{{movie.year}}</td>\n    <td>{{movie.runtime}} mins</td>\n    <td>{{movie.genre}}</td>\n    <td>{{movie.director}}</td>\n    <td>\n      <span class=\"removeIcon glyphicon glyphicon-pencil\" (click)=\"this.openEditDialog(movie)\"></span>\n      <span class=\"editIcon glyphicon glyphicon-remove\" (click)=\"this.openRemoveDialog(movie)\"></span>\n    </td>\n  </tr>\n</table>\n<button class=\"btn btn-primary btn-lg\" (click)=\"this.openAddMovieDialog()\">Add Movie</button>"

/***/ }),

/***/ "./src/app/movies-list/movies-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/movies-list/movies-list.component.ts ***!
  \******************************************************/
/*! exports provided: MoviesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function() { return MoviesListComponent; });
/* harmony import */ var _add_movie_compnent_add_movie_compnent_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../add-movie-compnent/add-movie-compnent.component */ "./src/app/add-movie-compnent/add-movie-compnent.component.ts");
/* harmony import */ var _remove_confirmation_dialog_remove_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../remove-confirmation-dialog/remove-confirmation-dialog.component */ "./src/app/remove-confirmation-dialog/remove-confirmation-dialog.component.ts");
/* harmony import */ var _model_movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../model/movie */ "./src/model/movie.ts");
/* harmony import */ var _model_dataservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../model/dataservice */ "./src/model/dataservice.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _movie_edit_popup_movie_edit_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../movie-edit-popup/movie-edit-popup.component */ "./src/app/movie-edit-popup/movie-edit-popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MoviesListComponent = /** @class */ (function () {
    function MoviesListComponent(dataservice, dialog) {
        this.dataservice = dataservice;
        this.dialog = dialog;
    }
    MoviesListComponent.prototype.ngOnInit = function () {
        var urls = ["http://www.omdbapi.com/?t=the+matrix&apikey=633a87db", "http://www.omdbapi.com/?t=back%20+to%20+the%20+future&apikey=633a87db",
            "http://www.omdbapi.com/?t=star+wars&apikey=633a87db"];
        for (var _i = 0, urls_1 = urls; _i < urls_1.length; _i++) {
            var url = urls_1[_i];
            this.requestMovieFromService(url);
        }
        this.movies = this.dataservice.getMoviesList();
    };
    MoviesListComponent.prototype.requestMovieFromService = function (url) {
        var _this = this;
        this.dataservice.getMoviesFromServer(url).subscribe(function (data) {
            var runtime = data['Runtime'];
            runtime = runtime.replace("min", "").replace(/ /g, '');
            _this.dataservice.addMovie(data['Title'], data['Year'], runtime, data['Genre'], data['Director']);
        }, function (err) {
            console.log(err);
        });
    };
    MoviesListComponent.prototype.openEditDialog = function (movie) {
        var _this = this;
        this.currentMovie = movie;
        this.editedMovieOriginalTitle = movie.title;
        this.editedMovieOriginalYear = movie.year;
        this.editedMovieOriginalRuntime = movie.runtime;
        this.editedMovieOriginalGenre = movie.genre;
        this.editedMovieOriginalDirector = movie.director;
        var dialogRef = this.dialog.open(_movie_edit_popup_movie_edit_popup_component__WEBPACK_IMPORTED_MODULE_6__["MovieEditPopupComponent"], {
            width: '450px',
            height: '500px',
            data: { movieToEdit: movie },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == "Cancel") {
                _this.currentMovie.title = _this.editedMovieOriginalTitle;
                _this.currentMovie.year = _this.editedMovieOriginalYear;
                _this.currentMovie.runtime = _this.editedMovieOriginalRuntime;
                _this.currentMovie.genre = _this.editedMovieOriginalGenre;
                _this.currentMovie.director = _this.editedMovieOriginalDirector;
            }
        });
    };
    MoviesListComponent.prototype.openRemoveDialog = function (movie) {
        var _this = this;
        var dialogRef = this.dialog.open(_remove_confirmation_dialog_remove_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__["RemoveConfirmationDialogComponent"], {
            width: '450px',
            data: { movieToEdit: movie },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result instanceof _model_movie__WEBPACK_IMPORTED_MODULE_2__["Movie"]) {
                var index = _this.dataservice.getMoviesList().findIndex(function (x) { return x.id == result.id; });
                _this.dataservice.getMoviesList().splice(index, 1);
            }
        });
    };
    MoviesListComponent.prototype.openAddMovieDialog = function () {
        var dialogRef = this.dialog.open(_add_movie_compnent_add_movie_compnent_component__WEBPACK_IMPORTED_MODULE_0__["AddMovieCompnentComponent"], {
            width: '450px',
            height: '500px'
        });
    };
    MoviesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-movies-list',
            template: __webpack_require__(/*! ./movies-list.component.html */ "./src/app/movies-list/movies-list.component.html"),
            styles: [__webpack_require__(/*! ./movies-list.component.css */ "./src/app/movies-list/movies-list.component.css")]
        }),
        __metadata("design:paramtypes", [_model_dataservice__WEBPACK_IMPORTED_MODULE_3__["dataService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], MoviesListComponent);
    return MoviesListComponent;
}());



/***/ }),

/***/ "./src/app/remove-confirmation-dialog/remove-confirmation-dialog.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/remove-confirmation-dialog/remove-confirmation-dialog.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n    margin-right: 10px;\r\n    width:150px;\r\n    font-size: 20px;\r\n}\r\n.mat-dialog-actions {\r\n    \r\n    display: block;\r\n}"

/***/ }),

/***/ "./src/app/remove-confirmation-dialog/remove-confirmation-dialog.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/remove-confirmation-dialog/remove-confirmation-dialog.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-justify\" mat-dialog-title>Are you sure you want to remove \"{{data.movieToEdit.title}}\" ?</h1>\n\n<div mat-dialog-actions class=\"text-center\"  >  \n  <button mat-button class=\"btn btn-danger\" (click)=\"this.onRemove(data.movieToEdit)\">Remove</button>\n  <button mat-button class=\"btn btn-success\" (click)=\"this.onCancel()\" cdkFocusInitial>Cancel</button>\n</div>\n"

/***/ }),

/***/ "./src/app/remove-confirmation-dialog/remove-confirmation-dialog.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/remove-confirmation-dialog/remove-confirmation-dialog.component.ts ***!
  \************************************************************************************/
/*! exports provided: RemoveConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveConfirmationDialogComponent", function() { return RemoveConfirmationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _model_dataservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/dataservice */ "./src/model/dataservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var RemoveConfirmationDialogComponent = /** @class */ (function () {
    function RemoveConfirmationDialogComponent(dialogRef, dataservice, data) {
        this.dialogRef = dialogRef;
        this.dataservice = dataservice;
        this.data = data;
    }
    RemoveConfirmationDialogComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    RemoveConfirmationDialogComponent.prototype.onRemove = function (movie) {
        this.dialogRef.close(movie);
    };
    RemoveConfirmationDialogComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    RemoveConfirmationDialogComponent.prototype.buildForm = function () {
    };
    RemoveConfirmationDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remove-confirmation-dialog',
            template: __webpack_require__(/*! ./remove-confirmation-dialog.component.html */ "./src/app/remove-confirmation-dialog/remove-confirmation-dialog.component.html"),
            styles: [__webpack_require__(/*! ./remove-confirmation-dialog.component.css */ "./src/app/remove-confirmation-dialog/remove-confirmation-dialog.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _model_dataservice__WEBPACK_IMPORTED_MODULE_2__["dataService"], Object])
    ], RemoveConfirmationDialogComponent);
    return RemoveConfirmationDialogComponent;
}());



/***/ }),

/***/ "./src/app/remove-non-english-char.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/remove-non-english-char.pipe.ts ***!
  \*************************************************/
/*! exports provided: RemoveNonEnglishCharPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveNonEnglishCharPipe", function() { return RemoveNonEnglishCharPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RemoveNonEnglishCharPipe = /** @class */ (function () {
    function RemoveNonEnglishCharPipe() {
    }
    RemoveNonEnglishCharPipe.prototype.transform = function (value, args) {
        value = value.replace(/[\W_]+/g, " ");
        return value;
    };
    RemoveNonEnglishCharPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'removeNonEnglishChar'
        })
    ], RemoveNonEnglishCharPipe);
    return RemoveNonEnglishCharPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/model/dataservice.ts":
/*!**********************************!*\
  !*** ./src/model/dataservice.ts ***!
  \**********************************/
/*! exports provided: dataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataService", function() { return dataService; });
/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie */ "./src/model/movie.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var dataService = /** @class */ (function () {
    function dataService(http) {
        this.http = http;
        this.movies = [];
        this.movieId = 1;
    }
    dataService.prototype.getMoviesFromServer = function (url) {
        return this.http.get(url);
    };
    dataService.prototype.getMoviesList = function () {
        return this.movies;
    };
    dataService.prototype.addMovie = function (title, year, runtime, genre, director) {
        this.movies.push(new _movie__WEBPACK_IMPORTED_MODULE_0__["Movie"](this.movieId, title, year, runtime, genre, director));
        this.movieId++;
    };
    dataService.prototype.checkIfMovieExists = function (movieTitle) {
        var result = this.movies.filter(function (movie) { return movie.title.toLowerCase() === movieTitle.toLowerCase(); });
        return result.length;
    };
    dataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], dataService);
    return dataService;
}());



/***/ }),

/***/ "./src/model/errorsservice.ts":
/*!************************************!*\
  !*** ./src/model/errorsservice.ts ***!
  \************************************/
/*! exports provided: errorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorService", function() { return errorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var errorService = /** @class */ (function () {
    function errorService() {
    }
    errorService.prototype.getRequiredErrorMessage = function (ctrl) {
        if (ctrl.hasError('minlength') || ctrl.hasError('maxlength'))
            return "must be exactly 4 digit";
        if (ctrl.hasError('required'))
            return "required";
        if (ctrl.hasError('pattern'))
            return "can only contain numbers";
    };
    errorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], errorService);
    return errorService;
}());



/***/ }),

/***/ "./src/model/movie.ts":
/*!****************************!*\
  !*** ./src/model/movie.ts ***!
  \****************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie(id, title, year, runtime, genre, director) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.runtime = runtime;
        this.genre = genre;
        this.director = director;
    }
    return Movie;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Programming\HeroloProject\heroloProjectV1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map