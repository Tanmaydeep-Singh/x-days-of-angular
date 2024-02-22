import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    console.log("yes");
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
