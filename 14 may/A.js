class araba{
    constructor(mark,model,engine,year,tank,color,consumption){
        this.mark=mark;
        this.model=model;
        this.engine=engine;
        this.year=year;
        this.tank=tank;
        this.color=color;
        this.consumption=consumption;
        this.initialFluidspeed = 60;
    }
    endFluidspeed(km) {
        var endFluid = this.initialFluidspeed - this.consumption * km / 100;
        if (endFluid >= 0) {
            return endFluid;



        } else {      return "not oil";
        }

    }
     oilStation(Fluid) {
        var fulltank= this.tank-Fluid;
        return fulltank;
    }
}


var Mercedes=new araba("mercedes benz","c200",2.4,2002,75,"red",7.7);
Mercedes.initialFluidspeed=Mercedes.endFluidspeed(450)
Fluid = Mercedes.petrolst(BMW.initialFluidspeed)
console.log(Mercedes.initialFluidspeed)
console.log(Fluid)