export class Product {
    public name: string;
    public description: string;
    public price: string;
    public category: string;
    public imagePath: string;
    public isAvailable: boolean;

    constructor(category: string, name: string, price: string, description: string, imagePath: string, isAvailable: boolean) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.imagePath = imagePath;
        this.isAvailable = isAvailable;
    }
}