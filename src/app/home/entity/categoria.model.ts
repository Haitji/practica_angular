export class Categoria{

	constructor($id: number, $imagen: string, $nombre: string) {
		this.id = $id;
		this.imagen = $imagen;
		this.nombre = $nombre;
	}
    private id: number;
    private imagen:string;
    private nombre:string;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }
    // Getters
    public getImagen(): string {
        return this.imagen;
    }

    public getNombre(): string {
        return this.nombre;
    }

    // Setters
    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
}