import { Link } from "../models/link.model";

export class AddLink {
  static readonly type = '[LINK] Add'
  constructor(public payload: Link) {}
}

export class RemoveLink {
  static readonly type = '[LINK] Remove'
  constructor(public payload: number) {}
}
