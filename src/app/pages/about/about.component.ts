import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'about',
  imports: [],
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutComponent implements OnInit {

  constructor(
    private title:Title,
    private meta:Meta,
  ){}


  ngOnInit(): void {
    this.title.setTitle('About Page');
    this.meta.updateTag({name: 'description', content: 'Este es mi About page'});
    this.meta.updateTag({name: 'og:title', content: 'RedSocial'});
    this.meta.updateTag({name: 'keywords', content: 'Hola,Mundo,Yael,Buscando,Por,Letras,Indexacion,Y,SEO'});
  }


}
