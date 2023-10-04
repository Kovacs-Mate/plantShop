import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from "./components/home/home.component";
import { PlantsComponent } from "./components/plants/plants.component";
import { CartComponent } from "./components/cart/cart.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { environment } from "./environment/environment";
import { ArticleComponent } from "./components/plants/article/article.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PlantsComponent,
        CartComponent,
        NavbarComponent,
        ArticleComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
