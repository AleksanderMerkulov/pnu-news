import { Component } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {HttpService} from "../services/http/http.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(public http: HttpClient, public httpService:HttpService, ) {
  }

  public ngOnInit(){
    window.addEventListener('load', ()=>{
      this.getNews()
    })
  }

  getNews(){
    this.httpService.getNews().subscribe((data)=>{
      console.log(data)
    }, error => {
      alert('Error')
      // console.log(error)
      this.console(error)
    })
  }

  console(arg: any){
    console.log(arg)
  }

}
