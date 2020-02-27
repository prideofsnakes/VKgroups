import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }
result : Array<object>;
access_token : string;
query : string = "";

getResponse() {
  const domain : string  =  "https://api.vk.com/method/groups.search?q=";
  const keyParams : string = "&count=1000&fields=description&type=group&access_token="+ this.access_token + "&v=5.103";
	if (this.query.length !=0 ) this.http.jsonp(domain + this.query + keyParams,"callback").subscribe(answer => this.result = answer["response"]['items']); 
             }

}
