import Character from './character';

export default class MathChar extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = 1;
    this.stoned = false;
  }

  set stoned(boolean) {
    this._stoned = boolean;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    this._attack -= this._attack * ((this.distance - 1) / 10);
    this.log = Math.log(this.distance) / Math.log(2);
    return (this._stoned) ? (this._attack) - (this.log) * 5 : this._attack;
  }
}
