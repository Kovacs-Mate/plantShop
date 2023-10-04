import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { map } from "rxjs";
import { Plant } from "src/app/interfaces/plant";
import { BaseService } from "src/app/services/base.service";

@Component({
    selector: "app-plants",
    templateUrl: "./plants.component.html",
    styleUrls: ["./plants.component.css"],
    encapsulation: ViewEncapsulation.None
})
export class PlantsComponent implements OnInit {
    public list: Plant[] = [];
    private plantList: Plant[] = [];
    public searchWord: string = "";

    constructor(private bs: BaseService) {}

    ngOnInit(): void {
        this.getList();
    }

    private getList(): void {
        this.bs
            .getPlantList()
            .snapshotChanges()
            .pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))))
            .subscribe({
                next: data => {
                    this.plantList = data;
                    this.list = this.plantList;
                },
                error: error => console.log(error.message)
            });
    }

    public filterList(): void {
        if (this.searchWord !== "") {
            this.list = this.plantList.filter(result =>
                result.megnevezes.toLowerCase().includes(this.searchWord.toLowerCase())
            );
        } else this.list = this.plantList;
    }

    public clear(): void {
        this.searchWord = "";
        this.list = this.plantList;
    }
}
