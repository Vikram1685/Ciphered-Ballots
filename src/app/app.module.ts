import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { VotingComponent } from './voting/voting.component';
import {DropdownModule} from 'primeng/dropdown';
import { VotingService } from './voting/voting.service';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import { ChipModule } from 'primeng/chip';
import { CastvoteComponent } from './castvote/castvote.component';
import { ResultsComponent } from './results/results.component';
import {ChartModule} from 'primeng/chart';
import {AccordionModule} from 'primeng/accordion';

@NgModule({
  declarations: [
    AppComponent,
    VotingComponent,
    CastvoteComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    HttpClientModule,
    CardModule,
    TableModule,
    ChipModule,
    ChartModule,
    AccordionModule
  ],
  providers: [VotingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
