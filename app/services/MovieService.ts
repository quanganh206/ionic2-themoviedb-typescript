import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
    private response;

    constructor(public http: Http) {
        this.http = http;
    }

    searchMovies(movieName) {
        var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
        this.response = this.http.get(url).map(res => res.json());
        return this.response;
    }
}
