class Battery {
    energy

    constructor(energy) {
        this.energy = energy;
    }

    setEnergy(energy) {
        this.energy = energy;
    }

    getEnergy() {
        return this.energy;
    }

    decreaseEnergy() {
        if (this.energy > 0) {
            this.energy--;
        } else {
            this.energy = 0;
        }
    }
}
let battery = new Battery(100)
let battery1 = new Battery(100)