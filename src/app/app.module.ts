import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { ENV } from '../environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

const PRIME_MODULES = [ToastModule];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, PRIME_MODULES],
  providers: [provideHttpClient(withInterceptorsFromDi()),
    // Cấu hình Firebase App
    provideFirebaseApp(() => initializeApp(ENV.firebaseConfig)),
    provideAuth(() => getAuth()),
     // Cấu hình Firestore với provideFirestore
     provideFirestore(() => getFirestore()),
    MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}

