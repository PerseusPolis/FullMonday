import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbService } from '../../services/tmdb.service';
import { Movie } from '../../models/movie';
import { LoadingController, IonContent } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { Food } from 'src/app/models/food';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  segment: string;
  page: number;
  movies: Movie[];
  food: Food[] = [];
  profile: User;
  profile_active: boolean = false;
  @ViewChild(IonContent) content: IonContent;

  constructor(
      private router: Router,
      private loadingCtrl: LoadingController,
      private tmdb: TmdbService
  ) {}

  ngOnInit() {
    this.onTabSelected('popular');
  }

  onTabSelected(segmentValue: string) {
    this.segment = segmentValue;
    this.page = 1;
    this.movies = null;
    this.food = null;
    this.profile = null;
    this.profile_active = false;
    this.content.scrollToTop();
    if(this.segment == "food"){
      this.food = [];
      let food_1 = {
        name: "Palomitas",
        picture: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/12/8/1/JE0205H_Cacio-Pepe-Popcorn_s4x3.jpg.rend.hgtvcom.616.462.suffix/1481216491893.jpeg",
        price: 50,
        quantity: 0
      }
      this.food.push(food_1);
      this.food.push(food_1);
      this.food.push(food_1);
      this.food.push(food_1);
      this.food.push(food_1);
      this.food.push(food_1);
      this.food.push(food_1);
      this.food.push(food_1);
    }else if(this.segment == "profile"){
      this.profile_active = true;
      this.profile = new User();
      this.profile.name = "John Doe";
      this.profile.email = "john_doe@gmail.com";
      this.profile.birthday = "12 de Mayo de 1990";
      this.profile.registro = "Miembro desde Abril 2019";
    }else{
      this.loadMovies();
    }
    
  }

  onNextPage() {
    this.page++;
    this.loadMovies();
  }

  onMovieDetail(id: number) {
    this.router.navigate(['movie-detail', id]);
  }

  onSearch() {
    this.router.navigate(['search']);
  }

  private async loadMovies() {
    let service;
    switch (this.segment) {
      case 'popular':  service = this.tmdb.getPopularMovies(this.page); break;
      case 'top':      service = this.tmdb.getTopMovies(this.page); break;
      case 'upcoming': service = this.tmdb.getUpcomingMovies(this.page); break;
    }
    const loadingElement = await this.loadingCtrl.create({
      message: 'Please wait...',
      spinner: 'crescent',
      duration: 2000
    });

    const loading = await this.loadingCtrl.create(loadingElement);

    loading.present();
    service.subscribe(res => {
      if (!this.movies) { this.movies = []; }
      this.movies = this.movies.concat(res);
      loading.dismiss();
    }, err => {
      this.movies = [];
      loading.dismiss();
    });
  }

}
