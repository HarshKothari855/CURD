import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'curd-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public formData: FormGroup | any;
  public err: string | undefined;

  constructor(private fb: FormBuilder, private api: UserService, private router: Router) { }

  ngOnInit(): void {
    this.formData = this.fb.group({
      img: [null],
      name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      email: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(75), Validators.email]],
      category: [null, [Validators.required]]
    })
  }

  public changeImg(event: any) {
    const img: any = document.getElementById('show_img');
    img.src = URL.createObjectURL(event.target.files[0]);
    this.formData.get('img').patchValue(event.target.files[0]);
  }

  public remove() {
    return this.err = undefined;
  }

  public form() { 
    const formData = new FormData();
    formData.append('singleImg', this.formData.get('img').value);
    formData.append('name', this.formData.get('name').value);
    formData.append('email', this.formData.get('email').value);
    formData.append('category', this.formData.get('category').value);

    this.api.postUser(formData).subscribe({
      next: (apiData: any) => {
        if(apiData.statusCode === 201) {
          this.router.navigate(['/'])
        }
      },
      error: (apiError: any) => {
        if(apiError.error.statusCode === 400) {
          this.err = 'Email already exists please enter another email address.'
        }
        else {
          this.err = apiError.error.err
        }
        setTimeout(() => {
          this.err = undefined
        }, 10000)
      }
    })
  }
}
