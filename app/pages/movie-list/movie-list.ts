import {Page, NavController} from 'ionic-angular';
import {MovieService} from '../../services/MovieService';
import {MovieInfoPage} from '../movie-info/movie-info';

/*
  Generated class for the MovieListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
    templateUrl: 'build/pages/movie-list/movie-list.html',
    providers: [MovieService]
})
export class MovieListPage {
    private movies;
    constructor(private nav: NavController,
        private movieService: MovieService) {
        this.nav = nav;
        this.movieService = movieService;
    }

    searchMovieDB(event, key) {
        if (event.target.value.length > 2) {
            this.movieService.searchMovies(event.target.value).subscribe(
                data => { this.movies = data.results; console.log(data); },
                err => console.log(err),
                () => console.log('Movie Search Complete')
            );
        }
    }

    itemTapped(event, movie) {
        this.nav.push(MovieInfoPage, {
            movie: movie
        });
    }
}
