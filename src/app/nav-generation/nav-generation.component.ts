import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/';
import { HttpService} from './../core/services/http.service';

@Component({
  selector: 'app-nav-generation',
  templateUrl: './nav-generation.component.html',
  styleUrls: ['./nav-generation.component.scss']
})
export class NavGenerationComponent implements OnInit {

  generation: Array<any>

  userId: string
  inscricao: Subscription
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  constructor(private route: ActivatedRoute, private httpServece: HttpService) {


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

  getGeneration(gen){
    this.httpServece.getGeneration(gen).subscribe(dados => this.generation = dados)
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
