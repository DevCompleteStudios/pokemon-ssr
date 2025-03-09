import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'contact',
  imports: [],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPage implements OnInit {

  constructor(
    private title:Title,
    private meta:Meta,
  ){}


  ngOnInit(): void {
    this.title.setTitle('Contact Page');
    this.meta.updateTag({name: 'description', content: 'Este es mi Contact page'});
    this.meta.updateTag({name: 'og:title', content: 'Contact'});
    this.meta.updateTag({name: 'keywords', content: 'Hola,Mundo,Yael,Buscando,Por,Letras,Indexacion,Y,SEO'});
  }


}