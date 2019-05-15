class Car {
    constructor(mark, model, year, engine, max_speed, fuel_type, tank_size, passengers_count, instant_fuel, consumption) {
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.max_speed = max_speed;
        this.engine = engine;
        this.fuel_type = fuel_type;
        this.passengers_count = passengers_count;
        this.tank_size = tank_size;
        this.instant_fuel = instant_fuel;
        this.consumption = consumption;

    }
    end_fuel(km) {
        var endFuel = this.instant_fuel - this.consumption * km / 100;
        if (endFuel > 0) {
            alert("go it")
        }
        else {
            alert("stop it")
        }

    }
    ydm(l) {
        var remain_fuel = this.tank_size - (this.instant_fuel + l);
        var overflow_fuel = (this.instant_fuel + lt) - this.tank_size;

        if (this.instant_fuel + l < this.tank_size) {
            console.log("it is not full " + remain_fuel + " you have free place")
        }
        else if (this.instant_fuel + lt == this.tank_size) {
            console.log("it is full")
        }
        else {
            console.log("it is full  " + overflow_fuel + " artiqdir")
        }
    }
}

var c200 = new Car("mercedes", "c200", 2002, 2, 240, "petrol", 67, "4", 50, 7);

c200.ydm(35);
c200.end_fuel(5);
