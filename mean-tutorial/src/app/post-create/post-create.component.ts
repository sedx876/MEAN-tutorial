import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  newPost = ''
  
  

  

  onAddPost(){
    this.newPost = 'This is a User Post that was created'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
