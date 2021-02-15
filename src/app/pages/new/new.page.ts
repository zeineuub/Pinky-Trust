import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {NewsService} from '../../services/news.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  news = {articles: []};
  constructor(
    private menuCrl: MenuController,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.newsService.getArticles()
  	.subscribe(
  	response => this.news = response
    );
  }
  openMenu(){
    this.menuCrl.open('main');
  }
}
