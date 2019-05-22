import {NgModule} from '@angular/core';
import { MoviecardautoComponent} from './moviecardauto/moviecardauto.component';
import {TicketComponent} from './ticket/ticket.component';
import {IonicModule} from '@ionic/angular';
import {ShowtimesComponent} from './showtimes/showtimes.component';
import {MovieShowtimeComponent} from './showtimes/movie-showtime/movie-showtime.component';
import {ProfileCardComponent} from './profile-card/profile-card.component';
import {CelebrityRecognizerComponent} from './celebrity-recognizer/celebrity-recognizer.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        MoviecardautoComponent,
        TicketComponent,
        ShowtimesComponent,
        MovieShowtimeComponent,
        ProfileCardComponent,
        CelebrityRecognizerComponent
    ],
    imports: [
        IonicModule,
        HttpClientModule
    ],
    exports: [
        MoviecardautoComponent,
        TicketComponent,
        ShowtimesComponent,
        MovieShowtimeComponent,
        ProfileCardComponent,
        CelebrityRecognizerComponent
    ]
})
export class ComponentsModule {}
