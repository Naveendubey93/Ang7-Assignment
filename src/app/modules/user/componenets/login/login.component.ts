import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgForm }   from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	registerForm: FormGroup;
    submitted = false;
 constructor(private formBuilder: FormBuilder) { }
 ngOnInit() {
   this.registerForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
    
     });
     }
 get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! \n\n')
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }
}