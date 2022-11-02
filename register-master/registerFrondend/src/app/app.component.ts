import { Component } from '@angular/core';
//import { AuthService } from '../_services/auth.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Matome';

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    // acceptTerms: new FormControl(false),
  });
  submitted = false;

  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        phoneNumber: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        // acceptTerms: [false, Validators.requiredTrue]
      },
      {
      
      }
    );
  }
  
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  set_registerForm(){
     const user = {
      name:this.form.value.name,
      phoneNumber:this.form.value.phoneNumber,
      email:this.form.value.email,
      password:this.form.value.password,
      confirmPassword:this.form.value.confirmPassword,
      // acceptTerms:this.form.value.acceptTerms
     }

     console.log(user)
  }
  




}




// form: FormGroup = new FormGroup({
//   name: new FormControl(''),
//   lastname: new FormControl(''),
//   email: new FormControl(''),
//   phonenumber: new FormControl(''),
//   password: new FormControl(''),
//   confirmPassword: new FormControl(''),
//   usertype: new FormControl('')
//   // acceptTerms: new FormControl(false),
// });
// submitted = false;


// constructor(
//   private registerService: RegisterService,
//   private formBuilder: FormBuilder) {
  
// }

// ngOnInit(): void {
//   this.form = this.formBuilder.group(
//     {
//       name: ['', Validators.required],
//       lastname:['', Validators.required],
//       phonenumber: [
//         '',
//         [
//           Validators.required,
//           Validators.minLength(6),
//           Validators.maxLength(20)
//         ]
//       ],
//       email: ['', [Validators.required, Validators.email]],
//       password: [
//         '',
//         [
//           Validators.required,
//           Validators.minLength(6),
//           Validators.maxLength(40)
//         ]
//       ],
//       confirmPassword: ['', Validators.required],
//       usertype:['',Validators.required]
//       // acceptTerms: [false, Validators.requiredTrue]
//     },
//     {
    
//     }
//   );
// }

// get f(): { [key: string]: AbstractControl } {
//   return this.form.controls;
// }
// onSubmit(): void {
//   this.submitted = true;
 
//   let user = {
//     firstname:this.form.value.name,
//     lastname:this.form.value.lastname,
//     phonenumber:this.form.value.phonenumber,
//     email:this.form.value.email,
//     password:this.form.value.password,
//     usertype : this.form.value.usertype

//     // acceptTerms:this.form.value.acceptTerms
    
//    }

//   this.registerService.signup(user).subscribe(
//     (data) => {
//       console.log(data);
      
//     },
//   )

  
//   if (this.form.invalid) {
//     return;
//   }
//   console.log(JSON.stringify(this.form.value, null, 2));
// }
// onReset(): void {
//   this.submitted = false;
//   this.form.reset();
// }

// set_registerForm(){
 

  
// }








// import { Component, OnInit } from '@angular/core';
// import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent implements OnInit {

//   form: FormGroup = new FormGroup({
//     name: new FormControl(''),
//     lastName: new FormControl(''),
//     email: new FormControl(''),
//     phoneNumber: new FormControl(''),
//     password: new FormControl(''),
//     confirmPassword: new FormControl(''),
//     client: new FormControl(false),
//     contractors: new FormControl(false),
//     usertype: new FormControl(''),
//   });
//   submitted = false;

  
//   constructor(private formBuilder: FormBuilder) {}

//   ngOnInit(): void {
//     this.form = this.formBuilder.group(
//       {
//         name: ['', Validators.required],
//         lastName: ['', Validators.required],
//         phoneNumber: [
//           '',
//           [
//             Validators.required,
//             Validators.minLength(6),
//             Validators.maxLength(20)
//           ]
//         ],
//         email: ['', [Validators.required, Validators.email]],
//         password: [
//           '',
//           [
//             Validators.required,
//             Validators.minLength(6),
//             Validators.maxLength(40)
//           ]
//         ],
//         confirmPassword: ['', Validators.required],
//         usertype: ['', Validators.required],
//         client: [false, Validators],
//         contractors: [false, Validators]
//       },
//       {
      
//       }
//     );
//   }
  
//   get f(): { [key: string]: AbstractControl } {
//     return this.form.controls;
//   }
//   onSubmit(): void {
//     this.submitted = true;
//     if (this.form.invalid) {
//       return;
//     }
//     console.log(JSON.stringify(this.form.value, null, 2));
//   }

//   onReset(): void {
//     this.submitted = false;
//     this.form.reset();
//   }

//   set_registerForm(){
//      const user = {
//       name:this.form.value.name,
//       lastName:this.form.value.lastName,
//       phoneNumber:this.form.value.phoneNumber,
//       email:this.form.value.email,
//       password:this.form.value.password,
//       confirmPassword:this.form.value.confirmPassword,
//       client:this.form.value.client,
//       contractors:this.form.value.contractors,
//      }

//      console.log(user)
//   }
  


// }


