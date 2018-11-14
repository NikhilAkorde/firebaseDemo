import { Component } from '@angular/core';
import {FormGroup ,FormControl } from '@angular/forms'
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebaseDemo';
    mystuds: any;
    myname: String;
    products:any;
    currentProduct:any;
    currentSection:string="products";

studForm = new FormGroup({
  name: new FormControl(''),
  marks: new FormControl('')
  });
  
constructor() {
    

    
    var ref = firebase.database().ref("test/");
    ref.on("value" ,resp => {
   this.myname =resp.val();
   console.log(resp.val());
   }); 
 
 var ref1 = firebase.database().ref("students/");
   ref1.on("value" ,resp => {
   this.mystuds = snapshotToArray(resp);
   console.log(this.mystuds);
   });
} 
 AddStuds()
   {
   var ref1 =firebase.database().ref("products/");
   ref1.push(this.studForm.value);
   var ref3 = firebase.database().ref("array/").push(this.studForm.value);
   }
   EditData(data)
   {
   var key =data.key;
   var str ="students/" + key;
   console.log(str);
   var ref1 = firebase.database().ref(str);
   
   ref1.update(this.studForm.value);
   }
   
  ngOnInit() {
  
  firebase.database().ref("products/").on('value', resp => {
    this.products = snapshotToArray(resp);
    //console.log(snapshotToArray(resp));
  } );
  }

 
}
export const snapshotToArray = (snapshot) => {
    var returnArr = [];
    snapshot.forEach(function(childSnapshot){
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
} ;