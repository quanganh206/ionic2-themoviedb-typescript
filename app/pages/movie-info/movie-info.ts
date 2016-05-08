import {Page, NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the MovieInfoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/movie-info/movie-info.html',
})
export class MovieInfoPage {
    private movie;
    constructor(private nav: NavController, private navParams: NavParams) {
        this.movie = navParams.get('movie');
    }
}
