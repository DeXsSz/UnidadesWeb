export class Calcular{
    convertir(num){
        let convertNumber = Number(num);
        return convertNumber;
    }
    // fix(num){
    //     let fixNum = num.toFixed(4)
    //     let resNum = Number(fixNum);
    //     return resNum;
    // }
    librasAkilos(libras){
        this.libras = libras;
        let kilos = 2.2046;
        let operacion = this.libras / kilos;
        return Number(operacion.toFixed(4));
    }
    librasAGramos(libras){
        this.libras = libras;
        let gramos = 453.59237;
        let operacion = this.libras / gramos;
        return Number(operacion.toFixed(4));
    }
    kilosAlibras(kilos){
        this.kilos = kilos;
        let libras = 2.20462262;
        let operacion= this.kilos * libras;
        return Number(operacion.toFixed(4));
    }
    kilosAGramos(kilos){
        this.kilos = kilos;
        let gramos = 1000;
        let operacion = this.kilos * gramos;
        return Number(operacion.toFixed(4));
    }
    gramosALibras(gramos){
        this.gramos = gramos;
        let libras = 0.00220462262;
        let operacion = this.gramos * libras;
        return Number(operacion.toFixed(4));
    }
    gramosAkilos(gramos){
        this.gramos = gramos;
        let kilos = 1000
        let operacion = this.gramos / kilos;
        return Number(operacion.toFixed(4));
    }
}