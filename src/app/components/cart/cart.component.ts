import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/interfaces/article";
import { Order } from "src/app/interfaces/order";
import { BaseService } from "src/app/services/base.service";

@Component({
    selector: "app-cart",
    templateUrl: "./cart.component.html",
    styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
    public cartList = [];
    public customerName: string = "";
    public customerAddress: string = "";

    constructor(private bs: BaseService) {}

    ngOnInit(): void {
        this.bs.cartListRef.subscribe(data => (this.cartList = data));
    }

    public price(id: string): number {
        const article: Article[] = this.cartList.filter(item => item.id === id);
        return article[0].price * article[0].quantity;
    }

    public totalPrice(): number {
        let price: number = 0;
        this.cartList.forEach(item => {
            price += item.price * item.quantity;
        });
        return price;
    }

    public removeFromCart(id: string): void {
        this.bs.removeFromCart(id);
    }

    public placeOrder(): void {
        const order: Order = {
            status: false,
            customerName: this.customerName,
            customerAddress: this.customerAddress,
            list: this.cartList
        };
        this.bs.addOrder(order);
    }
}
