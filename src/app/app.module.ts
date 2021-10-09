import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReadComponent } from './components/read/read.component';
import { CreateComponent } from './components/create/create.component';

import { NgxsModule } from '@ngxs/store';
import { LinkState } from './store/state/link.state';
import { NgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { isDevMode } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([LinkState], { developmentMode: isDevMode() }),
    NgxsLoggerPluginModule.forRoot(),
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
