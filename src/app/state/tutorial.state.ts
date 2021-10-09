import { State, Action, StateContext, Selector } from "@ngxs/store";
import { Tutorial } from "../models/tutorial.model";
import { AddTutorial, RemoveTutorial } from "../actions/tutorial.actions";
import { Injectable } from "@angular/core";

export class TutorialStateModel {
  tutorials: Tutorial[] = [];
}

@State<TutorialStateModel>({
  name: 'tutorials',
  defaults: {
    tutorials: []
  }
})
@Injectable()

export class TutorialState {
  @Selector()
  static getTutorials(state: TutorialStateModel){
    return state.tutorials
  }

  @Action(AddTutorial)
  add({getState, patchState}: StateContext<TutorialStateModel>, {payload}:AddTutorial) {
    const state = getState()
    patchState({
      tutorials: [...state.tutorials, payload]
    })
  }

  @Action(RemoveTutorial)
  remove({getState, patchState}: StateContext<TutorialStateModel>, {payload}:RemoveTutorial) {
    patchState({
      tutorials: getState().tutorials.filter(x => x.name != payload)
    })
  }
}
