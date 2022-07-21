import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'curd-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  
  formData: FormGroup | any;
  public err: string | undefined;
  public img: string | undefined;

  constructor(private fb: FormBuilder, private api: UserService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    
    this.api.getIdUser(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (apiData: any) => {
        this.formData.patchValue({
          name: apiData.user.name,
          email: apiData.user.email,
          category: apiData.user.category
        })
        this.img = apiData.user.img_url;
      },
      error: (apiError: any) => {
        if(apiError.error.statusCode === 404) {
          this.router.navigate(['404'])
        }
      }
    })

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

    this.api.patcUserId(this.activatedRoute.snapshot.params['id'], formData).subscribe({
      next: (apiData: any) => {
        this.router.navigate(['/'])
      },
      error: (err: any) => {
        console.error(err)
      }
    })
  }
}
