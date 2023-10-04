import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/compat/database";
import { Plant } from "../interfaces/plant";
import { BehaviorSubject } from "rxjs";
import { Order } from "../interfaces/order";
import { Article } from "../interfaces/article";

@Injectable({
    providedIn: "root"
})
export class BaseService {
    plantListRef: AngularFireList<Plant>;
    orderListRef: AngularFireList<Order>;
    cartListRef: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);

    constructor(private afDb: AngularFireDatabase) {
        this.plantListRef = this.afDb.list("/plantShop/plants");
        this.orderListRef = this.afDb.list("/plantShop/orders");
    }

    public getPlantList(): AngularFireList<Plant> {
        this.plantListRef = this.afDb.list("/plantShop/plants");
        return this.plantListRef;
    }

    public getOrderlist(): AngularFireList<Order> {
        this.orderListRef = this.afDb.list("/plantShop/orders");
        return this.orderListRef;
    }

    public addOrder(item: Order): void {
        this.orderListRef.push(item);
        this.cartListRef.next([]);
    }

    public addToCart(item: Article): void {
        const currentCart = this.cartListRef.getValue();
        currentCart.push(item);
        this.cartListRef.next(currentCart);
    }

    public removeFromCart(key: string): void {
        const currentCart = this.cartListRef.getValue();
        const updatedCart = currentCart.filter(item => item.id !== key);
        this.cartListRef.next(updatedCart);
    }
}
