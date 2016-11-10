export class Libro {
    constructor(public titulo: string,
                private autor: string,
                private sinopsis?: string
                //La ? es que es opcional
                ){}

    toString(): string{
        return "Libro: \n\t Titulo:  "
                +this.titulo +"\n\t"
                +"Autor:   " +this.autor +"\n\t"
                +"Sinopsis: " +this.sinopsis;
    }
}
