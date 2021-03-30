import Character from './character';

export default class MathChar extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = 1;
    this.stoned = false;
  }

  set stoned(boolean) {
		this._stoned = boolean; // eslint-disable-line
  }

  get stoned() {
		return this._stoned; // eslint-disable-line
  }

  set attack(value) {
		this._attack = value; // eslint-disable-line
  }

  get attack() {
		this._attack -= this._attack * ((this.distance - 1) / 10); // eslint-disable-line
    this.log = Math.log(this.distance) / Math.log(2);
		return (this._stoned) ? (this._attack) - (this.log) * 5 : this._attack; // eslint-disable-line
  }
}
