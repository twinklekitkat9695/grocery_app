import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public topics=["HTML","CSS","Bootstrap","Angular"];
public userModel= new User("twinkle", "twinkle@gmail.com", "HTML", 9695882213, "morning",true);
onFormSubmit(){
  console.log(this.userModel);
}
  constructor() { }

  ngOnInit(): void {
  }

}
