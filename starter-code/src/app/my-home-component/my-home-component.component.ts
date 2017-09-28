import { Component, OnInit } from '@angular/core';
import { Movie } from '../../servicies/movies';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [Movie]

})
export class MyHomeComponentComponent implements OnInit {
  listMovie:any;
  constructor(private movie: Movie) {
}

  ngOnInit() {
    this.listMovie = this.movie.getmovies()
    console.log(this.listMovie)
  }

}
