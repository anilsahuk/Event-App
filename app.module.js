"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var index_1 = require("./events/index");
var app_component_1 = require("./app.component");
var navbar_components_1 = require("./nav/navbar.components");
var routes_1 = require("./routes");
var _404_component_1 = require("./errors/404.component");
var auth_service_1 = require("./user/auth.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes)
        ],
        declarations: [
            app_component_1.AppComponent,
            index_1.EventsListComponent,
            index_1.EventsThumbnailComponents,
            index_1.EventDetailsComponent,
            navbar_components_1.NavBarComponent,
            index_1.CreateEventComponent,
            _404_component_1.Error404Component,
            index_1.CreateSessionComponent,
            index_1.SessionListComponent,
        ],
        providers: [
            index_1.EventService, index_1.EventRouteActivator,
            { provide: 'canDeactivateCreateEvent',
                useValue: checkDirtyState },
            index_1.EventListResolver,
            auth_service_1.AuthService,
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
function checkDirtyState(component) {
    if (component.isDirty)
        return window.confirm('you have not saved this event,do you really want to cancel?');
    return true;
}
//# sourceMappingURL=app.module.js.map