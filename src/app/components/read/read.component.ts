import { Component, NgModule, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Link } from '../../models/link.model';
import { LinkState } from '../../store/state/link.state';
import { Observable } from 'rxjs';
import { RemoveLink } from '../../store/actions/link.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

//  tutorials$: Observable<Tutorial>
  @Select(LinkState.getLinks) links$ : any

  constructor(private store: Store) {
    //this.tutorials$ = this.store.select(state => state.tutorials.tutorials)
  }

  delLink(id:number) :void {
    this.store.dispatch(new RemoveLink(id))
  }

  ngOnInit(): void {
  }

}
