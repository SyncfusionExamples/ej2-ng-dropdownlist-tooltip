"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        // defined the array of data
        this.data = [
            { Id: 'game1', Game: 'Badminton' },
            { Id: 'game2', Game: 'Tennis' },
            { Id: 'game3', Game: 'American Football' },
            { Id: 'game4', Game: 'Cricket' },
            { Id: 'game5', Game: 'Volleyball' }
        ];
        // maps the appropriate column to fields property
        this.fields = { text: 'Game', value: 'Id' };
        //set the placeholder to DropDownList input
        this.text = "Select game";
        this.onOpen = function (args) {
            // get all the list items
            var listItems = args.popup.element.querySelectorAll('li');
            var length = listItems.length;
            for (var i = 0; i < length; i++) {
                // set title attribute to all the list items.
                listItems[i].setAttribute('title', listItems[i].textContent);
            }
        };
        this.onChange = function (args) {
            var dropdown = document.getElementById('ddlelement');
            // set tooltip to selected item which is shown in input element.
            dropdown.setAttribute('title', args.item.textContent);
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        // specifies the template string for the DropDownList component with change event
        template: "<ej-dropdownlist id='ddlelement' #samples (open)='onOpen($event)' (change)='onChange($event)' [dataSource]='data' [fields]='fields' [placeholder]='text'></ej-dropdownlist>"
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map