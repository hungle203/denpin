class Lamp {
    status
    battery

    constructor(battery) {
        this.status = false;
        this.battery = battery;
    }

    setBattery(battery) {
        this.battery = battery
    }

    getBatteryInfo() {
        return this.battery.getEnergy();
    }

    turnOnOff() {
        this.status = !this.status;
    }

    light() {
        if (this.getBatteryInfo() > 0 && this.status) {
            this.battery.decreaseEnergy();
            console.log('Linghting')
        } else {
            console.log('Not lighting')
        }
    }
}
let lamp = new Lamp(battery)