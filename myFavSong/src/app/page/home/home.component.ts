import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {
  posts: Post[] = [];

  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(posts => {
        this.posts = posts;
      });
  }
}

// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';


// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })

// export class HomeComponent implements OnInit {


//   ngOnInit(): void {
//     this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
//       .subscribe(posts => {
//         console.log("api called");
//         this.posts = posts;
//       });
//   }

// }
