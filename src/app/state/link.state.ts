import { State, Action, StateContext, Selector } from "@ngxs/store";
import { Link } from "../models/link.model";
import { AddLink, RemoveLink } from "../actions/link.actions";
import { Injectable } from "@angular/core";

export class LinkStateModel {
  links: Link[] = [];
}

@State<LinkStateModel>({
  name: 'links',
  defaults: {
    links: []
  }
})
@Injectable()

export class LinkState {
  @Selector()
  static getLinks(state: LinkStateModel){
    return state.links
  }

  @Action(AddLink)
  add({getState, patchState}: StateContext<LinkStateModel>, {payload}:AddLink) {
    const state = getState()
    patchState({
      links: [...state.links, payload]
    })
  }

  @Action(RemoveLink)
  remove({getState, patchState}: StateContext<LinkStateModel>, {payload}:RemoveLink) {
    patchState({
      links: getState().links.filter(x => x.id != payload)
    })
  }
}
