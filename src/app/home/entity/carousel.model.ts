export class Carousel{

    imageUrl:string;
    caption:string;

    constructor($imageUrl: string, $caption: string) {
		this.imageUrl = $imageUrl;
		this.caption = $caption;
	}
}