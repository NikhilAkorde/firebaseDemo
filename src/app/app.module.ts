import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import * as firebase from 'firebase';
import { AppComponent } from './app.component';


var config = {  
    apiKey: "AIzaSyDflqlHXASmqALULfKlz4jzCkoEL_EisY0",
    authDomain: "fir-project-7dc1b.firebaseapp.com",
    databaseURL: "https://fir-project-7dc1b.firebaseio.com",
    projectId: "fir-project-7dc1b",
    storageBucket: "fir-project-7dc1b.appspot.com",
    messagingSenderId: "633849752328"
  };
  firebase.initializeApp(config);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
