import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-pokemon',
  templateUrl: './nav-pokemon.component.html',
  styleUrls: ['./nav-pokemon.component.scss']
})
export class NavPokemonComponent implements OnInit {
  public userId: string
  inscricao: Subscription

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    // console.log(this.route)
    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => {
    //     this.userId = params['id'];
    //     console.log(this.userId);
    //   }
    // )
  }

  // ngOnDestroy() {
  //   this.inscricao.unsubscribe();
  // }

}
