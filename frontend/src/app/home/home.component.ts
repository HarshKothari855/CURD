import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'curd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public apiData: number = 0;

  constructor(private api: UserService) { }

  ngOnInit(): void {
    this.api.getUserCount().subscribe({
      next: (apiData: any) => {
        this.apiData = apiData.data;
      },
      error: (err: any) => {
        console.error(err)
      }
    })
  }

}
