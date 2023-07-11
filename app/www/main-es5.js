(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-item/add-item.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-item/add-item.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<form (ngSubmit)=\"onSubmit()\">\r\n<div class=\"card align-contents\">\r\n  <p><img class=\"card-img-top\" style=\"padding: 0 15px; float: left;\" src=\"../../assets/images/shop.png\" alt=\"Card image cap\"><font>Welcome,<br> On-boarding New Items</font></p>\r\n  <div class=\"table-responsive panel\">\r\n    <table class=\"table\">\r\n      <tbody>\r\n      <tr>\r\n        <td></td>\r\n        <td><div class=\"container\" style=\"height: 75px;\">\r\n          <div *ngIf=\"present==false\" class=\"alert alert-danger alert-box\" align=\"center\" style=\"width: 60%; margin: auto;\">\r\n            <strong>Item ID Not Unique!</strong>\r\n          </div>\r\n          <div *ngIf=\"present\" class=\"alert alert-success alert-box\" align=\"center\" style=\"width: 60%; margin: auto;\">\r\n            <strong>Item ID Unique</strong>\r\n          </div>\r\n        </div></td>\r\n        <td></td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-user\"></i> Item Id</td>\r\n        <td><input placeholder=\"Item Id\" type=\"text\" minlength=\"3\" maxlength=\"3\"\r\n                   [(ngModel)]=\"newFoodItems.id\" name=\"id\" required=\"required\"></td>\r\n        <td><button style=\"position: absolute; left: 68%\" type=\"button\" (click)=\"checkAvailability()\"><span>Check Availability</span></button></td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-user-circle\"></i> Item Name</td>\r\n        <td><input placeholder=\"Item Name\" type=\"text\" minlength=\"2\" maxlength=\"20\"\r\n                   [(ngModel)]=\"newFoodItems.name\" name=\"name\" required=\"required\"></td>\r\n        <td></td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-mobile\"></i> Price (INR)</td>\r\n        <td><input placeholder=\"Price\" type=\"number\"\r\n                   name=\"price\" [(ngModel)]=\"newFoodItems.price\" required=\"required\" min=\"0\"></td>\r\n        <td></td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-envelope\"></i> Available Quantity</td>\r\n        <td><input placeholder=\"Available Quantity\" type=\"number\"\r\n                   name=\"quantity\" [(ngModel)]=\"newFoodItems.quantityAvailable\" required=\"required\" min=\"0\"></td>\r\n        <td></td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-envelope\"></i> Food Image</td>\r\n        <td><input type=\"file\" (change)=\"onFileSelected($event)\"></td>\r\n        <td></td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-envelope\"></i> OR</td>\r\n        <td></td>\r\n        <td></td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-envelope\"></i> Food Image URL</td>\r\n        <td><input type=\"text\" placeholder=\"Paste The Url\" name=\"fileDataF\" [(ngModel)]=\"newFoodItems.fileDataF\"></td>\r\n        <td></td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\" align=\"center\" style=\"margin-left: 20%;\">\r\n  <button class=\"bigbutton\" routerLink=\"/home\" (click)=\"clearLocal()\"><span>LogOut</span></button>\r\n  <button class=\"bigbutton\" routerLink=\"/merchantMenu\"><span>Menu</span></button>\r\n  <button class=\"bigbutton\" type=\"submit\"><span>AddItem</span></button>\r\n</div>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <title>SpringFood|Payment  </title>\r\n</head>\r\n<div class=\"body\">\r\n  <br><br><br><br>\r\n<h1 align=\"center\">The Hungry Campus| CHECKOUT</h1>\r\n\r\n  <div class=\"alert alert-warning\" align=\"center\">\r\n    <strong>Payment Portal</strong>\r\n  </div>\r\n  <h2 align=\"center\">Payment Details</h2>\r\n    <h2 align=\"center\">To Pay : {{total}}</h2>\r\n  <div>\r\n  \r\n    <div align=\"center\">\r\n      <table align=\"center\">\r\n        <tr>\r\n          <td><label>Card Number</label></td>\r\n          <td><input type=\"text\" placeholder=\"xxxx xxxx xxxx xxxx\"\r\n                      minlength=\"16\"\r\n                      maxlength=\"16\"\r\n                      [(ngModel)]=\"cardNumber\"\r\n                      required=\"required\"\r\n                      (keyup)=\"validCard()\">\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td><label>Expiry</label></td>\r\n          <td>\r\n            <table>\r\n              <tr>\r\n                <td style=\"min-width: 90px\"><input type=\"number\" placeholder=\"MM\" min=\"1\" max=\"12\" required=\"required\" [(ngModel)]=\"month\" (keyup)=\"validMonth()\"></td>\r\n                <td style=\"min-width: 90px\"><input type=\"number\" placeholder=\"YY\" min=\"19\" max=\"99\" required=\"required\" [(ngModel)]=\"year\" (keyup)=\"validYear()\"></td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td><label>CVV</label></td>\r\n          <td>\r\n            <table>\r\n              <tr>\r\n                <td style=\"min-width: 90px\"><input type=\"number\" placeholder=\"CVV\" min=\"100\" max=\"999\" required=\"required\" [(ngModel)]=\"cvv\" (keyup)=\"validCvv()\"></td>\r\n                <td><img class=\"question\" src=\"http://pngimg.com/uploads/question_mark/question_mark_PNG49.png\"\r\n                         data-toggle=\"tooltip\" data-placement=\"right\" title=\"Card CVV Help\"></td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td><label>Cardholder Name</label></td>\r\n          <td><input type=\"text\" placeholder=\"Name\" required=\"required\" minlength=\"4\" maxlength=\"10\" [(ngModel)]=\"nameOnCard\" (keyup)=\"validName()\"></td>\r\n        </tr>\r\n      </table>\r\n      <table>\r\n        <tr>\r\n          <td>\r\n            <button class=\"bigbutton\" routerLink=\"/success\" (click)=\"changeDB()\"><span>Pay</span></button>\r\n          </td>\r\n          <td>\r\n            <button class=\"bigbutton\" routerLink=\"/menu\"><span>Go Back</span></button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\r\n<div class=\"body\" align=\"center\">\r\n  <h1>The Hungry Campus | Contact Us</h1>\r\n</div>\r\n\r\n<br><br><br><br>\r\n<div class=\"body\">\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 \" id=\"form_container\" style=\"margin: auto\">\r\n      <!-- <p> Please send your message below. We will get back to you at the earliest! </p> -->\r\n      <form role=\"form\" method=\"post\" id=\"reused_form\" (ngSubmit)=\"sendFeedback()\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 form-group\">\r\n            <label for=\"message\"> Message:</label>\r\n            <textarea class=\"form-control\" type=\"textarea\" id=\"message\" name=\"message\" maxlength=\"6000\" rows=\"7\" [(ngModel)]=\"modelMessage.message\"></textarea>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6 form-group\">\r\n            <label for=\"name\"> Your Name:</label>\r\n            <input type=\"text\" class=\"form-control\" disabled=\"disabled\" id=\"name\" name=\"name\" required placeholder=\"{{modelUser.firstname}} {{modelUser.lastname}}\">\r\n          </div>\r\n          <div class=\"col-sm-6 form-group\">\r\n            <label for=\"email\"> Email:</label>\r\n            <input type=\"email\" disabled=\"disabled\" class=\"form-control\" id=\"email\" name=\"email\" required placeholder=\"{{modelUser.email}}\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4 form-group\">\r\n            <button type=\"submit\" class=\"bigbutton\" ><span>Send</span></button>\r\n          </div>\r\n          <div class=\"col-lg-4 form-group\">\r\n            <button type=\"button\" class=\"bigbutton\" routerLink=\"/menu\"><span>Menu</span></button>\r\n          </div>\r\n          <div class=\"col-lg-4 form-group\">\r\n            <button type=\"button\" class=\"bigbutton\" routerLink=\"/home\" (click)=\"clearLocal()\"><span>Log Out</span></button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<div *ngIf=\"gif\">\r\n  <img src=\"../../assets/images/gif1.gif\">\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <title>Welcome</title>\r\n</head>\r\n<div class=\"body\">\r\n<br><br><br><br>\r\n<H1 align=\"center\">The Hungry Campus - BITS Pilani Hyderabad Campus</H1>\r\n<br><br><br><br><br><br>\r\n<table align=\"center\">\r\n  <tr>\r\n    <td><a routerLink=\"/login\"><button class=\"bigbutton\"><span>Log In</span></button></a></td>\r\n    <td><a routerLink=\"/register\"><button class=\"bigbutton\"><span>Register</span></button></a></td>\r\n  </tr>\r\n</table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n<head></head>\r\n\r\n<body>\r\n<div class=\"loginbody\">\r\n<br><br><br><br>\r\n<H1 align=\"center\">Welcome to The Hungry Campus!</H1>\r\n<H2 align=\"center\">Please login to proceed.</H2>\r\n<br><br><br><br><br><br>\r\n<div align=\"center\" style=\"color: #f44336\">{{message}}</div>\r\n<div class=\"container\" align=\"center\">\r\n  <div class=\"row\">\r\n    <div class=\"offset-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && sendFeedback()\" novalidate class=\"feedback-form\">\r\n        <!-- Name -->\r\n        <div class=\"form-group\">\r\n          <label for=\"username\">Username</label>\r\n          <input type=\"text\"\r\n                 id=\"username\"\r\n                 class=\"form-control\"\r\n                 name=\"username\"\r\n                 placeholder=\"username\"\r\n                 [(ngModel)]=\"model.username\"\r\n                 #username=\"ngModel\"\r\n                 [ngClass]=\"{ 'is-invalid': f.submitted && username.invalid }\"\r\n                 required/>\r\n          <!-- input validation group -->\r\n          <div *ngIf=\"f.submitted && username.invalid\" class=\"invalid-input\">\r\n            <!-- individual validation errors -->\r\n            <div *ngIf=\"username.errors?.required\" >Field is required</div>\r\n          </div>\r\n        </div>\r\n        <!-- Email -->\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\"\r\n                 id=\"password\"\r\n                 class=\"form-control\"\r\n                 name=\"password\"\r\n                 placeholder=\"password\"\r\n                 [(ngModel)]=\"model.password\"\r\n                 #password=\"ngModel\"\r\n                 [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\"\r\n                 required=\"required\"/>\r\n          <!-- input validation group -->\r\n          <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-input\">\r\n            <!-- individual validation errors -->\r\n            <div *ngIf=\"password.errors?.required\">Field is required</div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <button type=\"submit\" class=\"bigbutton\">\r\n          <span> Sign In</span>\r\n        </button>\r\n        <button class=\"bigbutton\" routerLink=\"/register\"><span>Register?</span></button>\r\n      </form>\r\n    </div>\r\n    <div class=\"offset-3\"></div>\r\n  </div>\r\n</div>\r\n</div>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n<br><br>\r\n<h1 align=\"center\">The Hungry Campus | Menu</h1>\r\n  <br><br>\r\n<!--<div class=\"container-fluid\">\r\n  <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && getTotal()\" novalidate class=\"feedback-form\">\r\n    <table align=\"center\">\r\n      <tr>\r\n        <td *ngFor=\"let m of model\">\r\n          <div class=\"card\" style=\"width: 18rem;\">\r\n            <img class=\"card-img-top zoom\" src=\"{{m.url}}\" alt=\"Card image cap\" style=\"height: 190px\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\" style=\"color: black\">{{m.item}}</h5>\r\n              <p class=\"card-text\">Price : Rs.{{m.price}}</p>\r\n              <p> Quantity Available : {{m.quantity}}</p>\r\n            </div>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        &lt;!&ndash;<ng-container *ngFor=\"let vale of values; let index=index;\">\r\n        <td>\r\n          <input class=\"input-group-text input-align\" type=\"number\" name=\"name+{{index}}\" min=\"0\" max=\"{{model[index].quantity}}\" value=\"{{values[index].quantity}}\" [(ngModel)]=\"values[index].quantity\">\r\n        </td>\r\n        </ng-container>&ndash;&gt;\r\n        <td>\r\n        <input class=\"input-group-text input-align\" type=\"number\" id=\"quantity1\" name=\"quantity1\" min=\"0\" max=\"{{model[0].quantity}}\" [(ngModel)]=\"modalCart.quantity1\">\r\n      </td>\r\n        <td>\r\n          <input class=\"input-group-text input-align\" type=\"number\" id=\"quantity2\" name=\"quantity2\" min=\"0\" max=\"{{model[1].quantity}}\" [(ngModel)]=\"modalCart.quantity2\">\r\n        </td>\r\n        <td>\r\n          <input class=\"input-group-text input-align\" type=\"number\" id=\"quantity3\" name=\"quantity3\" min=\"0\" max=\"{{model[2].quantity}}\" [(ngModel)]=\"modalCart.quantity3\">\r\n        </td>\r\n      </tr>\r\n    </table>\r\n    <br><br>\r\n    <div class=\"total\" style=\"text-align: center; font-size: large\">\r\n      Cart Total : {{total}}\r\n    </div>\r\n    <table align=\"center\">\r\n      <tr>\r\n        <td>\r\n          <input type=\"submit\" class=\"bigbutton\" value=\"Add To Cart\">\r\n        </td>\r\n        <td>\r\n          <button routerLink=\"/checkout\" class=\"bigbutton\"><span>Buy</span></button>\r\n        </td>\r\n        <td>\r\n          <button routerLink=\"/home\" type=\"button\" class=\"bigbutton\" (click)=\"clearLocal()\"><span>Log Out</span></button>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n\r\n  </form>\r\n</div>\r\n\r\n</div>-->\r\n\r\n<!--************************************************-->\r\n<!--************************************************-->\r\n<!--************************************************-->\r\n<!--************************************************-->\r\n\r\n<form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && getTotal()\" novalidate class=\"feedback-form\">\r\n<div class=\"container-fluid\" style=\"margin:auto; width: 75%;\">\r\n  <div class=\"row\">\r\n    <div class=\"card-deck\" *ngFor=\"let m of model; let index=index\" style=\"padding-right: 55px ; padding-bottom:30px\">\r\n      <div class=\"card\" style=\"width: 18rem; color: rgb(0, 0, 0) \">\r\n       \r\n        <div class=\"card-block\" >\r\n          <img class=\"card-img-top zoom\" src=\"{{m.url}}\" alt=\"{{m.item}}\"  style=\"height: 190px;border-radius:40%; \">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\" style=\"color: rgb(0, 0, 0)\">{{m.item}}</h5>\r\n            <p class=\"card-text\">Price : Rs.{{m.price}}</p>\r\n            <p> Quantity Available : {{m.quantity}}</p>\r\n            <input class=\"input-group-text input-align\" type=\"number\" name=\"name+{{index}}\" min=\"0\" max=\"{{model[index].quantity}}\" value=\"{{values[index].quantity}}\" [(ngModel)]=\"values[index].quantity\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<br><br>\r\n<div class=\"total\" style=\"text-align: center; font-size: large\">\r\n  Cart Total : {{total}}\r\n</div>\r\n<table align=\"center\">\r\n  <tr>\r\n    <td>\r\n      <input type=\"submit\" class=\"bigbutton\" value=\"Add To Cart\">\r\n    </td>\r\n    <td>\r\n      <button routerLink=\"/success\" class=\"bigbutton\"><span>Buy</span></button>\r\n    </td>\r\n    <td>\r\n      <button routerLink=\"/home\" type=\"button\" class=\"bigbutton\" (click)=\"clearLocal()\"><span>Log Out</span></button>\r\n    </td>\r\n  </tr>\r\n</table>\r\n\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/merchant-menu/merchant-menu.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/merchant-menu/merchant-menu.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n  <br><br>\r\n  <h1 align=\"center\">SpringFood | Menu</h1>\r\n  <br><br>\r\n\r\n<!--\r\n  <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && getTotal()\" novalidate class=\"feedback-form\">\r\n    <table align=\"center\">\r\n      <tr>\r\n        <td *ngFor=\"let m of model\">\r\n          <div class=\"card\" style=\"width: 18rem;\">\r\n            <img class=\"card-img-top zoom\" src=\"{{m.url}}\" alt=\"Card image cap\" style=\"height: 190px\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\" style=\"color: black\">{{m.item}}</h5>\r\n              <p class=\"card-text\">Price : Rs.{{m.price}}</p>\r\n              <p> Quantity Available : {{m.quantity}}</p>\r\n            </div>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          <input class=\"input-group-text input-align\" type=\"number\" id=\"quantity1\" name=\"quantity1\" min=\"0\" max=\"{{model[0].quantity}}\" [(ngModel)]=\"modalCart.quantity1\">\r\n        </td>\r\n        <td>\r\n          <input class=\"input-group-text input-align\" type=\"number\" id=\"quantity2\" name=\"quantity2\" min=\"0\" max=\"{{model[1].quantity}}\" [(ngModel)]=\"modalCart.quantity2\">\r\n        </td>\r\n        <td>\r\n          <input class=\"input-group-text input-align\" type=\"number\" id=\"quantity3\" name=\"quantity3\" min=\"0\" max=\"{{model[2].quantity}}\" [(ngModel)]=\"modalCart.quantity3\">\r\n        </td>\r\n      </tr>\r\n    </table>\r\n    <br><br>\r\n    <table align=\"center\">\r\n      <tr>\r\n        <td>\r\n          <button class=\"bigbutton\" routerLink=\"/addItem\"><span>Add Item</span></button>\r\n        </td>\r\n        <td>\r\n          <button type=\"submit\" class=\"bigbutton\"><span>Update Quantity</span></button>\r\n        </td>\r\n        <td>\r\n          <button routerLink=\"/home\" type=\"button\" class=\"bigbutton\" (click)=\"clearLocal()\"><span>Log Out</span></button>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </form>\r\n</div>\r\n-->\r\n\r\n\r\n<form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && getTotal()\" novalidate class=\"feedback-form\">\r\n  <div class=\"container-fluid\" style=\"margin: 0 auto; width: 75%;\">\r\n    <div class=\"row\">\r\n      <div class=\"card-deck\" *ngFor=\"let m of model; let index=index\" style=\"padding-right: 3px\">\r\n        <div class=\"card\" style=\"width: 18rem;\">\r\n          <!--<img class=\"card-img-top zoom\" src=\"{{m.url}}\" alt=\"{{m.item}}\"  style=\"height: 190px\">-->\r\n          <img class=\"card-img-top zoom\" [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(m.url)\" style=\"height: 190px\"/>\r\n          <div class=\"card-block\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\" style=\"color: black\">{{m.item}}</h5>\r\n              <p class=\"card-text\">Price : Rs.{{m.price}}</p>\r\n              <p> Quantity Available : {{m.quantity}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <input class=\"input-group-text input-align\" type=\"number\" name=\"name+{{index}}\" min=\"0\" max=\"{{model[index].quantity}}\" value=\"{{values[index].quantity}}\" [(ngModel)]=\"values[index].quantity\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br><br>\r\n  <div class=\"container\" align=\"center\">\r\n    <button class=\"bigbutton\" routerLink=\"/addItem\"><span>Add Item</span></button>\r\n    <button type=\"submit\" class=\"bigbutton\"><span>Update Quantity</span></button>\r\n    <button routerLink=\"/home\" type=\"button\" class=\"bigbutton\" (click)=\"clearLocal()\"><span>Log Out</span></button>\r\n  </div>\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/merchant-welcome/merchant-welcome.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/merchant-welcome/merchant-welcome.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n  <br><br><br>\r\n  <h1 align=\"center\">SpringFood | HOME</h1>\r\n  <br><br>\r\n</div>\r\n<div class=\"card align-contents\" align=\"center\">\r\n  <p><img class=\"card-img-top\" style=\"padding: 0 15px; float: left;\" src=\"../../assets/images/merchant.png\" alt=\"Card image cap\"><font style=\"float: left\">Welcome, {{modelMerchant.firstname}}<br> Account Type : Merchant</font></p>\r\n  <div class=\"table-responsive panel\">\r\n    <table class=\"table\">\r\n      <tbody>\r\n      <tr>\r\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-user\"></i> First Name</td>\r\n        <td>{{modelMerchant.firstname}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-user-circle\"></i> Last Name</td>\r\n        <td>{{modelMerchant.lastname}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-mobile\"></i> Mobile Number</td>\r\n        <td>{{modelMerchant.phone}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-envelope\"></i> E-Mail ID</td>\r\n        <td>{{modelMerchant.email}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"float: right\"><button class=\"bigbutton\" routerLink=\"/home\" (click)=\"clearLocal()\"><span>Log Out</span></button></td>\r\n        <td><button class=\"bigbutton\" routerLink=\"/merchantMenu\"><span>Alter Menu</span></button></td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container body\">\r\n  <br><br><br><br>\r\n  <H1 align=\"center\"> Register to access The Hungry Campus</H1>\r\n  <br><br><br>\r\n\r\n  <div class=\"container\" align=\"center\">\r\n    <div class=\"row\">\r\n      <div class=\"offset-3\"></div>\r\n      <div class=\"col-md-6\">\r\n        <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"emailValidation&&phoneValidation&&passwordValidation&&f.form.valid\" novalidate class=\"feedback-form\">\r\n          <div class=\"container\" style=\"height: 35px;\">\r\n          <div *ngIf=\"present\" class=\"alert alert-danger alert-box\" align=\"center\" style=\"width: 75%; margin: auto;\">\r\n            <strong>UserName Already Taken!</strong>\r\n          </div>\r\n          <div *ngIf=\"present==false\" class=\"alert alert-success alert-box\" align=\"center\" style=\"width: 75%; margin: auto;\">\r\n            <strong>UserName Available!</strong>\r\n          </div>\r\n          </div>\r\n          <!-- UserName -->\r\n          <table align=\"center\">\r\n          <div class=\"form-group\">\r\n              <tr>\r\n                <td style=\"text-align: center\"> <label for=\"username\">Username</label></td>\r\n                <td><input type=\"text\"\r\n                           id=\"username\"\r\n                           class=\"form-control\"\r\n                           name=\"username\"\r\n                           placeholder=\"Your Username\"\r\n                           [(ngModel)]=\"model.username\"\r\n                           #username=\"ngModel\"\r\n                           [ngClass]=\"{ 'is-invalid': f.submitted && username.invalid }\"\r\n                           required=\"required\"/></td>\r\n                <td>\r\n                  <div class=\"container\" align=\"center\">\r\n                    <a (click)=\"usernamePresent()\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Click to check availability\"><img src=\"../../assets/images/checkAvailability.png\" style=\"height: 25px;width: 25px\"></a>\r\n                  </div>\r\n                </td>\r\n\r\n              </tr>\r\n          </div>\r\n          <!-- Password -->\r\n          <div class=\"form-group\">\r\n              <tr>\r\n                <td><label for=\"password\">Password</label></td>\r\n                <td><input (keyup)=\"passwordStrength()\" type=\"password\"\r\n                           id=\"password\"\r\n                           class=\"form-control\"\r\n                           name=\"password\"\r\n                           placeholder=\"Your Password\"\r\n                           [(ngModel)]=\"model.password\"\r\n                           #password=\"ngModel\"\r\n                           minlength=\"8\"\r\n                           maxlength=\"16\"\r\n                           [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\"\r\n                           required=\"required\"/></td>\r\n                <td style=\"width: 58px; height: 35px; vertical-align: bottom\" align=\"center\"><a *ngIf=\"!passwordValidation\" class=\"password\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Your Password should contain : &#013; 1 special character &#013; 1 Upper Case character &#013; 1 Numeric character &#013; Minumum Length = 8 &#013; Maximum length = 16\"><img src=\"../../assets/images/key.png\" style=\"width: 30px; height: 30px\"></a> </td>\r\n              </tr>\r\n          </div>\r\n\r\n          <!-- First Name -->\r\n          <div class=\"form-group\">\r\n\r\n              <tr>\r\n                <td><label for=\"firstname\">First name</label></td>\r\n                <td><input type=\"text\"\r\n                           id=\"firstname\"\r\n                           class=\"form-control\"\r\n                           name=\"firstname\"\r\n                           placeholder=\"Your Firstname\"\r\n                           [(ngModel)]=\"model.firstname\"\r\n                           #firstname=\"ngModel\"\r\n                           [ngClass]=\"{ 'is-invalid': f.submitted && firstname.invalid }\"\r\n                           required=\"required\"/></td>\r\n                <td></td>\r\n              </tr>\r\n          </div>\r\n\r\n          <!-- Last Name -->\r\n          <div class=\"form-group\">\r\n              <tr>\r\n                <td><label for=\"lastname\">Last Name</label></td>\r\n                <td><input type=\"text\"\r\n                           id=\"lastname\"\r\n                           class=\"form-control\"\r\n                           name=\"lastname\"\r\n                           placeholder=\"Your Lastname\"\r\n                           [(ngModel)]=\"model.lastname\"\r\n                           #lastname=\"ngModel\"\r\n                           [ngClass]=\"{ 'is-invalid': f.submitted && lastname.invalid }\"\r\n                           required=\"required\"/></td>\r\n                <td></td>\r\n              </tr>\r\n          </div>\r\n\r\n          <!-- Email -->\r\n          <div class=\"form-group\">\r\n              <tr>\r\n                <td><label for=\"email\">Email</label></td>\r\n                <td><input (keyup)=\"checkEmail()\"\r\n                           type=\"text\"\r\n                           id=\"email\"\r\n                           class=\"form-control\"\r\n                           name=\"email\"\r\n                           placeholder=\"email\"\r\n                           [(ngModel)]=\"model.email\"\r\n                           #email=\"ngModel\"\r\n                           [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\"\r\n                           required=\"required\"/></td>\r\n                <td><a *ngIf=\"!emailValidation\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Enter a valid Email Address\">Not a valid email</a></td>\r\n              </tr>\r\n          </div>\r\n\r\n          <!-- Address -->\r\n          <div class=\"form-group\">\r\n              <tr>\r\n                <td><label for=\"address\">Address</label></td>\r\n                <td><input type=\"text\"\r\n                           id=\"address\"\r\n                           class=\"form-control\"\r\n                           name=\"address\"\r\n                           placeholder=\"address\"\r\n                           [(ngModel)]=\"model.address\"\r\n                           #address=\"ngModel\"\r\n                           [ngClass]=\"{ 'is-invalid': f.submitted && address.invalid }\"\r\n                           required=\"required\"/></td>\r\n                <td></td>\r\n              </tr>\r\n          </div>\r\n\r\n          <!-- Phone -->\r\n          <div class=\"form-group\">\r\n              <tr>\r\n                <td><label for=\"phone\">Phone</label></td>\r\n                <td><input (keyup)=\"checkPhone()\"\r\n                           type=\"text\"\r\n                           id=\"phone\"\r\n                           class=\"form-control\"\r\n                           name=\"phone\"\r\n                           placeholder=\"phone\"\r\n                           [(ngModel)]=\"model.phone\"\r\n                           #phone=\"ngModel\"\r\n                           [ngClass]=\"{ 'is-invalid': f.submitted && phone.invalid }\"\r\n                           maxlength=\"10\"\r\n                           minlength=\"10\"\r\n                           required=\"required\"/></td>\r\n                <td>\r\n                  <a *ngIf=\"!phoneValidation\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Enter a valid Phone Number\">Invalid Phone Number</a>\r\n                </td>\r\n              </tr>\r\n          </div>\r\n            <div class=\"form-group\">\r\n              <tr>\r\n                <td>\r\n                  <label >Account</label>\r\n                </td>\r\n                <td><select class=\"form-control\" [(ngModel)]=\"options\"\r\n                name=\"options\" id=\"options\">\r\n                  <option>User</option>\r\n                  <option>Merchant</option>\r\n                </select></td>\r\n              </tr>\r\n            </div>\r\n          </table>\r\n\r\n          <table align=\"center\" style=\"padding-right:10%\">\r\n            <tr>\r\n              <td><button routerLink=\"/login\" type=\"submit\" class=\"bigbutton\">\r\n                <span> Register</span></button>\r\n              </td>\r\n              <td><button routerLink=\"/home\" class=\"bigbutton\"><span>Home</span></button> </td>\r\n            </tr>\r\n          </table>\r\n\r\n        </form>\r\n      </div>\r\n      <div class=\"offset-3\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- START CAPTCHA -->\r\n<!--<form onsubmit=\"return checkform(this);\" class=\"formmargin\">\r\n  <div class=\"capbox\">\r\n    &lt;!&ndash;<div id=\"CaptchaDiv\">73493</div>&ndash;&gt;\r\n    <div id=\"CaptchaDiv\" class=\"disable-text-selection\"><span (copy)=\"$event.preventDefault()\" (cut)=\"$event.preventDefault()\" (paste)=\"$event.preventDefault()\">12345</span></div>\r\n    <div class=\"capbox-inner\">\r\n      Type the above number:<br>\r\n      <input type=\"hidden\" id=\"txtCaptcha\"  placeholder=\"12345\">\r\n      <input type=\"text\" name=\"CaptchaInput\" id=\"CaptchaInput\" ondrop=\"return false;\" onpaste=\"return false;\"size=\"15\"><br>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <br>\r\n  <input type=\"submit\" value=\"Test Captcha\"><br>\r\n</form>-->\r\n<!-- END CAPTCHA -->\r\n<!--(beforecopy)=\"$event.preventDefault()\" (cut)=\"$event.preventDefault()\" (paste)=\"$event.preventDefault()\" ng-paste=\"$event.preventDefault()\"-->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/success/success.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/success/success.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n  <br><br><br><br>\r\n  <h1 align=\"center\">The Hungry Campus | Order Confirmation</h1>\r\n  <!-- <div class=\"alert alert-warning\" align=\"center\" style=\"width: 100%\">\r\n    <strong>Payment Successful.</strong>\r\n  </div> -->\r\n  <br><br><br>\r\n  <h1 align=\"center\">{{modelUser.firstname}}, your order is on it's way.</h1>\r\n  <h3 align=\"center\"> OrderId: {{modelUser.phone}}</h3>\r\n  <!--<div align=\"center\"><progress value=\"22\" max=\"100\" style=\"width: 70%\"> Progress</progress> </div>-->\r\n\r\n<div align=\"center\" >\r\n  <div class=\"progress\" style=\"height: 50px;\">\r\n    <div class=\"progress-bar bg-success\" style=\"width:20%; color: black;font-size: medium;\">\r\n      Payment Status : Cash On Delivery\r\n    </div>\r\n    <div class=\"progress-bar bg-warning\" style=\"width:40%;color: black;font-size: medium;\">\r\n      Order Status : Accepted\r\n    </div>\r\n    <div class=\"progress-bar bg-danger\" style=\"width:40%;color: black;font-size: medium;\">\r\n      Delivery Time : 30 mins\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n  <br><br><br><br>\r\n  <table align=\"center\">\r\n    <tr>\r\n      <td><button class=\"bigbutton\" routerLink=\"/contactUs\" style=\"width: 140px\"><span>Contact Us</span></button> </td>\r\n      <td><button class=\"bigbutton\" routerLink=\"/menu\"><span>Menu</span></button> </td>\r\n      <td><button class=\"bigbutton\" routerLink=\"/home\" (click)=\"clearLocal()\"><span>Log Out</span></button> </td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"body\">\r\n  <br><br><br>\r\n  <h1 align=\"center\">XWIGGY | HOME</h1>\r\n  <br><br>\r\n\r\n  <h1>Welcome, {{modelUser.firstname}}</h1>\r\n  <div class=\"alert alert-warning\" align=\"center\">\r\n    <strong>User Details</strong>\r\n  </div>\r\n\r\n<table cellpadding=\"30%\" align=\"center\" >\r\n  <tr>\r\n    <td>First Name</td>\r\n    <td>{{modelUser.firstname}}</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Last Name</td>\r\n    <td>{{modelUser.lastname}}</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Mobile Number</td>\r\n    <td>{{modelUser.phone}}</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Email Id</td>\r\n    <td>{{modelUser.email}}</td>\r\n  </tr>\r\n  <tr>\r\n  </tr>\r\n  <tr>\r\n  </tr>\r\n  <tr>\r\n    <td><button class=\"bigbutton\" routerLink=\"/home\" (click)=\"clearLocal()\"><span>Log Out</span></button></td>\r\n    <td><button class=\"bigbutton\" routerLink=\"/menu\"><span>Menu</span></button></td>\r\n\r\n    <td></td>\r\n  </tr>\r\n  <tr>\r\n    <td></td>\r\n    <td> </td>\r\n\r\n  </tr>\r\n</table>\r\n</div>-->\r\n<div class=\"body\">\r\n<br><br><br>\r\n<h1 align=\"center\">The Hungry Campus</h1>\r\n<br><br>\r\n</div>\r\n<div class=\"card align-contents\">\r\n  <p><img class=\"card-img-top\" style=\"padding: 0 0%; float: center;\"  ></p>\r\n  <div class=\"table-responsive panel\">\r\n    <table class=\"table\">\r\n      <tbody>\r\n\r\n      <tr>\r\n        <td class=\"text-success\" align=\"right\"> First Name</td>\r\n        <td>{{modelUser.firstname}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"text-success\" align=\"right\"> Last Name</td>\r\n        <td>{{modelUser.lastname}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"text-success\" align=\"right\"> Account Type</td>\r\n        <td>User</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"text-success\" align=\"right\"> Mobile Number</td>\r\n        <td>{{modelUser.phone}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"text-success\" align=\"right\"> E-Mail ID</td>\r\n        <td>{{modelUser.email}}</td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\" align=\"center\">\r\n<button class=\"bigbutton\" routerLink=\"/home\" (click)=\"clearLocal()\"><span>Log Out</span></button>\r\n<button class=\"bigbutton\" routerLink=\"/menu\"><span>Menu</span></button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-item/add-item.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-item/add-item.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\r\n  text-align: center;\r\n}\r\n\r\n\r\n.body {\r\n  background: #393939;\r\n  color: white;\r\n  font: 14px Helvetica, sans-serif;\r\n}\r\n\r\n\r\np{\r\n  margin-left: 23%;\r\n}\r\n\r\n\r\ntable{\r\n  margin: auto;\r\n}\r\n\r\n\r\nimg{\r\n  width: 20%;\r\n  align-self: center;\r\n}\r\n\r\n\r\n.align-contents{\r\n  background-color: #393939;\r\n  width: 100%;\r\n}\r\n\r\n\r\ntd{\r\n  border-top: 0px;\r\n  color: #FFFFFF;\r\n}\r\n\r\n\r\nfont{\r\n  color: #FFFFFF;\r\n  font-size: 4vw;\r\n}\r\n\r\n\r\n.welcome{\r\n  color: white;\r\n}\r\n\r\n\r\nlabel {\r\n  font: bold 20px Helvetica, sans-serif;\r\n  display: block;\r\n  float: left;\r\n  text-align: right;\r\n  padding: 5px 10px 0 0;\r\n  width: 140px;\r\n}\r\n\r\n\r\n.align-submit{\r\n  display: block;\r\n}\r\n\r\n\r\n.bigbutton {\r\n  border-radius: 4px;\r\n  background-color: #f4511e;\r\n  border: none;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  padding: 20px;\r\n  width: 25%;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n  margin: 5px;\r\n}\r\n\r\n\r\n.bigbutton span {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n  transition: 0.5s;\r\n}\r\n\r\n\r\n.bigbutton span:after {\r\n  content: '\\00bb';\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: 0;\r\n  right: -20px;\r\n  transition: 0.5s;\r\n}\r\n\r\n\r\n.bigbutton:hover span {\r\n  padding-right: 25px;\r\n}\r\n\r\n\r\n.bigbutton:hover span:after {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWl0ZW0vYWRkLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBR0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdDQUFnQztBQUNsQzs7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7OztBQUdBO0VBQ0UsY0FBYztBQUNoQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsV0FBVztBQUNiOzs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixNQUFNO0VBQ04sWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7QUFDViIsImZpbGUiOiJzcmMvYXBwL2FkZC1pdGVtL2FkZC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uYm9keSB7XHJcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udDogMTRweCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbnB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIzJTtcclxufVxyXG5cclxudGFibGV7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbGlnbi1jb250ZW50c3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzOTM5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxudGR7XHJcbiAgYm9yZGVyLXRvcDogMHB4O1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbmZvbnR7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgZm9udC1zaXplOiA0dnc7XHJcbn1cclxuLndlbGNvbWV7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZm9udDogYm9sZCAyMHB4IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nOiA1cHggMTBweCAwIDA7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG59XHJcblxyXG5cclxuLmFsaWduLXN1Ym1pdHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmJpZ2J1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDUxMWU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB3aWR0aDogMjUlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLmJpZ2J1dHRvbiBzcGFuIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uYmlnYnV0dG9uIHNwYW46YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICdcXDAwYmInO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogLTIwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmJpZ2J1dHRvbjpob3ZlciBzcGFuIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uYmlnYnV0dG9uOmhvdmVyIHNwYW46YWZ0ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/add-item/add-item.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-item/add-item.component.ts ***!
  \************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AddItemComponent = /** @class */ (function () {
    function AddItemComponent(http, router) {
        this.http = http;
        this.router = router;
        this.newFoodItems = {
            id: '',
            name: '',
            price: null,
            quantityAvailable: null,
            fileDataF: null
        };
        this.url = null;
        this.selectedFile = null;
        this.present = null;
    }
    AddItemComponent.prototype.ngOnInit = function () {
        if (sessionStorage.length == 0)
            this.router.navigate(['welcome']);
    };
    AddItemComponent.prototype.onSubmit = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('file', this.selectedFile);
        formData.append('newFoodItem', JSON.stringify(this.newFoodItems));
        console.log(formData.get('file'));
        console.log(formData.get('newFoodItem'));
        if (formData.get('file') == null || formData.get('file') == undefined) {
            console.log(formData.get('file'));
            this.url = "http://localhost:8080/addNewItem";
        }
        else {
            this.url = "http://localhost:8080/addNewItemUrl";
        }
        this.http.post(this.url, formData)
            .subscribe(function (res) {
            console.log(_this.newFoodItems);
            alert("Item Added Successfully!");
        }, function (err) {
            alert("Failed to add item. Please Try after sometime!");
        });
    };
    AddItemComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    AddItemComponent.prototype.checkAvailability = function () {
        var _this = this;
        this.http.post("http://localhost:8080/checkItemId", this.newFoodItems.id).subscribe(function (res) {
            _this.present = res;
        }, function (err) {
            alert("Error. Try After Sometime");
        });
    };
    AddItemComponent.prototype.clearLocal = function () {
        sessionStorage.clear();
    };
    AddItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-item',
            template: __webpack_require__(/*! raw-loader!./add-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-item/add-item.component.html"),
            styles: [__webpack_require__(/*! ./add-item.component.css */ "./src/app/add-item/add-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddItemComponent);
    return AddItemComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SpringFood-app';
    }
    AppComponent.modelUser = {
        username: '',
        password: '',
        email: '',
        phone: 0,
        firstname: '',
        lastname: '',
        address: '',
        merchant: null
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./success/success.component */ "./src/app/success/success.component.ts");
/* harmony import */ var _merchant_welcome_merchant_welcome_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./merchant-welcome/merchant-welcome.component */ "./src/app/merchant-welcome/merchant-welcome.component.ts");
/* harmony import */ var _merchant_menu_merchant_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./merchant-menu/merchant-menu.component */ "./src/app/merchant-menu/merchant-menu.component.ts");
/* harmony import */ var _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-item/add-item.component */ "./src/app/add-item/add-item.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");



















var appRoutes = [
    { path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'welcome',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__["WelcomeComponent"] },
    { path: 'menu',
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"] },
    { path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'checkout',
        component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__["CheckoutComponent"] },
    { path: 'success',
        component: _success_success_component__WEBPACK_IMPORTED_MODULE_14__["SuccessComponent"] },
    { path: 'merchantWelcome',
        component: _merchant_welcome_merchant_welcome_component__WEBPACK_IMPORTED_MODULE_15__["MerchantWelcomeComponent"] },
    { path: 'merchantMenu',
        component: _merchant_menu_merchant_menu_component__WEBPACK_IMPORTED_MODULE_16__["MerchantMenuComponent"] },
    { path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'addItem',
        component: _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_17__["AddItemComponent"] },
    { path: 'contactUs',
        component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_18__["ContactUsComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__["WelcomeComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__["CheckoutComponent"],
                _success_success_component__WEBPACK_IMPORTED_MODULE_14__["SuccessComponent"],
                _merchant_welcome_merchant_welcome_component__WEBPACK_IMPORTED_MODULE_15__["MerchantWelcomeComponent"],
                _merchant_menu_merchant_menu_component__WEBPACK_IMPORTED_MODULE_16__["MerchantMenuComponent"],
                _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_17__["AddItemComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_18__["ContactUsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes, { useHash: true }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\r\n  height: -webkit-fill-available;\r\n  background: #E1ECC8;\r\n  color: #000000;\r\n  font: 14px Helvetica, sans-serif;\r\n}\r\n\r\nlabel {\r\n  font: bold 20px Helvetica, sans-serif;\r\n  display: block;\r\n  float: left;\r\n  text-align: right;\r\n  padding: 5px 10px 0 0;\r\n  width: 140px;\r\n}\r\n\r\nform div {\r\n  overflow: hidden;\r\n  margin: 0 0 5px 0;\r\n}\r\n\r\n.bigbutton {\r\n  border-radius: 4px;\r\n  background-color: #f4511e;\r\n  border: none;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  padding: 20px;\r\n  width: 125px;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n  margin: 5px;\r\n}\r\n\r\n.bigbutton span {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n  transition: 0.5s;\r\n}\r\n\r\n.bigbutton span:after {\r\n  content: '\\00bb';\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: 0;\r\n  right: -20px;\r\n  transition: 0.5s;\r\n}\r\n\r\n.bigbutton:hover span {\r\n  padding-right: 25px;\r\n}\r\n\r\n.bigbutton:hover span:after {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\ninput[type=text], select {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n}\r\n\r\ninput[type=number], select {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n}\r\n\r\n.question{\r\n  width: auto;\r\n  height: 20px;\r\n}\r\n\r\n.blue{\r\n  border: 2px solid blue;\r\n  border-radius: 4px;\r\n}\r\n\r\n.red{\r\n   border: 2px solid red;\r\n   border-radius: 4px;\r\n }\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixNQUFNO0VBQ04sWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUNBO0dBQ0cscUJBQXFCO0dBQ3JCLGtCQUFrQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XHJcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gIGJhY2tncm91bmQ6ICNFMUVDQzg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udDogMTRweCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBmb250OiBib2xkIDIwcHggSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDAgMDtcclxuICB3aWR0aDogMTQwcHg7XHJcbn1cclxuXHJcbmZvcm0gZGl2IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMCAwIDVweCAwO1xyXG59XHJcblxyXG5cclxuLmJpZ2J1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDUxMWU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB3aWR0aDogMTI1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uYmlnYnV0dG9uIHNwYW4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5iaWdidXR0b24gc3BhbjphZnRlciB7XHJcbiAgY29udGVudDogJ1xcMDBiYic7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAtMjBweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uYmlnYnV0dG9uOmhvdmVyIHNwYW4ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5iaWdidXR0b246aG92ZXIgc3BhbjphZnRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9bnVtYmVyXSwgc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5xdWVzdGlvbntcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5ibHVle1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5yZWR7XHJcbiAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gfVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(http, router) {
        this.http = http;
        this.router = router;
        this.user = _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].modelUser;
        this.cardNumberVal = null;
        this.monthVal = null;
        this.yearVal = null;
        this.cvvVal = null;
        this.nameOnCardVal = null;
        this.message = '';
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem("userData") == null) {
            this.router.navigate(['login']);
        }
        this.total = sessionStorage.getItem('total');
    };
    CheckoutComponent.prototype.validCard = function () {
        if (this.cardNumber.length == 0) {
            this.cardNumberVal = null;
        }
        if (this.cardNumber.length > 0 && this.cardNumber.length < 16) {
            this.cardNumberVal = false;
        }
        else if (this.cardNumber.length == 16) {
            var matcher = new RegExp('^(?=.*[0-9])(?=.{16})');
            this.cardNumberVal = matcher.test(this.cardNumber);
        }
    };
    CheckoutComponent.prototype.validMonth = function () {
        this.monthVal = this.month >= 1 && this.month <= 12;
        console.log(this.monthVal);
    };
    CheckoutComponent.prototype.validCvv = function () {
        this.cvvVal = this.cvv >= 100 && this.cvv <= 999;
    };
    CheckoutComponent.prototype.validName = function () {
        this.nameOnCardVal = this.nameOnCard.length >= 4 && this.nameOnCard.length <= 10;
    };
    CheckoutComponent.prototype.changeDB = function () {
        if (this.cardNumberVal && this.monthVal && this.yearVal && this.cvvVal && this.nameOnCardVal) {
            var url = "http://localhost:8080/changeDB";
            this.http.get(url).subscribe(function (res) {
                console.log("DB Updated");
            }, function (err) {
                alert('Failed to update DB');
            });
        }
        else {
            if (!this.cardNumberVal)
                this.message += "Card Number Not Valid \n";
            if (!this.monthVal)
                this.message += "Enter A Valid Month \n";
            if (!this.yearVal)
                this.message += "Enter A Valid Year\n";
            if (!this.cvvVal)
                this.message += "Enter A Valid CVV \n";
            if (!this.nameOnCardVal)
                this.message += "Enter A Valid Name";
            alert(this.message);
            this.message = '';
            this.router.navigate(['checkout']);
        }
    };
    CheckoutComponent.prototype.validYear = function () {
        this.yearVal = this.year >= 19 && this.year <= 99;
        console.log(this.yearVal);
    };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\r\n  background: #F7FFE5;\r\n  color: black;\r\n  font: 14px Helvetica, sans-serif;\r\n}\r\n\r\n\r\n.bigbutton {\r\n  border-radius: 4px;\r\n  background-color:  #ffa41b;\r\n  border: none;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  padding: 20px;\r\n  width: 150px;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n  margin: 15px;\r\n}\r\n\r\n\r\n.bigbutton span {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n  transition: 0.5s;\r\n}\r\n\r\n\r\n.bigbutton span:after {\r\n  content: '\\00bb';\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: 0;\r\n  right: -20px;\r\n  transition: 0.5s;\r\n}\r\n\r\n\r\n.bigbutton:hover span {\r\n  padding-right: 25px;\r\n}\r\n\r\n\r\n.bigbutton:hover span:after {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\n\r\nimg{\r\n  position: absolute;\r\n  margin: auto;\r\n  width: 100%;\r\n  height: 108%;\r\n  top: 0;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdDQUFnQztBQUNsQzs7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixNQUFNO0VBQ04sWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7QUFDVjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtBQUNSIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogI0Y3RkZFNTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udDogMTRweCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG4uYmlnYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogICNmZmE0MWI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuLmJpZ2J1dHRvbiBzcGFuIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uYmlnYnV0dG9uIHNwYW46YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICdcXDAwYmInO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogLTIwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmJpZ2J1dHRvbjpob3ZlciBzcGFuIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uYmlnYnV0dG9uOmhvdmVyIHNwYW46YWZ0ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbmltZ3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTA4JTtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(http, router) {
        this.http = http;
        this.router = router;
        this.modelUser = {
            username: '',
            password: '',
            email: '',
            phone: 0,
            firstname: '',
            lastname: '',
            address: '',
            merchant: null
        };
        this.modelMessage = {
            name: '',
            email: '',
            message: ''
        };
        this.gif = false;
    }
    ContactUsComponent_1 = ContactUsComponent;
    ContactUsComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('userData') == null)
            this.router.navigate(["login"]);
        var userData = JSON.parse(sessionStorage.getItem('userData'));
        console.log(userData);
        Object.assign(this.modelUser, userData);
    };
    ContactUsComponent.prototype.sendFeedback = function () {
        var _this = this;
        this.gif = true;
        this.modelMessage.name = this.modelUser.firstname + this.modelUser.lastname;
        this.modelMessage.email = this.modelUser.email;
        var url = "http://localhost:8080/contact";
        this.http.post(url, this.modelMessage).subscribe(function (res) {
            ContactUsComponent_1.changeLoading();
            if (res)
                alert("Message Sent Successfully");
            _this.gif = !res;
        }, function (err) {
            alert("An error has occurred while sending the message");
            _this.gif = false;
        });
    };
    ContactUsComponent.changeLoading = function () {
        setTimeout(function () {
        }, 4000);
    };
    ContactUsComponent.prototype.clearLocal = function () {
        sessionStorage.clear();
    };
    var ContactUsComponent_1;
    ContactUsComponent = ContactUsComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\r\n  background-color: #E1ECC8;\r\n  background-repeat:no-repeat;\r\n  width: 100%;\r\n  color: #000000;\r\n  font: 40px Helvetica, sans-serif;\r\n  \r\n\r\n}\r\nh1{\r\n  font-weight: 900;\r\n}\r\n.my-element {\r\n \r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.bigbutton {\r\n  border-radius: 4px;\r\n  background-color: #ffa41b;\r\n  border: none;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  font-size: 25px;\r\n  padding: 20px;\r\n  width: 240px;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n  margin: 50px;\r\n}\r\n.bigbutton span {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n  transition: 0.5s;\r\n}\r\n.bigbutton span:after {\r\n  content: '\\00bb';\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: 0;\r\n  right: -20px;\r\n  transition: 0.5s;\r\n}\r\n.bigbutton:hover span {\r\n  padding-right: 25px;\r\n}\r\n.bigbutton:hover span:after {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0NBQWdDOzs7QUFHbEM7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsTUFBTTtFQUNOLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7QUFDViIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMUVDQzg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQ6IDQwcHggSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIFxyXG5cclxufVxyXG5oMXtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcbi5teS1lbGVtZW50IHtcclxuIFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuXHJcbi5iaWdidXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNDFiO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDUwcHg7XHJcbn1cclxuXHJcbi5iaWdidXR0b24gc3BhbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmJpZ2J1dHRvbiBzcGFuOmFmdGVyIHtcclxuICBjb250ZW50OiAnXFwwMGJiJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IC0yMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5iaWdidXR0b246aG92ZXIgc3BhbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5cclxuLmJpZ2J1dHRvbjpob3ZlciBzcGFuOmFmdGVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body{\r\n  background-color: #393939;\r\n}\r\n\r\n.loginbody {\r\n  background-size:100% 100%;\r\n  background-color: #E1ECC8;\r\n  background-repeat:no-repeat;\r\n  color: #000000;\r\n  font: 30px Helvetica, sans-serif;\r\n}\r\n\r\nh1{\r\n  font-weight: 900;\r\n}\r\n\r\nlabel {\r\n  font: bold 20px Helvetica, sans-serif;\r\n  display: block;\r\n  float: left;\r\n  padding: 20 20 20 20;\r\n}\r\n\r\nform div {\r\n  overflow: hidden;\r\n  margin: 10 0 5px 0;\r\n}\r\n\r\n.bigbutton {\r\n  border-radius: 4px;\r\n  background-color:  #ffa41b;\r\n  border: none;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  padding: 20px;\r\n  width: 150px;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n  margin: 15px;\r\n}\r\n\r\n.bigbutton span {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n  \r\n  transition: 0.5s;\r\n}\r\n\r\n.bigbutton span:after {\r\n  content: '\\00bb';\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: 0;\r\n  right: -20px;\r\n  transition: 0.5s;\r\n}\r\n\r\n.bigbutton:hover span {\r\n  padding-right: 25px;\r\n}\r\n\r\n.bigbutton:hover span:after {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsY0FBYztFQUNkLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCOztFQUVsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixNQUFNO0VBQ04sWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzOTM5O1xyXG59XHJcblxyXG4ubG9naW5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMUVDQzg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQ6IDMwcHggSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcbmgxe1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxubGFiZWwge1xyXG4gIGZvbnQ6IGJvbGQgMjBweCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogMjAgMjAgMjAgMjA7XHJcbn1cclxuXHJcbmZvcm0gZGl2IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMTAgMCA1cHggMDtcclxufVxyXG5cclxuXHJcbi5iaWdidXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2ZmYTQxYjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG59XHJcblxyXG4uYmlnYnV0dG9uIHNwYW4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5iaWdidXR0b24gc3BhbjphZnRlciB7XHJcbiAgY29udGVudDogJ1xcMDBiYic7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAtMjBweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uYmlnYnV0dG9uOmhvdmVyIHNwYW4ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5iaWdidXR0b246aG92ZXIgc3BhbjphZnRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router) {
        this.http = http;
        this.router = router;
        this.model = {
            username: '',
            password: ''
        };
        this.message = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (sessionStorage.length > 0)
            this.router.navigate(['welcome']);
    };
    LoginComponent.prototype.sendFeedback = function () {
        var _this = this;
        var url = "http://localhost:8080/login";
        var key = 'userData';
        this.http.post(url, this.model).subscribe(function (res) {
            // localStorage.setItem(key,JSON.stringify(res));
            sessionStorage.setItem(key, JSON.stringify(res));
            if (res != null && !res.merchant) {
                _this.router.navigate(['welcome']);
            }
            if (res != null && res.merchant) {
                _this.router.navigate(['merchantWelcome']);
            }
            if (res == null) {
                _this.message = "Username Or Password is Wrong";
                sessionStorage.clear();
            }
        }, function (err) {
            console.log([_this.model]);
            alert("An error has occurred while logging in");
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/menu-service.service.ts ***!
  \*****************************************/
/*! exports provided: MenuServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuServiceService", function() { return MenuServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MenuServiceService = /** @class */ (function () {
    function MenuServiceService(HttpClient) {
        this.HttpClient = HttpClient;
    }
    MenuServiceService.prototype.getItems = function () {
        var url = "http://localhost:8080/menu";
        return this.HttpClient.get(url);
    };
    MenuServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MenuServiceService);
    return MenuServiceService;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\r\n  height: -webkit-fill-available;\r\n  background: #E1ECC8;\r\n  color: #000000;\r\n  font: 14px Helvetica, sans-serif;\r\n}\r\n\r\nlabel {\r\n  font: bold 20px Helvetica, sans-serif;\r\n  display: block;\r\n  float: left;\r\n  text-align: right;\r\n  padding: 5px 10px 0 0;\r\n  width: 140px;\r\n}\r\n\r\ninput{\r\n  width: 100px;\r\n}\r\n\r\nform div {\r\n  overflow: hidden;\r\n  margin: 0 0 5px 0;\r\n}\r\n\r\n.dec {\r\n  background-position: 0 -29px;\r\n}\r\n\r\n.buttons {\r\n  padding: 10px 0 0 140px;\r\n}\r\n\r\n.card{\r\n  color: #000000;\r\n  width: 20px;\r\n}\r\n\r\n.card-block{\r\n  color:#000000;\r\n}\r\n\r\n.bigbutton {\r\n  border-radius: 4px;\r\n  background-color:  #ffa41b;\r\n  border: none;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  padding: 20px;\r\n  width: 150px;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n  margin: 15px;\r\n}\r\n\r\n.bigbutton span {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n  transition: 0.5s;\r\n}\r\n\r\n.bigbutton span:after {\r\n  content: '\\00bb';\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: 0;\r\n  right: -20px;\r\n  transition: 0.5s;\r\n}\r\n\r\n.bigbutton:hover span {\r\n  padding-right: 25px;\r\n}\r\n\r\n.bigbutton:hover span:after {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\n.zoom {\r\n  transition: -webkit-transform .2s;\r\n  transition: transform .2s;\r\n  transition: transform .2s, -webkit-transform .2s;\r\n}\r\n\r\n.zoom:hover {\r\n  -webkit-transform: scale(1.5);\r\n          transform: scale(1.5);\r\n}\r\n\r\np{\r\n  color: black;\r\n}\r\n\r\n.input-align{\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGlDQUF5QjtFQUF6Qix5QkFBeUI7RUFBekIsZ0RBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xyXG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICBiYWNrZ3JvdW5kOiAjRTFFQ0M4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQ6IDE0cHggSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZm9udDogYm9sZCAyMHB4IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nOiA1cHggMTBweCAwIDA7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG59XHJcbmlucHV0e1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5mb3JtIGRpdiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDAgMCA1cHggMDtcclxufVxyXG5cclxuLmRlYyB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjlweDtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIHBhZGRpbmc6IDEwcHggMCAwIDE0MHB4O1xyXG59XHJcbi5jYXJke1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG59XHJcbi5jYXJkLWJsb2Nre1xyXG4gIGNvbG9yOiMwMDAwMDA7XHJcbn1cclxuXHJcbi5iaWdidXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2ZmYTQxYjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG59XHJcblxyXG4uYmlnYnV0dG9uIHNwYW4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5iaWdidXR0b24gc3BhbjphZnRlciB7XHJcbiAgY29udGVudDogJ1xcMDBiYic7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAtMjBweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uYmlnYnV0dG9uOmhvdmVyIHNwYW4ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5iaWdidXR0b246aG92ZXIgc3BhbjphZnRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLnpvb20ge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7XHJcbn1cclxuXHJcbi56b29tOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbn1cclxuXHJcbnB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uaW5wdXQtYWxpZ257XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent, Quantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quantity", function() { return Quantity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu-service.service */ "./src/app/menu-service.service.ts");





var MenuComponent = /** @class */ (function () {
    function MenuComponent(http, router, menuService) {
        this.http = http;
        this.router = router;
        this.menuService = menuService;
        this.values = [];
        this.modalCart = {
            quantity1: 0,
            quantity2: 0,
            quantity3: 0,
        };
    }
    MenuComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem("userData") == null) {
            this.router.navigate(['login']);
        }
        this.getItems();
    };
    MenuComponent.prototype.clearLocal = function () {
        sessionStorage.clear();
    };
    MenuComponent.prototype.getItems = function () {
        var _this = this;
        this.menuService.getItems().subscribe(function (men) {
            _this.model = men;
            for (var i = 0; i < _this.model.length; i++) {
                _this.values.push(new Quantity());
                _this.values[i].quantity = 0;
            }
        });
    };
    MenuComponent.prototype.getTotal = function () {
        var _this = this;
        console.log(this.values);
        var url = "http://localhost:8080/cart";
        this.modalCart.quantity1 = this.values[0].quantity;
        this.modalCart.quantity2 = this.values[1].quantity;
        this.modalCart.quantity3 = this.values[2].quantity;
        this.http.post(url, this.values).subscribe(function (res) {
            // AppComponent.total=res;
            sessionStorage.setItem('total', res.toString());
            _this.total = res;
        }, function (err) {
            // alert("Please select at least 1 item");
        });
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _menu_service_service__WEBPACK_IMPORTED_MODULE_4__["MenuServiceService"]])
    ], MenuComponent);
    return MenuComponent;
}());

var Quantity = /** @class */ (function () {
    function Quantity() {
    }
    return Quantity;
}());



/***/ }),

/***/ "./src/app/merchant-menu/merchant-menu.component.css":
/*!***********************************************************!*\
  !*** ./src/app/merchant-menu/merchant-menu.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\r\n  height: -webkit-fill-available;\r\n  background: #393939;\r\n  color: white;\r\n  font: 14px Helvetica, sans-serif;\r\n}\r\n\r\nlabel {\r\n  font: bold 20px Helvetica, sans-serif;\r\n  display: block;\r\n  float: left;\r\n  text-align: right;\r\n  padding: 5px 10px 0 0;\r\n  width: 140px;\r\n}\r\n\r\ninput{\r\n  width: -webkit-fill-available;\r\n  padding: inherit;\r\n}\r\n\r\nform div {\r\n  overflow: hidden;\r\n  margin: 0 0 5px 0;\r\n}\r\n\r\n.dec {\r\n  background-position: 0 -29px;\r\n}\r\n\r\n.buttons {\r\n  padding: 20px 0 0 140px;\r\n}\r\n\r\n.bigbutton {\r\n  border-radius: 4px;\r\n  background-color: #f4511e;\r\n  border: none;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  padding: 20px;\r\n  width: 175px;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n  margin: 5px;\r\n}\r\n\r\n.bigbutton span {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n  transition: 0.5s;\r\n}\r\n\r\n.bigbutton span:after {\r\n  content: '\\00bb';\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: 0;\r\n  right: -20px;\r\n  transition: 0.5s;\r\n}\r\n\r\n.bigbutton:hover span {\r\n  padding-right: 25px;\r\n}\r\n\r\n.bigbutton:hover span:after {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\n.zoom {\r\n  transition: -webkit-transform .2s;\r\n  transition: transform .2s;\r\n  transition: transform .2s, -webkit-transform .2s;\r\n}\r\n\r\n.zoom:hover {\r\n  -webkit-transform: scale(1.5);\r\n          transform: scale(1.5);\r\n}\r\n\r\np{\r\n  color: black;\r\n}\r\n\r\n.input-align{\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVyY2hhbnQtbWVudS9tZXJjaGFudC1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGlDQUF5QjtFQUF6Qix5QkFBeUI7RUFBekIsZ0RBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21lcmNoYW50LW1lbnUvbWVyY2hhbnQtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xyXG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250OiAxNHB4IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZvbnQ6IGJvbGQgMjBweCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcGFkZGluZzogNXB4IDEwcHggMCAwO1xyXG4gIHdpZHRoOiAxNDBweDtcclxufVxyXG5pbnB1dHtcclxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICBwYWRkaW5nOiBpbmhlcml0O1xyXG59XHJcbmZvcm0gZGl2IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMCAwIDVweCAwO1xyXG59XHJcblxyXG4uZGVjIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0yOXB4O1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgcGFkZGluZzogMjBweCAwIDAgMTQwcHg7XHJcbn1cclxuXHJcbi5iaWdidXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ1MTFlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IDE3NXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLmJpZ2J1dHRvbiBzcGFuIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uYmlnYnV0dG9uIHNwYW46YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICdcXDAwYmInO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogLTIwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmJpZ2J1dHRvbjpob3ZlciBzcGFuIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uYmlnYnV0dG9uOmhvdmVyIHNwYW46YWZ0ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi56b29tIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xyXG59XHJcblxyXG4uem9vbTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG59XHJcblxyXG5we1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmlucHV0LWFsaWdue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/merchant-menu/merchant-menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/merchant-menu/merchant-menu.component.ts ***!
  \**********************************************************/
/*! exports provided: MerchantMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantMenuComponent", function() { return MerchantMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu-service.service */ "./src/app/menu-service.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");







var MerchantMenuComponent = /** @class */ (function () {
    function MerchantMenuComponent(http, router, menuService, _DomSanitizationService) {
        this.http = http;
        this.router = router;
        this.menuService = menuService;
        this._DomSanitizationService = _DomSanitizationService;
        this.modalCart = {
            quantity1: 0,
            quantity2: 0,
            quantity3: 0
        };
        this.values = [];
    }
    MerchantMenuComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem("userData") == null) {
            this.router.navigate(['login']);
        }
        this.getItems();
    };
    MerchantMenuComponent.prototype.clearLocal = function () {
        sessionStorage.clear();
    };
    MerchantMenuComponent.prototype.getItems = function () {
        var _this = this;
        this.menuService.getItems().subscribe(function (men) {
            _this.model = men;
            for (var i = 0; i < _this.model.length; i++) {
                _this.values.push(new _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["Quantity"]());
                _this.values[i].quantity = 0;
            }
        });
    };
    MerchantMenuComponent.prototype.getTotal = function () {
        var _this = this;
        var url = "http://localhost:8080/addToCart";
        this.modalCart.quantity1 = this.values[0].quantity;
        this.modalCart.quantity2 = this.values[1].quantity;
        this.modalCart.quantity3 = this.values[2].quantity;
        this.http.post(url, this.values).subscribe(function (res) {
            _this.ngOnInit();
        }, function (err) {
            alert("Error adding items to cart");
        });
    };
    MerchantMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-merchant-menu',
            template: __webpack_require__(/*! raw-loader!./merchant-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/merchant-menu/merchant-menu.component.html"),
            styles: [__webpack_require__(/*! ./merchant-menu.component.css */ "./src/app/merchant-menu/merchant-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _menu_service_service__WEBPACK_IMPORTED_MODULE_5__["MenuServiceService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
    ], MerchantMenuComponent);
    return MerchantMenuComponent;
}());



/***/ }),

/***/ "./src/app/merchant-welcome/merchant-welcome.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/merchant-welcome/merchant-welcome.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\r\n  background: #393939;\r\n  color: white;\r\n  font: 14px Helvetica, sans-serif;\r\n}\r\n\r\np{\r\n  margin-left: 23%;\r\n}\r\n\r\ntable{\r\n  margin: auto;\r\n}\r\n\r\nimg{\r\n  width: 20%;\r\n  align-self: center;\r\n}\r\n\r\n.align-contents{\r\n  background-color: #393939;\r\n  width: 100%;\r\n}\r\n\r\ntd{\r\n  border-top: 0px;\r\n  color: #FFFFFF;\r\n}\r\n\r\nfont{\r\n  color: #FFFFFF;\r\n  font-size: 4vw;\r\n}\r\n\r\n.welcome{\r\n  color: white;\r\n}\r\n\r\nlabel {\r\n  font: bold 20px Helvetica, sans-serif;\r\n  display: block;\r\n  float: left;\r\n  text-align: right;\r\n  padding: 5px 10px 0 0;\r\n  width: 140px;\r\n}\r\n\r\nform div {\r\n  overflow: hidden;\r\n  margin: 0 0 5px 0;\r\n}\r\n\r\n.bigbutton {\r\n  border-radius: 4px;\r\n  background-color: #f4511e;\r\n  border: none;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  padding: 20px;\r\n  width: 120px;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n  margin: 5px;\r\n}\r\n\r\n.bigbutton span {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n  transition: 0.5s;\r\n}\r\n\r\n.bigbutton span:after {\r\n  content: '\\00bb';\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: 0;\r\n  right: -20px;\r\n  transition: 0.5s;\r\n}\r\n\r\n.bigbutton:hover span {\r\n  padding-right: 25px;\r\n}\r\n\r\n.bigbutton:hover span:after {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVyY2hhbnQtd2VsY29tZS9tZXJjaGFudC13ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUdBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixNQUFNO0VBQ04sWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9tZXJjaGFudC13ZWxjb21lL21lcmNoYW50LXdlbGNvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250OiAxNHB4IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxucHtcclxuICBtYXJnaW4tbGVmdDogMjMlO1xyXG59XHJcblxyXG50YWJsZXtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmltZ3tcclxuICB3aWR0aDogMjAlO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmFsaWduLWNvbnRlbnRze1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTM5Mzk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG50ZHtcclxuICBib3JkZXItdG9wOiAwcHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuZm9udHtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBmb250LXNpemU6IDR2dztcclxufVxyXG4ud2VsY29tZXtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBmb250OiBib2xkIDIwcHggSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDAgMDtcclxuICB3aWR0aDogMTQwcHg7XHJcbn1cclxuXHJcbmZvcm0gZGl2IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMCAwIDVweCAwO1xyXG59XHJcblxyXG5cclxuLmJpZ2J1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDUxMWU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uYmlnYnV0dG9uIHNwYW4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5iaWdidXR0b24gc3BhbjphZnRlciB7XHJcbiAgY29udGVudDogJ1xcMDBiYic7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAtMjBweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uYmlnYnV0dG9uOmhvdmVyIHNwYW4ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5iaWdidXR0b246aG92ZXIgc3BhbjphZnRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxuICByaWdodDogMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/merchant-welcome/merchant-welcome.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/merchant-welcome/merchant-welcome.component.ts ***!
  \****************************************************************/
/*! exports provided: MerchantWelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantWelcomeComponent", function() { return MerchantWelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MerchantWelcomeComponent = /** @class */ (function () {
    function MerchantWelcomeComponent(router) {
        this.router = router;
        this.modelMerchant = {
            username: '',
            password: '',
            email: '',
            phone: 0,
            firstname: '',
            lastname: '',
            address: '',
            merchant: null
        };
    }
    MerchantWelcomeComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem("userData") == null) {
            this.router.navigate(['login']);
        }
        var userData = JSON.parse(sessionStorage.getItem('userData'));
        console.log(userData);
        Object.assign(this.modelMerchant, userData);
    };
    MerchantWelcomeComponent.prototype.clearLocal = function () {
        sessionStorage.clear();
    };
    MerchantWelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-merchant-welcome',
            template: __webpack_require__(/*! raw-loader!./merchant-welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/merchant-welcome/merchant-welcome.component.html"),
            styles: [__webpack_require__(/*! ./merchant-welcome.component.css */ "./src/app/merchant-welcome/merchant-welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MerchantWelcomeComponent);
    return MerchantWelcomeComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\r\n  background-size:100% 100%;\r\n  background-color: #E1ECC8;\r\n  background-repeat:no-repeat;\r\n  color: #000000;\r\n  font: 30px Helvetica, sans-serif;\r\n}\r\n\r\nlabel {\r\n  font: bold 20px Helvetica, sans-serif;\r\n  display: block;\r\n  text-align: center;\r\n  padding: 5px 10px 0 0;\r\n  width: 140px;\r\n}\r\n\r\nform div {\r\n  overflow: hidden;\r\n  margin: 0 0 5px 0;\r\n}\r\n\r\ntable{\r\n  border-spacing: 20px;\r\n}\r\n\r\n.bigbutton {\r\n  border-radius: 4px;\r\n  background-color:  #ffa41b;\r\n  border: none;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  padding: 20px;\r\n  width: 150px;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n  margin: 15px;\r\n}\r\n\r\n.bigbutton span {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n  transition: 0.5s;\r\n}\r\n\r\n.bigbutton span:after {\r\n  content: '\\00bb';\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: 0;\r\n  right: -20px;\r\n  transition: 0.5s;\r\n}\r\n\r\n.bigbutton:hover span {\r\n  padding-right: 25px;\r\n}\r\n\r\n.bigbutton:hover span:after {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\na:link, a:visited {\r\n  background-color: #f44336;\r\n  color: white;\r\n  padding: 14px 25px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n}\r\n\r\na:hover, a:active {\r\n  background-color: red;\r\n}\r\n\r\nselect {\r\n  width: 203px;\r\n}\r\n\r\noption {\r\n  width: 203px;\r\n}\r\n\r\n.capbox {\r\n  background-color: #92D433;\r\n  border: #B3E272 0px solid;\r\n  border-width: 0px 12px 0px 0px;\r\n  display: inline-block;\r\n  display: inline; zoom: 1; /* FOR IE7-8 */\r\n  padding: 8px 40px 8px 8px;\r\n}\r\n\r\n.capbox-inner {\r\n  font: bold 11px arial, sans-serif;\r\n  color: #000000;\r\n  background-color: #DBF3BA;\r\n  margin: 5px auto 0px auto;\r\n  padding: 3px;\r\n  border-radius: 4px;\r\n}\r\n\r\n#CaptchaDiv {\r\n  font: bold 17px verdana, arial, sans-serif;\r\n  font-style: italic;\r\n  color: #000000;\r\n  background-color: #FFFFFF;\r\n  padding: 4px;\r\n  border-radius: 4px;\r\n}\r\n\r\n#CaptchaInput { margin: 1px 0px 1px 0px; width: 135px; }\r\n\r\n.disable-text-selection {\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\nmsg-error {\r\n  color: #c65848;\r\n}\r\n\r\n.g-recaptcha.error {\r\n  border: solid 2px #c64848;\r\n  padding: .2em;\r\n  width: 19em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixNQUFNO0VBQ04sWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixlQUFlLEVBQUUsT0FBTyxFQUFFLGNBQWM7RUFDeEMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFlBQVk7RUFHWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsWUFBWTtFQUdaLGtCQUFrQjtBQUNwQjs7QUFFQSxnQkFBZ0IsdUJBQXVCLEVBQUUsWUFBWSxFQUFFOztBQUV2RDtFQUNFLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFFekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xyXG4gIGJhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UxRUNDODtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udDogMzBweCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBmb250OiBib2xkIDIwcHggSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1cHggMTBweCAwIDA7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG59XHJcblxyXG5mb3JtIGRpdiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDAgMCA1cHggMDtcclxufVxyXG5cclxudGFibGV7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5iaWdidXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2ZmYTQxYjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG59XHJcblxyXG4uYmlnYnV0dG9uIHNwYW4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5iaWdidXR0b24gc3BhbjphZnRlciB7XHJcbiAgY29udGVudDogJ1xcMDBiYic7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAtMjBweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uYmlnYnV0dG9uOmhvdmVyIHNwYW4ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5iaWdidXR0b246aG92ZXIgc3BhbjphZnRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuYTpsaW5rLCBhOnZpc2l0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuYTpob3ZlciwgYTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICB3aWR0aDogMjAzcHg7XHJcbn1cclxuXHJcbm9wdGlvbiB7XHJcbiAgd2lkdGg6IDIwM3B4O1xyXG59XHJcblxyXG4uY2FwYm94IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJENDMzO1xyXG4gIGJvcmRlcjogI0IzRTI3MiAwcHggc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHggMTJweCAwcHggMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBkaXNwbGF5OiBpbmxpbmU7IHpvb206IDE7IC8qIEZPUiBJRTctOCAqL1xyXG4gIHBhZGRpbmc6IDhweCA0MHB4IDhweCA4cHg7XHJcbn1cclxuXHJcbi5jYXBib3gtaW5uZXIge1xyXG4gIGZvbnQ6IGJvbGQgMTFweCBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREJGM0JBO1xyXG4gIG1hcmdpbjogNXB4IGF1dG8gMHB4IGF1dG87XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuI0NhcHRjaGFEaXYge1xyXG4gIGZvbnQ6IGJvbGQgMTdweCB2ZXJkYW5hLCBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4jQ2FwdGNoYUlucHV0IHsgbWFyZ2luOiAxcHggMHB4IDFweCAwcHg7IHdpZHRoOiAxMzVweDsgfVxyXG5cclxuLmRpc2FibGUtdGV4dC1zZWxlY3Rpb24ge1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxubXNnLWVycm9yIHtcclxuICBjb2xvcjogI2M2NTg0ODtcclxufVxyXG4uZy1yZWNhcHRjaGEuZXJyb3Ige1xyXG4gIGJvcmRlcjogc29saWQgMnB4ICNjNjQ4NDg7XHJcbiAgcGFkZGluZzogLjJlbTtcclxuICB3aWR0aDogMTllbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(http, router) {
        this.http = http;
        this.router = router;
        this.model = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            address: '',
            phone: null,
            merchant: null
        };
        this.options = null;
        this.present = null;
        this.phoneValidation = true;
        this.emailValidation = true;
        this.passwordValidation = true;
    }
    RegisterComponent.prototype.usernamePresent = function () {
        var _this = this;
        this.fontColor = '';
        var url = "http://localhost:8080/checkUserName";
        this.http.post(url, this.model.username).subscribe(function (res) {
            _this.present = res;
            console.log(_this.present);
            if (_this.present) {
                _this.fontColor = "red";
                _this.usernameAvailability = "UserName Already Taken";
            }
            else {
                _this.fontColor = "green";
                _this.usernameAvailability = "Available";
            }
            _this.router.navigate(['register']);
        });
    };
    RegisterComponent.prototype.updateSelect = function () {
        this.model.merchant = this.options.length != 4;
    };
    RegisterComponent.prototype.checkPhone = function () {
        var matcher = new RegExp('^[+ 0-9]{10}$');
        if (String(this.model.phone).length == 10)
            this.phoneValidation = (matcher.test(String(this.model.phone)));
    };
    RegisterComponent.prototype.checkEmail = function () {
        if (this.model.email.length == 0) {
            this.emailValidation = true;
        }
        if (this.model.email.length > 0 && (this.model.email).indexOf("@") == -1)
            this.emailValidation = false;
        if (this.model.email.length > 0 && (this.model.email).indexOf("@") != -1)
            this.emailValidation = true;
    };
    RegisterComponent.prototype.passwordStrength = function () {
        if (this.model.password.length == 0)
            this.passwordValidation = true;
        if (this.model.password.length < 8)
            this.passwordValidation = false;
        if (this.model.password.length >= 8) {
            var matcher = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,16})');
            this.passwordValidation = matcher.test(this.model.password);
        }
    };
    // register(): void {
    //   // let url = "http://localhost:8080/register";
    //   this.router.navigate(['welcome']);
    //   // this.http.post<User>(url, this.model).subscribe(
    //   //   res => {
    //   //     AppComponent.modelUser = res;
    //   //   },
    //   //   err => {
    //   //     console.log([this.model]);
    //   //     alert("An error has occurred while registering.");
    //   //   }
    //   // );
    // }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/success/success.component.css":
/*!***********************************************!*\
  !*** ./src/app/success/success.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\r\n  height: -webkit-fill-available;\r\n  background: #E1ECC8;\r\n  color: #000000;\r\n  font: 25px Helvetica, sans-serif;\r\n}\r\n\r\nlabel {\r\n  font: bold 20px Helvetica, sans-serif;\r\n  display: block;\r\n  float: left;\r\n  text-align: right;\r\n  padding: 5px 10px 0 0;\r\n  width: 140px;\r\n}\r\n\r\nform div {\r\n  overflow: hidden;\r\n  margin: 0 0 5px 0;\r\n}\r\n\r\n.bigbutton {\r\n  border-radius: 4px;\r\n  background-color:  #ffa41b;\r\n  border: none;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  padding: 20px;\r\n  width: 150px;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n  margin: 15px;\r\n}\r\n\r\n.bigbutton span {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n  transition: 0.5s;\r\n}\r\n\r\n.bigbutton span:after {\r\n  content: '\\00bb';\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: 0;\r\n  right: -20px;\r\n  transition: 0.5s;\r\n}\r\n\r\n.bigbutton:hover span {\r\n  padding-right: 25px;\r\n}\r\n\r\n.bigbutton:hover span:after {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\n/* progress bar*/\r\n\r\n.progress-bar {\r\n  width: 0;\r\n  -webkit-animation: progress 1.5s ease-in-out forwards;\r\n          animation: progress 1.5s ease-in-out forwards;\r\n\r\n.title {\r\n  opacity: 0;\r\n  -webkit-animation: show 0.35s forwards ease-in-out 0.5s;\r\n          animation: show 0.35s forwards ease-in-out 0.5s;\r\n}\r\n}\r\n\r\n@-webkit-keyframes progress {\r\n  from {\r\n    width: 0;\r\n  }\r\n  to {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@keyframes progress {\r\n  from {\r\n    width: 0;\r\n  }\r\n  to {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes show  {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes show  {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.alert-warning {\r\n  color: #ffffff;\r\n  background-color: limegreen;\r\n  border-color: lime;\r\n}\r\n\r\n.progress {\r\n  display: flex;\r\n  height: 1rem;\r\n  overflow: hidden;\r\n  background-color: #e9ecef;\r\n  border-radius: .25rem;\r\n}\r\n\r\n.pace { -webkit-pointer-events: none; pointer-events: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -ms-box-sizing: border-box; -o-box-sizing: border-box; box-sizing: border-box; border-radius: 10px; -webkit-background-clip: padding-box; -moz-background-clip: padding; background-clip: padding-box; z-index: 2000; position: fixed; margin: auto; top: 12px; left: 0; right: 0; bottom: 0; width: 200px; height: 50px; overflow: hidden; }\r\n\r\n.pace .pace-progress { -ms-box-sizing: border-box; -o-box-sizing: border-box; box-sizing: border-box; border-radius: 2px; -webkit-background-clip: padding-box; -moz-background-clip: padding; background-clip: padding-box; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); display: block; position: absolute; right: 100%; margin-right: -7px; width: 93%; top: 7px; height: 14px; font-size: 12px; background: #29d; color: #29d; line-height: 60px; font-weight: bold; font-family: Helvetica, Arial, \"Lucida Grande\", sans-serif; -ms-box-shadow: 120px 0 #fff, 240px 0 #fff; box-shadow: 120px 0 #fff, 240px 0 #fff; }\r\n\r\n.pace .pace-progress:after { content: attr(data-progress-text); display: inline-block; position: fixed; width: 45px; text-align: right; right: 0; padding-right: 16px; top: 4px; }\r\n\r\n.pace .pace-progress[data-progress-text=\"0%\"]:after { right: -200px }\r\n\r\n.pace .pace-progress[data-progress-text=\"1%\"]:after { right: -198.14px }\r\n\r\n.pace .pace-progress[data-progress-text=\"2%\"]:after { right: -196.28px }\r\n\r\n.pace .pace-progress[data-progress-text=\"3%\"]:after { right: -194.42px }\r\n\r\n.pace .pace-progress[data-progress-text=\"4%\"]:after { right: -192.56px }\r\n\r\n.pace .pace-progress[data-progress-text=\"5%\"]:after { right: -190.7px }\r\n\r\n.pace .pace-progress[data-progress-text=\"6%\"]:after { right: -188.84px }\r\n\r\n.pace .pace-progress[data-progress-text=\"7%\"]:after { right: -186.98px }\r\n\r\n.pace .pace-progress[data-progress-text=\"8%\"]:after { right: -185.12px }\r\n\r\n.pace .pace-progress[data-progress-text=\"9%\"]:after { right: -183.26px }\r\n\r\n.pace .pace-progress[data-progress-text=\"10%\"]:after { right: -181.4px }\r\n\r\n.pace .pace-progress[data-progress-text=\"11%\"]:after { right: -179.54px }\r\n\r\n.pace .pace-progress[data-progress-text=\"12%\"]:after { right: -177.68px }\r\n\r\n.pace .pace-progress[data-progress-text=\"13%\"]:after { right: -175.82px }\r\n\r\n.pace .pace-progress[data-progress-text=\"14%\"]:after { right: -173.96px }\r\n\r\n.pace .pace-progress[data-progress-text=\"15%\"]:after { right: -172.1px }\r\n\r\n.pace .pace-progress[data-progress-text=\"16%\"]:after { right: -170.24px }\r\n\r\n.pace .pace-progress[data-progress-text=\"17%\"]:after { right: -168.38px }\r\n\r\n.pace .pace-progress[data-progress-text=\"18%\"]:after { right: -166.52px }\r\n\r\n.pace .pace-progress[data-progress-text=\"19%\"]:after { right: -164.66px }\r\n\r\n.pace .pace-progress[data-progress-text=\"20%\"]:after { right: -162.8px }\r\n\r\n.pace .pace-progress[data-progress-text=\"21%\"]:after { right: -160.94px }\r\n\r\n.pace .pace-progress[data-progress-text=\"22%\"]:after { right: -159.08px }\r\n\r\n.pace .pace-progress[data-progress-text=\"23%\"]:after { right: -157.22px }\r\n\r\n.pace .pace-progress[data-progress-text=\"24%\"]:after { right: -155.36px }\r\n\r\n.pace .pace-progress[data-progress-text=\"25%\"]:after { right: -153.5px }\r\n\r\n.pace .pace-progress[data-progress-text=\"26%\"]:after { right: -151.64px }\r\n\r\n.pace .pace-progress[data-progress-text=\"27%\"]:after { right: -149.78px }\r\n\r\n.pace .pace-progress[data-progress-text=\"28%\"]:after { right: -147.92px }\r\n\r\n.pace .pace-progress[data-progress-text=\"29%\"]:after { right: -146.06px }\r\n\r\n.pace .pace-progress[data-progress-text=\"30%\"]:after { right: -144.2px }\r\n\r\n.pace .pace-progress[data-progress-text=\"31%\"]:after { right: -142.34px }\r\n\r\n.pace .pace-progress[data-progress-text=\"32%\"]:after { right: -140.48px }\r\n\r\n.pace .pace-progress[data-progress-text=\"33%\"]:after { right: -138.62px }\r\n\r\n.pace .pace-progress[data-progress-text=\"34%\"]:after { right: -136.76px }\r\n\r\n.pace .pace-progress[data-progress-text=\"35%\"]:after { right: -134.9px }\r\n\r\n.pace .pace-progress[data-progress-text=\"36%\"]:after { right: -133.04px }\r\n\r\n.pace .pace-progress[data-progress-text=\"37%\"]:after { right: -131.18px }\r\n\r\n.pace .pace-progress[data-progress-text=\"38%\"]:after { right: -129.32px }\r\n\r\n.pace .pace-progress[data-progress-text=\"39%\"]:after { right: -127.46px }\r\n\r\n.pace .pace-progress[data-progress-text=\"40%\"]:after { right: -125.6px }\r\n\r\n.pace .pace-progress[data-progress-text=\"41%\"]:after { right: -123.74px }\r\n\r\n.pace .pace-progress[data-progress-text=\"42%\"]:after { right: -121.88px }\r\n\r\n.pace .pace-progress[data-progress-text=\"43%\"]:after { right: -120.02px }\r\n\r\n.pace .pace-progress[data-progress-text=\"44%\"]:after { right: -118.16px }\r\n\r\n.pace .pace-progress[data-progress-text=\"45%\"]:after { right: -116.3px }\r\n\r\n.pace .pace-progress[data-progress-text=\"46%\"]:after { right: -114.44px }\r\n\r\n.pace .pace-progress[data-progress-text=\"47%\"]:after { right: -112.58px }\r\n\r\n.pace .pace-progress[data-progress-text=\"48%\"]:after { right: -110.72px }\r\n\r\n.pace .pace-progress[data-progress-text=\"49%\"]:after { right: -108.86px }\r\n\r\n.pace .pace-progress[data-progress-text=\"50%\"]:after { right: -107px }\r\n\r\n.pace .pace-progress[data-progress-text=\"51%\"]:after { right: -105.14px }\r\n\r\n.pace .pace-progress[data-progress-text=\"52%\"]:after { right: -103.28px }\r\n\r\n.pace .pace-progress[data-progress-text=\"53%\"]:after { right: -101.42px }\r\n\r\n.pace .pace-progress[data-progress-text=\"54%\"]:after { right: -99.56px }\r\n\r\n.pace .pace-progress[data-progress-text=\"55%\"]:after { right: -97.7px }\r\n\r\n.pace .pace-progress[data-progress-text=\"56%\"]:after { right: -95.84px }\r\n\r\n.pace .pace-progress[data-progress-text=\"57%\"]:after { right: -93.98px }\r\n\r\n.pace .pace-progress[data-progress-text=\"58%\"]:after { right: -92.12px }\r\n\r\n.pace .pace-progress[data-progress-text=\"59%\"]:after { right: -90.26px }\r\n\r\n.pace .pace-progress[data-progress-text=\"60%\"]:after { right: -88.4px }\r\n\r\n.pace .pace-progress[data-progress-text=\"61%\"]:after { right: -86.53999999999999px }\r\n\r\n.pace .pace-progress[data-progress-text=\"62%\"]:after { right: -84.68px }\r\n\r\n.pace .pace-progress[data-progress-text=\"63%\"]:after { right: -82.82px }\r\n\r\n.pace .pace-progress[data-progress-text=\"64%\"]:after { right: -80.96000000000001px }\r\n\r\n.pace .pace-progress[data-progress-text=\"65%\"]:after { right: -79.1px }\r\n\r\n.pace .pace-progress[data-progress-text=\"66%\"]:after { right: -77.24px }\r\n\r\n.pace .pace-progress[data-progress-text=\"67%\"]:after { right: -75.38px }\r\n\r\n.pace .pace-progress[data-progress-text=\"68%\"]:after { right: -73.52px }\r\n\r\n.pace .pace-progress[data-progress-text=\"69%\"]:after { right: -71.66px }\r\n\r\n.pace .pace-progress[data-progress-text=\"70%\"]:after { right: -69.8px }\r\n\r\n.pace .pace-progress[data-progress-text=\"71%\"]:after { right: -67.94px }\r\n\r\n.pace .pace-progress[data-progress-text=\"72%\"]:after { right: -66.08px }\r\n\r\n.pace .pace-progress[data-progress-text=\"73%\"]:after { right: -64.22px }\r\n\r\n.pace .pace-progress[data-progress-text=\"74%\"]:after { right: -62.36px }\r\n\r\n.pace .pace-progress[data-progress-text=\"75%\"]:after { right: -60.5px }\r\n\r\n.pace .pace-progress[data-progress-text=\"76%\"]:after { right: -58.64px }\r\n\r\n.pace .pace-progress[data-progress-text=\"77%\"]:after { right: -56.78px }\r\n\r\n.pace .pace-progress[data-progress-text=\"78%\"]:after { right: -54.92px }\r\n\r\n.pace .pace-progress[data-progress-text=\"79%\"]:after { right: -53.06px }\r\n\r\n.pace .pace-progress[data-progress-text=\"80%\"]:after { right: -51.2px }\r\n\r\n.pace .pace-progress[data-progress-text=\"81%\"]:after { right: -49.34px }\r\n\r\n.pace .pace-progress[data-progress-text=\"82%\"]:after { right: -47.480000000000004px }\r\n\r\n.pace .pace-progress[data-progress-text=\"83%\"]:after { right: -45.62px }\r\n\r\n.pace .pace-progress[data-progress-text=\"84%\"]:after { right: -43.76px }\r\n\r\n.pace .pace-progress[data-progress-text=\"85%\"]:after { right: -41.9px }\r\n\r\n.pace .pace-progress[data-progress-text=\"86%\"]:after { right: -40.04px }\r\n\r\n.pace .pace-progress[data-progress-text=\"87%\"]:after { right: -38.18px }\r\n\r\n.pace .pace-progress[data-progress-text=\"88%\"]:after { right: -36.32px }\r\n\r\n.pace .pace-progress[data-progress-text=\"89%\"]:after { right: -34.46px }\r\n\r\n.pace .pace-progress[data-progress-text=\"90%\"]:after { right: -32.6px }\r\n\r\n.pace .pace-progress[data-progress-text=\"91%\"]:after { right: -30.740000000000002px }\r\n\r\n.pace .pace-progress[data-progress-text=\"92%\"]:after { right: -28.880000000000003px }\r\n\r\n.pace .pace-progress[data-progress-text=\"93%\"]:after { right: -27.02px }\r\n\r\n.pace .pace-progress[data-progress-text=\"94%\"]:after { right: -25.16px }\r\n\r\n.pace .pace-progress[data-progress-text=\"95%\"]:after { right: -23.3px }\r\n\r\n.pace .pace-progress[data-progress-text=\"96%\"]:after { right: -21.439999999999998px }\r\n\r\n.pace .pace-progress[data-progress-text=\"97%\"]:after { right: -19.58px }\r\n\r\n.pace .pace-progress[data-progress-text=\"98%\"]:after { right: -17.72px }\r\n\r\n.pace .pace-progress[data-progress-text=\"99%\"]:after { right: -15.86px }\r\n\r\n.pace .pace-progress[data-progress-text=\"100%\"]:after { right: -14px }\r\n\r\n.pace .pace-activity { position: absolute; width: 100%; height: 28px; z-index: 2001; box-shadow: inset 0 0 0 2px #29d, inset 0 0 0 7px #FFF; border-radius: 10px; }\r\n\r\n.pace.pace-inactive { display: none; }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VjY2Vzcy9zdWNjZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsTUFBTTtFQUNOLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsUUFBUTtBQUNWOztBQUdBLGdCQUFnQjs7QUFFaEI7RUFDRSxRQUFRO0VBQ1IscURBQTZDO1VBQTdDLDZDQUE2Qzs7QUFFL0M7RUFDRSxVQUFVO0VBQ1YsdURBQStDO1VBQS9DLCtDQUErQztBQUNqRDtBQUNBOztBQUVBO0VBQ0U7SUFDRSxRQUFRO0VBQ1Y7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQVBBO0VBQ0U7SUFDRSxRQUFRO0VBQ1Y7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQVBBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsY0FBYztFQUNkLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBLFFBQVEsNEJBQTRCLEVBQUUsb0JBQW9CLEVBQUUseUJBQXlCLEVBQUUsc0JBQXNCLEVBQUUscUJBQWlCLEVBQWpCLGlCQUFpQixFQUErRCwwQkFBMEIsRUFBRSx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBeUQsbUJBQW1CLEVBQUUsb0NBQW9DLEVBQUUsNkJBQTZCLEVBQUUsNEJBQTRCLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUU7O0FBQUUsdUJBQW9GLDBCQUEwQixFQUFFLHlCQUF5QixFQUFFLHNCQUFzQixFQUF1RCxrQkFBa0IsRUFBRSxvQ0FBb0MsRUFBRSw2QkFBNkIsRUFBRSw0QkFBNEIsRUFBRSx1Q0FBdUMsRUFBRSwrQkFBK0IsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsMERBQTBELEVBQWtELDBDQUEwQyxFQUFFLHNDQUFzQyxFQUFFOztBQUFFLDZCQUE2QixpQ0FBaUMsRUFBRSxxQkFBcUIsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUU7O0FBQUUsc0RBQXNELGNBQWM7O0FBQUUsc0RBQXNELGlCQUFpQjs7QUFBRSxzREFBc0QsaUJBQWlCOztBQUFFLHNEQUFzRCxpQkFBaUI7O0FBQUUsc0RBQXNELGlCQUFpQjs7QUFBRSxzREFBc0QsZ0JBQWdCOztBQUFFLHNEQUFzRCxpQkFBaUI7O0FBQUUsc0RBQXNELGlCQUFpQjs7QUFBRSxzREFBc0QsaUJBQWlCOztBQUFFLHNEQUFzRCxpQkFBaUI7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxpQkFBaUI7O0FBQUUsdURBQXVELGlCQUFpQjs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGlCQUFpQjs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxpQkFBaUI7O0FBQUUsdURBQXVELGlCQUFpQjs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCxpQkFBaUI7O0FBQUUsdURBQXVELGlCQUFpQjs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxpQkFBaUI7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxpQkFBaUI7O0FBQUUsdURBQXVELGlCQUFpQjs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGlCQUFpQjs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxpQkFBaUI7O0FBQUUsdURBQXVELGlCQUFpQjs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCxpQkFBaUI7O0FBQUUsdURBQXVELGlCQUFpQjs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxpQkFBaUI7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxpQkFBaUI7O0FBQUUsdURBQXVELGlCQUFpQjs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGlCQUFpQjs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxpQkFBaUI7O0FBQUUsdURBQXVELGlCQUFpQjs7QUFBRSx1REFBdUQsY0FBYzs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxpQkFBaUI7O0FBQUUsdURBQXVELGlCQUFpQjs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCxlQUFlOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGVBQWU7O0FBQUUsdURBQXVELDRCQUE0Qjs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELDRCQUE0Qjs7QUFBRSx1REFBdUQsZUFBZTs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCxlQUFlOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGVBQWU7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsZUFBZTs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCw2QkFBNkI7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCxlQUFlOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGVBQWU7O0FBQUUsdURBQXVELDZCQUE2Qjs7QUFBRSx1REFBdUQsNkJBQTZCOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsZUFBZTs7QUFBRSx1REFBdUQsNkJBQTZCOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHdEQUF3RCxhQUFhOztBQUFFLHVCQUF1QixrQkFBa0IsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxzREFBc0QsRUFBRSxtQkFBbUIsRUFBRTs7QUFBRSxzQkFBc0IsYUFBYSxFQUFFIiwiZmlsZSI6InNyYy9hcHAvc3VjY2Vzcy9zdWNjZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XHJcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gIGJhY2tncm91bmQ6ICNFMUVDQzg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udDogMjVweCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBmb250OiBib2xkIDIwcHggSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDAgMDtcclxuICB3aWR0aDogMTQwcHg7XHJcbn1cclxuXHJcbmZvcm0gZGl2IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMCAwIDVweCAwO1xyXG59XHJcblxyXG5cclxuLmJpZ2J1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICAjZmZhNDFiO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbi5iaWdidXR0b24gc3BhbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmJpZ2J1dHRvbiBzcGFuOmFmdGVyIHtcclxuICBjb250ZW50OiAnXFwwMGJiJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IC0yMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5iaWdidXR0b246aG92ZXIgc3BhbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5cclxuLmJpZ2J1dHRvbjpob3ZlciBzcGFuOmFmdGVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG5cclxuLyogcHJvZ3Jlc3MgYmFyKi9cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gIHdpZHRoOiAwO1xyXG4gIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMS41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcclxuXHJcbi50aXRsZSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb246IHNob3cgMC4zNXMgZm9yd2FyZHMgZWFzZS1pbi1vdXQgMC41cztcclxufVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHByb2dyZXNzIHtcclxuICBmcm9tIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBzaG93ICB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmFsZXJ0LXdhcm5pbmcge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpbWVncmVlbjtcclxuICBib3JkZXItY29sb3I6IGxpbWU7XHJcbn1cclxuXHJcbi5wcm9ncmVzcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDFyZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxufVxyXG5cclxuLnBhY2UgeyAtd2Via2l0LXBvaW50ZXItZXZlbnRzOiBub25lOyBwb2ludGVyLWV2ZW50czogbm9uZTsgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgdXNlci1zZWxlY3Q6IG5vbmU7IC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDsgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDsgYm94LXNpemluZzogYm9yZGVyLWJveDsgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4OyAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7IC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDsgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7IGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7IHotaW5kZXg6IDIwMDA7IHBvc2l0aW9uOiBmaXhlZDsgbWFyZ2luOiBhdXRvOyB0b3A6IDEycHg7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IHdpZHRoOiAyMDBweDsgaGVpZ2h0OiA1MHB4OyBvdmVyZmxvdzogaGlkZGVuOyB9IC5wYWNlIC5wYWNlLXByb2dyZXNzIHsgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94OyBib3gtc2l6aW5nOiBib3JkZXItYm94OyAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDsgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7IGJvcmRlci1yYWRpdXM6IDJweDsgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZzsgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyBkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogMTAwJTsgbWFyZ2luLXJpZ2h0OiAtN3B4OyB3aWR0aDogOTMlOyB0b3A6IDdweDsgaGVpZ2h0OiAxNHB4OyBmb250LXNpemU6IDEycHg7IGJhY2tncm91bmQ6ICMyOWQ7IGNvbG9yOiAjMjlkOyBsaW5lLWhlaWdodDogNjBweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjsgLXdlYmtpdC1ib3gtc2hhZG93OiAxMjBweCAwICNmZmYsIDI0MHB4IDAgI2ZmZjsgLW1zLWJveC1zaGFkb3c6IDEyMHB4IDAgI2ZmZiwgMjQwcHggMCAjZmZmOyBib3gtc2hhZG93OiAxMjBweCAwICNmZmYsIDI0MHB4IDAgI2ZmZjsgfSAucGFjZSAucGFjZS1wcm9ncmVzczphZnRlciB7IGNvbnRlbnQ6IGF0dHIoZGF0YS1wcm9ncmVzcy10ZXh0KTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBwb3NpdGlvbjogZml4ZWQ7IHdpZHRoOiA0NXB4OyB0ZXh0LWFsaWduOiByaWdodDsgcmlnaHQ6IDA7IHBhZGRpbmctcmlnaHQ6IDE2cHg7IHRvcDogNHB4OyB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjAlXCJdOmFmdGVyIHsgcmlnaHQ6IC0yMDBweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjElXCJdOmFmdGVyIHsgcmlnaHQ6IC0xOTguMTRweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjIlXCJdOmFmdGVyIHsgcmlnaHQ6IC0xOTYuMjhweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjMlXCJdOmFmdGVyIHsgcmlnaHQ6IC0xOTQuNDJweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjQlXCJdOmFmdGVyIHsgcmlnaHQ6IC0xOTIuNTZweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjUlXCJdOmFmdGVyIHsgcmlnaHQ6IC0xOTAuN3B4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNiVcIl06YWZ0ZXIgeyByaWdodDogLTE4OC44NHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNyVcIl06YWZ0ZXIgeyByaWdodDogLTE4Ni45OHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiOCVcIl06YWZ0ZXIgeyByaWdodDogLTE4NS4xMnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiOSVcIl06YWZ0ZXIgeyByaWdodDogLTE4My4yNnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiMTAlXCJdOmFmdGVyIHsgcmlnaHQ6IC0xODEuNHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiMTElXCJdOmFmdGVyIHsgcmlnaHQ6IC0xNzkuNTRweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjEyJVwiXTphZnRlciB7IHJpZ2h0OiAtMTc3LjY4cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIxMyVcIl06YWZ0ZXIgeyByaWdodDogLTE3NS44MnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiMTQlXCJdOmFmdGVyIHsgcmlnaHQ6IC0xNzMuOTZweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjE1JVwiXTphZnRlciB7IHJpZ2h0OiAtMTcyLjFweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjE2JVwiXTphZnRlciB7IHJpZ2h0OiAtMTcwLjI0cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIxNyVcIl06YWZ0ZXIgeyByaWdodDogLTE2OC4zOHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiMTglXCJdOmFmdGVyIHsgcmlnaHQ6IC0xNjYuNTJweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjE5JVwiXTphZnRlciB7IHJpZ2h0OiAtMTY0LjY2cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIyMCVcIl06YWZ0ZXIgeyByaWdodDogLTE2Mi44cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIyMSVcIl06YWZ0ZXIgeyByaWdodDogLTE2MC45NHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiMjIlXCJdOmFmdGVyIHsgcmlnaHQ6IC0xNTkuMDhweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjIzJVwiXTphZnRlciB7IHJpZ2h0OiAtMTU3LjIycHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIyNCVcIl06YWZ0ZXIgeyByaWdodDogLTE1NS4zNnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiMjUlXCJdOmFmdGVyIHsgcmlnaHQ6IC0xNTMuNXB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiMjYlXCJdOmFmdGVyIHsgcmlnaHQ6IC0xNTEuNjRweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjI3JVwiXTphZnRlciB7IHJpZ2h0OiAtMTQ5Ljc4cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIyOCVcIl06YWZ0ZXIgeyByaWdodDogLTE0Ny45MnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiMjklXCJdOmFmdGVyIHsgcmlnaHQ6IC0xNDYuMDZweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjMwJVwiXTphZnRlciB7IHJpZ2h0OiAtMTQ0LjJweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjMxJVwiXTphZnRlciB7IHJpZ2h0OiAtMTQyLjM0cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIzMiVcIl06YWZ0ZXIgeyByaWdodDogLTE0MC40OHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiMzMlXCJdOmFmdGVyIHsgcmlnaHQ6IC0xMzguNjJweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjM0JVwiXTphZnRlciB7IHJpZ2h0OiAtMTM2Ljc2cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIzNSVcIl06YWZ0ZXIgeyByaWdodDogLTEzNC45cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIzNiVcIl06YWZ0ZXIgeyByaWdodDogLTEzMy4wNHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiMzclXCJdOmFmdGVyIHsgcmlnaHQ6IC0xMzEuMThweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjM4JVwiXTphZnRlciB7IHJpZ2h0OiAtMTI5LjMycHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIzOSVcIl06YWZ0ZXIgeyByaWdodDogLTEyNy40NnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNDAlXCJdOmFmdGVyIHsgcmlnaHQ6IC0xMjUuNnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNDElXCJdOmFmdGVyIHsgcmlnaHQ6IC0xMjMuNzRweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjQyJVwiXTphZnRlciB7IHJpZ2h0OiAtMTIxLjg4cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI0MyVcIl06YWZ0ZXIgeyByaWdodDogLTEyMC4wMnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNDQlXCJdOmFmdGVyIHsgcmlnaHQ6IC0xMTguMTZweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjQ1JVwiXTphZnRlciB7IHJpZ2h0OiAtMTE2LjNweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjQ2JVwiXTphZnRlciB7IHJpZ2h0OiAtMTE0LjQ0cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI0NyVcIl06YWZ0ZXIgeyByaWdodDogLTExMi41OHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNDglXCJdOmFmdGVyIHsgcmlnaHQ6IC0xMTAuNzJweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjQ5JVwiXTphZnRlciB7IHJpZ2h0OiAtMTA4Ljg2cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI1MCVcIl06YWZ0ZXIgeyByaWdodDogLTEwN3B4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNTElXCJdOmFmdGVyIHsgcmlnaHQ6IC0xMDUuMTRweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjUyJVwiXTphZnRlciB7IHJpZ2h0OiAtMTAzLjI4cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI1MyVcIl06YWZ0ZXIgeyByaWdodDogLTEwMS40MnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNTQlXCJdOmFmdGVyIHsgcmlnaHQ6IC05OS41NnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNTUlXCJdOmFmdGVyIHsgcmlnaHQ6IC05Ny43cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI1NiVcIl06YWZ0ZXIgeyByaWdodDogLTk1Ljg0cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI1NyVcIl06YWZ0ZXIgeyByaWdodDogLTkzLjk4cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI1OCVcIl06YWZ0ZXIgeyByaWdodDogLTkyLjEycHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI1OSVcIl06YWZ0ZXIgeyByaWdodDogLTkwLjI2cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI2MCVcIl06YWZ0ZXIgeyByaWdodDogLTg4LjRweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjYxJVwiXTphZnRlciB7IHJpZ2h0OiAtODYuNTM5OTk5OTk5OTk5OTlweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjYyJVwiXTphZnRlciB7IHJpZ2h0OiAtODQuNjhweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjYzJVwiXTphZnRlciB7IHJpZ2h0OiAtODIuODJweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjY0JVwiXTphZnRlciB7IHJpZ2h0OiAtODAuOTYwMDAwMDAwMDAwMDFweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjY1JVwiXTphZnRlciB7IHJpZ2h0OiAtNzkuMXB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNjYlXCJdOmFmdGVyIHsgcmlnaHQ6IC03Ny4yNHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNjclXCJdOmFmdGVyIHsgcmlnaHQ6IC03NS4zOHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNjglXCJdOmFmdGVyIHsgcmlnaHQ6IC03My41MnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNjklXCJdOmFmdGVyIHsgcmlnaHQ6IC03MS42NnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNzAlXCJdOmFmdGVyIHsgcmlnaHQ6IC02OS44cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI3MSVcIl06YWZ0ZXIgeyByaWdodDogLTY3Ljk0cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI3MiVcIl06YWZ0ZXIgeyByaWdodDogLTY2LjA4cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI3MyVcIl06YWZ0ZXIgeyByaWdodDogLTY0LjIycHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI3NCVcIl06YWZ0ZXIgeyByaWdodDogLTYyLjM2cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI3NSVcIl06YWZ0ZXIgeyByaWdodDogLTYwLjVweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjc2JVwiXTphZnRlciB7IHJpZ2h0OiAtNTguNjRweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjc3JVwiXTphZnRlciB7IHJpZ2h0OiAtNTYuNzhweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjc4JVwiXTphZnRlciB7IHJpZ2h0OiAtNTQuOTJweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjc5JVwiXTphZnRlciB7IHJpZ2h0OiAtNTMuMDZweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjgwJVwiXTphZnRlciB7IHJpZ2h0OiAtNTEuMnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiODElXCJdOmFmdGVyIHsgcmlnaHQ6IC00OS4zNHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiODIlXCJdOmFmdGVyIHsgcmlnaHQ6IC00Ny40ODAwMDAwMDAwMDAwMDRweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjgzJVwiXTphZnRlciB7IHJpZ2h0OiAtNDUuNjJweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjg0JVwiXTphZnRlciB7IHJpZ2h0OiAtNDMuNzZweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjg1JVwiXTphZnRlciB7IHJpZ2h0OiAtNDEuOXB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiODYlXCJdOmFmdGVyIHsgcmlnaHQ6IC00MC4wNHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiODclXCJdOmFmdGVyIHsgcmlnaHQ6IC0zOC4xOHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiODglXCJdOmFmdGVyIHsgcmlnaHQ6IC0zNi4zMnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiODklXCJdOmFmdGVyIHsgcmlnaHQ6IC0zNC40NnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiOTAlXCJdOmFmdGVyIHsgcmlnaHQ6IC0zMi42cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI5MSVcIl06YWZ0ZXIgeyByaWdodDogLTMwLjc0MDAwMDAwMDAwMDAwMnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiOTIlXCJdOmFmdGVyIHsgcmlnaHQ6IC0yOC44ODAwMDAwMDAwMDAwMDNweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjkzJVwiXTphZnRlciB7IHJpZ2h0OiAtMjcuMDJweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjk0JVwiXTphZnRlciB7IHJpZ2h0OiAtMjUuMTZweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjk1JVwiXTphZnRlciB7IHJpZ2h0OiAtMjMuM3B4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiOTYlXCJdOmFmdGVyIHsgcmlnaHQ6IC0yMS40Mzk5OTk5OTk5OTk5OThweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjk3JVwiXTphZnRlciB7IHJpZ2h0OiAtMTkuNThweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjk4JVwiXTphZnRlciB7IHJpZ2h0OiAtMTcuNzJweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjk5JVwiXTphZnRlciB7IHJpZ2h0OiAtMTUuODZweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjEwMCVcIl06YWZ0ZXIgeyByaWdodDogLTE0cHggfSAucGFjZSAucGFjZS1hY3Rpdml0eSB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDEwMCU7IGhlaWdodDogMjhweDsgei1pbmRleDogMjAwMTsgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICMyOWQsIGluc2V0IDAgMCAwIDdweCAjRkZGOyBib3JkZXItcmFkaXVzOiAxMHB4OyB9IC5wYWNlLnBhY2UtaW5hY3RpdmUgeyBkaXNwbGF5OiBub25lOyB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/success/success.component.ts":
/*!**********************************************!*\
  !*** ./src/app/success/success.component.ts ***!
  \**********************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SuccessComponent = /** @class */ (function () {
    function SuccessComponent(router) {
        this.router = router;
        this.modelUser = {
            username: '',
            password: '',
            email: '',
            phone: 0,
            firstname: '',
            lastname: '',
            address: '',
            merchant: null
        };
    }
    SuccessComponent.prototype.ngOnInit = function () {
        var userData = JSON.parse(sessionStorage.getItem('userData'));
        console.log(userData);
        Object.assign(this.modelUser, userData);
        if (sessionStorage.getItem("userData") == null) {
            this.router.navigate(['login']);
        }
        if (sessionStorage.getItem("total") == null)
            this.router.navigate(["menu"]);
    };
    SuccessComponent.prototype.clearLocal = function () {
        sessionStorage.clear();
    };
    SuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-success',
            template: __webpack_require__(/*! raw-loader!./success.component.html */ "./node_modules/raw-loader/index.js!./src/app/success/success.component.html"),
            styles: [__webpack_require__(/*! ./success.component.css */ "./src/app/success/success.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\r\n  background: #a0c49d;\r\n  color: #000000;\r\n  font: 25px Helvetica, sans-serif;\r\n}\r\nh1{\r\n  font-weight: 900;\r\n}\r\np{\r\n  margin-left: 30%;\r\n}\r\ntable{\r\n  table-layout: fixed;\r\n  margin: center;\r\n}\r\nimg{\r\n  width: 20%;\r\n  align-self: center;\r\n}\r\n.align-contents{\r\n  background-color: #E1ECC8;\r\n  width: 100%;\r\n}\r\ntd{\r\n  border-top: 0px;\r\n  color: #000000;\r\n  font:20px Helvetica,sans-serif;\r\n}\r\n/* font{\r\n  color: #000000;\r\n  font-size: 40px;\r\n  text-align: center;\r\n} */\r\n.welcome{\r\n  color: #000000;\r\n}\r\nlabel {\r\n  font: bold 20px Helvetica, sans-serif;\r\n  display: block;\r\n  float: left;\r\n  text-align: left;\r\n  padding: 5px 10px 0 0;\r\n  width: 140px;\r\n}\r\nform div {\r\n  overflow: hidden;\r\n  margin: 0 0 5px 0;\r\n}\r\n.bigbutton {\r\n  border-radius: 4px;\r\n  background-color:  #ffa41b;\r\n  border: none;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  padding: 20px;\r\n  width: 150px;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n  margin: 15px;\r\n}\r\n.bigbutton span {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n  transition: 0.5s;\r\n}\r\n.bigbutton span:after {\r\n  content: '\\00bb';\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: 0;\r\n  right: -20px;\r\n  transition: 0.5s;\r\n}\r\n.bigbutton:hover span {\r\n  padding-right: 25px;\r\n}\r\n.bigbutton:hover span:after {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiO0FBR0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLDhCQUE4QjtBQUNoQztBQUNBOzs7O0dBSUc7QUFDSDtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsWUFBWTtBQUNkO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAjYTBjNDlkO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQ6IDI1cHggSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcbmgxe1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxucHtcclxuICBtYXJnaW4tbGVmdDogMzAlO1xyXG59XHJcblxyXG50YWJsZXtcclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gIG1hcmdpbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbGlnbi1jb250ZW50c3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFFQ0M4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxudGR7XHJcbiAgYm9yZGVyLXRvcDogMHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQ6MjBweCBIZWx2ZXRpY2Esc2Fucy1zZXJpZjtcclxufVxyXG4vKiBmb250e1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0gKi9cclxuLndlbGNvbWV7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBmb250OiBib2xkIDIwcHggSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogNXB4IDEwcHggMCAwO1xyXG4gIHdpZHRoOiAxNDBweDtcclxufVxyXG5cclxuZm9ybSBkaXYge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAwIDAgNXB4IDA7XHJcbn1cclxuXHJcblxyXG4uYmlnYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogICNmZmE0MWI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogMTVweDtcclxufVxyXG4uYmlnYnV0dG9uIHNwYW4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5iaWdidXR0b24gc3BhbjphZnRlciB7XHJcbiAgY29udGVudDogJ1xcMDBiYic7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAtMjBweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uYmlnYnV0dG9uOmhvdmVyIHNwYW4ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5iaWdidXR0b246aG92ZXIgc3BhbjphZnRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxuICByaWdodDogMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(router) {
        this.router = router;
        this.modelUser = {
            username: '',
            password: '',
            email: '',
            phone: 0,
            firstname: '',
            lastname: '',
            address: '',
            merchant: null
        };
    }
    // user: User = AppComponent.modelUser;
    WelcomeComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem("userData") == null) {
            this.router.navigate(['login']);
        }
        var userData = JSON.parse(sessionStorage.getItem('userData'));
        console.log(userData);
        Object.assign(this.modelUser, userData);
    };
    WelcomeComponent.prototype.clearLocal = function () {
        sessionStorage.clear();
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcom',
            template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WelcomeComponent);
    return WelcomeComponent;
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tejasalisyam/Desktop/TestProjs/Xwiggy-Angular8-SpringBoot-MVC-JPA-MYSQL/xwiggy-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map