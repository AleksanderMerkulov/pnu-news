import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getNews(){
    let req = this.http.get('https://pnu.edu.ru//pnu_api/cms_news/get_news_list_render_by_tag/?tag=prioritet2030')
    // console.log(data)
    return req
  }
}
