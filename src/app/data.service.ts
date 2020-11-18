import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = "http://apolis-grocery.herokuapp.com/api/category";

  constructor(private http: HttpClient) { }

  getCategory():Observable<any>{
    return this.http.get(this.url)
  }
}
