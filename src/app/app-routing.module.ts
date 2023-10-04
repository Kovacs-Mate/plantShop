import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PlantsComponent } from "./components/plants/plants.component";
import { CartComponent } from "./components/cart/cart.component";

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "plants", component: PlantsComponent },
    { path: "cart", component: CartComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
