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
var core_1 = require('@angular/core');
var employee_1 = require('./employee');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var employee_service_1 = require('./employee.service');
require('rxjs/add/operator/switchMap');
var EmpDetialsComponent = (function () {
    function EmpDetialsComponent(employeeService, route, location) {
        this.employeeService = employeeService;
        this.route = route;
        this.location = location;
    }
    EmpDetialsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.employeeService.getEmployee(params['id']); })
            .subscribe(function (employee) { return _this.employee = employee; });
    };
    EmpDetialsComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', employee_1.Employee)
    ], EmpDetialsComponent.prototype, "employee", void 0);
    EmpDetialsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'emp-detail',
            templateUrl: 'emp-detail.component.html',
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.ActivatedRoute, common_1.Location])
    ], EmpDetialsComponent);
    return EmpDetialsComponent;
}());
exports.EmpDetialsComponent = EmpDetialsComponent;
//# sourceMappingURL=emp-detail.component.js.map