var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
var PopoverComponent = (function () {
    function PopoverComponent() {
        this.greeting = {};
        this.name = 'World';
    }
    PopoverComponent.prototype.changeGreeting = function (greeting) {
        var isOpen = this.popover.isOpen();
        this.popover.close();
        if (greeting !== this.greeting || !isOpen) {
            this.greeting = greeting;
            this.popover.open(greeting);
        }
    };
    __decorate([
        ViewChild('p'),
        __metadata("design:type", NgbPopover)
    ], PopoverComponent.prototype, "popover", void 0);
    PopoverComponent = __decorate([
        Component({
            selector: 'app-popover',
            templateUrl: './popover.component.html',
            styleUrls: ['./popover.component.scss']
        })
    ], PopoverComponent);
    return PopoverComponent;
}());
export { PopoverComponent };
//# sourceMappingURL=popover.component.js.map