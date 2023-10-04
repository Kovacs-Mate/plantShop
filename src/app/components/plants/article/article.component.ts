import { Component, Input } from "@angular/core";
import { Article } from "src/app/interfaces/article";
import { Plant } from "src/app/interfaces/plant";
import { BaseService } from "src/app/services/base.service";

@Component({
    selector: "app-article",
    templateUrl: "./article.component.html",
    styleUrls: ["./article.component.css"]
})
export class ArticleComponent {
    @Input() item: Plant;
    public quantity: number = 1;

    constructor(private bs: BaseService) {}

    public price(): number {
        const currentPrice = this.item.ar * this.quantity;
        return currentPrice;
    }

    addToCart(): void {
        const article: Article = {
            id: this.item.key,
            name: this.item.megnevezes,
            price: this.item.ar,
            quantity: this.quantity
        };
        this.bs.addToCart(article);
        this.quantity = 1;
    }
}
