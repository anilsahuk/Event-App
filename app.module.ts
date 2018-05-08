import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule,ReactiveFormsModule} from '@angular/forms'

import{
      EventsListComponent,
      EventsThumbnailComponents,
      EventService,
      EventDetailsComponent,
      CreateEventComponent,
      EventRouteActivator,
      EventListResolver,
      CreateSessionComponent,
      SessionListComponent
} from './events/index'

import { AppComponent }  from './app.component'
import { NavBarComponent} from './nav/navbar.components'
import { appRoutes} from './routes'
import { Error404Component} from './errors/404.component'
import { AuthService} from './user/auth.service'


@NgModule({
  imports:      [ 
                   BrowserModule,
                   FormsModule,
                   ReactiveFormsModule,
                   RouterModule.forRoot(appRoutes)
                ],
  declarations: [ 
                  AppComponent,
                  EventsListComponent,
                  EventsThumbnailComponents,
                  EventDetailsComponent,
                  NavBarComponent,
                  CreateEventComponent,
                  Error404Component,
                  CreateSessionComponent,
                  SessionListComponent,

                ],
  providers: [
              EventService,EventRouteActivator,
              {provide:'canDeactivateCreateEvent',
              useValue:checkDirtyState},
              EventListResolver,
              AuthService,
             ],              
  bootstrap:[
    AppComponent 
    ]
})
export class AppModule { }

function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
     return window.confirm('you have not saved this event,do you really want to cancel?')
     return true
}