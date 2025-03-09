import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'pricing',
  imports: [],
  templateUrl: './pricing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPage implements OnInit {

  constructor(
    private title:Title,
    private meta:Meta,
  ){}


  ngOnInit(): void {
    this.title.setTitle('Pricing Page');
    this.meta.updateTag({name: 'description', content: 'Este es mi Pricing page'});
    this.meta.updateTag({name: 'og:title', content: 'Pricing'});
    this.meta.updateTag({name: 'keywords', content: 'Hola,Mundo,Yael,Buscando,Por,Letras,Indexacion,Y,SEO'});
  }


}
