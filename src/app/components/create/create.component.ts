import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddLink } from '../../store/actions/link.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store) { }

  addLink(name: string, url: string){
    this.store.dispatch(new AddLink({name: name, url: url, id: Date.now()}))
  }

  ngOnInit(): void {
  }

}
