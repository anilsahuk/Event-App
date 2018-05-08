import { Component,OnInit } from '@angular/core'
import { EventService} from './shared/event.service'
import { ActivatedRoute} from '@angular/router'
import { IEvent} from './shared/index'
@Component({
    template: `
    <div>
    <h1>upcoming angular 2 events</h1>
    <hr/>
    <div class="row">
    <div  *ngFor="let event of events" class="col-md-5">
    <event-thumbnail #thumbnail [event]="event"> </event-thumbnail>
    </div>
    </div>
    `
})
export class EventsListComponent implements OnInit{
    events:IEvent[]
 constructor(private eventservice:EventService,private route:ActivatedRoute){
    }
    ngOnInit(){
        this.events=this.route.snapshot.data['events']
      }
}
