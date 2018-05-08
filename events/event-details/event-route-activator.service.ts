import{ Router,CanActivate, ActivatedRouteSnapshot} from "@angular/router"
import{ Injectable} from "@angular/core"
import { EventService } from "../shared/event.service";

@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor(private eventservice:EventService,private router:Router){

    }
    canActivate(route:ActivatedRouteSnapshot){
        const eventExist=!!this.eventservice.getEvent(+route.params['id'])

        if(!eventExist)
        this.router.navigate(['404'])
        return eventExist
    }
}