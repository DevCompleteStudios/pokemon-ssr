import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
// import { PLATFORM_ID } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'pricing',
  imports: [],
  templateUrl: './pricing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPage implements OnInit {

  // private platform = inject(PLATFORM_ID);

  constructor(
    private title:Title,
    private meta:Meta,
  ){}


  ngOnInit(): void {
    // if(isPlatformBrowser(this.platform)){
    //   document.title = 'Pricing Page';
    // }

    // document.title = 'Pricing Page';
    this.title.setTitle('Pricing Page');
    // this.meta.updateTag({name: 'description', content: 'Este es mi Pricing page'});
    // this.meta.updateTag({name: 'og:title', content: 'Pricing'});
    // this.meta.updateTag({name: 'keywords', content: 'Hola,Mundo,Yael,Buscando,Por,Letras,Indexacion,Y,SEO'});
  }


}
