export class Ficha{


	constructor($id: number, $nombre: string, $precio: number, $tallas_disponibles: string[], $color: string, $imagen: string) {
		this.id = $id;
		this.nombre = $nombre;
		this.precio = $precio;
		this.tallasDisponibles = $tallas_disponibles;
		this.color = $color;
		this.imagen = $imagen;
	}
    private id:number;
    private nombre: string;
    private precio: number;
    private tallasDisponibles: string[];
    private color: string;
    private imagen: string;

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

    public getTallasDisponibles(): string[] {
        return this.tallasDisponibles;
    }

    public getColor(): string {
        return this.color;
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

    public setTallasDisponibles(tallasDisponibles: string[]): void {
        this.tallasDisponibles = tallasDisponibles;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }

}