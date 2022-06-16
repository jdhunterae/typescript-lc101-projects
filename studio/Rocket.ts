import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
  name: string;
  totalCapacityKg: number;
  cargoItems: Array<Cargo> = [];
  astronauts: Array<Astronaut> = [];

  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }

  sumMass(items: Payload[]): number {
    let result = 0;

    for (let item of items) {
      result += item.massKg;
    }

    return result;
  }

  currentMassKg(): number {
    return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
  }

  canAdd(item: Payload): boolean {
    return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
  }

  addCargo(cargo: Cargo): boolean {
    if (!this.canAdd(cargo)) {
      return false;
    }

    this.cargoItems.push(cargo);
    return true;
  }

  addAstronaut(astronaut: Astronaut): boolean {
    if (!this.canAdd(astronaut)) {
      return false;
    }

    this.astronauts.push(astronaut);
    return true;
  }
}
