import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent 
{
singlepage:any
constructor(private hero:HeroService){}
ngOnInit(): void {
let id=localStorage.getItem('id')
let singlepageDataArray=this.hero.getData() 
console.log(singlepageDataArray);
this.singlepage=singlepageDataArray.filter(e=>e.id==id) 
console.log(this.singlepage)
}
}