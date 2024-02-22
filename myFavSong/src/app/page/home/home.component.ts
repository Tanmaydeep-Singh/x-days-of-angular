import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Post } from '../../model/post';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {
  posts: Post[] = [];

  
  constructor(private dataService: DataService) { }


    ngOnInit(): void {
      this.dataService.getPosts().subscribe(posts => {
        this.posts = posts;
      });
     }
}
