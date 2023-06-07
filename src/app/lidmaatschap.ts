import {Lid} from "./lid";
import {Team} from "./team";

export class Lidmaatschap {
  id: number = 0;
  name: string = "";
  lid!: Lid;
  team!: Team;
}
