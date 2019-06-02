import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbService } from '../../services/tmdb.service';
import { Movie } from '../../models/movie';
import { LoadingController, IonContent } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { Food } from 'src/app/models/food';
import { User } from 'src/app/models/user';
import { Product } from 'src/app/models/product';

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
  profile_active = false;
  carrito = false;
  cart: Product[] = [];
  @ViewChild(IonContent) content: IonContent;

  constructor(private router: Router, private loadingCtrl: LoadingController, private tmdb: TmdbService) {}

  ngOnInit() {
    this.onTabSelected('popular');
    let carrito: Product[] = [];
    localStorage.setItem('carrito_arr', JSON.stringify(carrito) );
  }

  onTabSelected(segmentValue: string) {
    this.segment = segmentValue;
    this.page = 1;
    this.movies = null;
    this.food = null;
    this.profile = null;
    this.profile_active = false;
    this.carrito = false;
    this.content.scrollToTop();
    if(this.segment == "food"){
      this.food = [
        {
          name: "Palomitas Grandes",
          picture: {'background-image': 'url(https://images-na.ssl-images-amazon.com/images/I/71F9coQJt8L._SY450_.jpg)'},
          price: 120,
          quantity: 0
        },
        {
          name: "Palomitas Medianas",
          picture: {'background-image': 'url(https://www.100daysofrealfood.com/wp-content/uploads/2011/06/popcorn1.jpg)'},
          price: 80,
          quantity: 0
        },
        {
          name: "Palomitas Chicas",
          picture: {'background-image': 'url(https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/12/8/1/JE0205H_Cacio-Pepe-Popcorn_s4x3.jpg.rend.hgtvcom.616.462.suffix/1481216491893.jpeg)'},
          price: 50,
          quantity: 0
        },
        {
          name: "Refresco Grande",
          picture: {'background-image': 'url(https://i.kinja-img.com/gawker-media/image/upload/s--hXMW9u2A--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/xtb8ldxhnxu83glrscs0.jpg)'},
          price: 90,
          quantity: 0
        },
        {
          name: "Refresco Mediano",
          picture: {'background-image': 'url(https://brofeed.com/wp-content/uploads/2017/11/150617-sodaglass-stock.jpg)'},
          price: 70,
          quantity: 0
        },
        {
          name: "Refresco Chico",
          picture: {'background-image': 'url(https://ddi.tradesuppliesinc.com/Handlers/ImageHandler.ashx?im=22394.jpg)'},
          price: 50,
          quantity: 0
        },
        {
          name: "Nachos",
          picture: {'background-image': 'url(https://okdiario.com/img/2018/02/27/nachos-con-queso-655x368.jpg)'},
          price: 40,
          quantity: 0
        },
        {
          name: "Hot Dog",
          picture: {'background-image': 'url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/barbecue-grilled-hot-dog-with-yellow-mustard-and-royalty-free-image-808146592-1552657310.jpg?crop=1.00xw:0.752xh;0,0&resize=1200:*)'},
          price: 35,
          quantity: 0
        },
        {
          name: "Pizza",
          picture: {'background-image': 'url(https://assets.bonappetit.com/photos/5a9dd672eb730726d6c7ec19/16:9/w_1280,c_limit/pizza-slice-opener-pepperoni-cheese.jpg)'},
          price: 45,
          quantity: 0
        },
        {
          name: "Helado",
          picture: {'background-image': 'url(https://www.biggerbolderbaking.com/wp-content/uploads/2015/03/BBB64-Ice-Cream-Party-Thumbnail-FINAL.jpg)'},
          price: 40,
          quantity: 0
        },
        {
          name: "Crepa",
          picture: {'background-image': 'url(https://www.philadelphia.com.mx/modx/assets/img/revision2016/images/recetas/recetas_2015/CREPASDEQUESOYZARZAMORA001-780x530.jpg)'},
          price: 60,
          quantity: 0
        },
        {
          name: "ICEE",
          picture: {'background-image': 'url(http://dplicensing.com/wp-content/uploads/2013/01/icee.jpg)'},
          price: 80,
          quantity: 0
        }
      ];
    }else if(this.segment == "profile"){
      this.profile_active = true;
      this.profile = new User();
      this.profile.name = "John Doe";
      this.profile.email = "john_doe@gmail.com";
      this.profile.birthday = "12 de Mayo de 1990";
      this.profile.registro = "21 de Abril de 2019";
    }else if(this.segment == "cart"){
      this.carrito = true;
      let cache_arr = localStorage.getItem('carrito_arr');
      this.cart = JSON.parse(cache_arr);
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

  private async loadMovies() {
    let service;
    switch (this.segment) {
      case 'popular':  service = this.tmdb.getPopularMovies(this.page); break;
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

  agregarComida(comida: Food){
    let cache_arr = localStorage.getItem('carrito_arr');
    let cart_arr: Product[] = JSON.parse(cache_arr);
    let aux = {
      name: comida.name,
      price: comida.price,
      quantity: 1
    }
    cart_arr.push(aux);
    localStorage.setItem('carrito_arr', JSON.stringify(cart_arr) );
  }

  getSizeCart(){
    let cache_arr = localStorage.getItem('carrito_arr');
    let cart_arr: Product[] = JSON.parse(cache_arr);
    return cart_arr.length;
  }

  getTotalCart(){
    let cache_arr = localStorage.getItem('carrito_arr');
    let cart_arr: Product[] = JSON.parse(cache_arr);
    let total = 0;
    cart_arr.forEach( element => {
      total += element.price;
    });
    return total;
  }

}
