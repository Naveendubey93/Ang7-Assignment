import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';
  name = 'Naveen dubey'
}


// export class AppComponent implements OnInit {
//     registerForm: FormGroup;
//     submitted = false;
//
//     constructor(private formBuilder: FormBuilder) { }
//
//     ngOnInit() {
//       onSubmit() {
//         this.submitted = true;
//
//         // stop here if form is invalid
//         if (this.registerForm.invalid) {
//             return;
//         }
//
//         alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
//     }
//     }
//   }
