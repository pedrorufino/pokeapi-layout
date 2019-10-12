import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/';

@Component({
  selector: 'app-nav-generation',
  templateUrl: './nav-generation.component.html',
  styleUrls: ['./nav-generation.component.scss']
})
export class NavGenerationComponent implements OnInit {

  userId: string
  inscricao: Subscription

  constructor(private route: ActivatedRoute) {


  }

  show() {
    console.log(this.route)
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.userId = params['id'];
        console.log(this.userId);
      }
    )
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
