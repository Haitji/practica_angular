export class Articulo{

	constructor($id: number, $nombre: string, $precio: number, $favorito: boolean, $imagen: string,$precioDescuento: number) {
		this.id = $id;
		this.nombre = $nombre;
		this.precio = $precio;
		this.favorito = $favorito;
		this.imagen = $imagen;
        this.precioDescuento=$precioDescuento;
	}
    private id:number;
    private nombre: string;
    private precio: number;
    private favorito: boolean;
    private imagen: string;
    private precioDescuento: number;

    // Getters
    public getPrecioDescuento(): number {
        return this.precioDescuento;
    }

    // Setters
    public setPrecioDescuento(precioDescuento: number): void {
        this.precioDescuento = precioDescuento;
    }

    // Getters
    public getId(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public getFavorito(): boolean {
        return this.favorito;
    }

    public getImagen(): string {
        return this.imagen;
    }

    // Setters
    public setId(id: number): void {
        this.id = id;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }

    public setFavorito(favorito: boolean): void {
        this.favorito = favorito;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }
}