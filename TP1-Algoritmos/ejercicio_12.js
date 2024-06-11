class Vehiculo {
    marca;
    modelo;
    año;
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    obtenerInformacion(){
        return "Vehiculo " + `${this.marca} ${this.modelo} ${this.año}`;
    }
}
class Automovil extends Vehiculo{
    color;
    precio;
    constructor(marca, modelo, año, color, precio){
        super(marca, modelo, año);
        this.color = color;
        this.precio = precio;
    }

    obtenerInformacion(){
        return "Automovil " + super.obtenerInformacion() + ` ${this.color}` + ` ${this.precio}`;
    }
    }

    v1= new Vehiculo("Peugeot","208","2018");
    a1= new Automovil("Peugeot","207","2011", "Gris", "$9000000")
    document.write(v1.obtenerInformacion());
    document.write("<br>")
    document.write(a1.obtenerInformacion());
    