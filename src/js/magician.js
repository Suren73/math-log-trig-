import MathChar from './mathChar';

export default class Magician extends MathChar {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}
