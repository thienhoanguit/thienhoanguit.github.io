import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { ENV } from '../environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'; // Module Realtime Database

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

const PRIME_MODULES = [ToastModule];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, PRIME_MODULES],
  providers: [provideHttpClient(withInterceptorsFromDi()),
    // Cấu hình Firebase App
    provideFirebaseApp(() => initializeApp(ENV.firebaseConfig)),
    // Cấu hình Firebase Realtime Database
    provideDatabase(() => getDatabase()),
    provideAuth(() => getAuth()),
    MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
