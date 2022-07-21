import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'curd-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  public apiData: any;

  constructor(private api: UserService) { }

  ngOnInit(): void {  

    this.api.getUser().subscribe({
      next: (apiData: any) => {
        this.apiData = apiData.data;

      },
      error: (apiError: any) => {
        console.error(apiError);
      }
    })
  }

  public deleteUser(user_id: any) {
    this.api.deleteUser(user_id).subscribe({
      next: (apiData: any) => {
        this.ngOnInit()
      },
      error: (apiError: any) => {
        console.error(apiError);
      }
    })
  }
}
