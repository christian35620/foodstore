import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-scanner-container",
    templateUrl: "./scanner-container.component.html",
    styleUrls: ["./scanner-container.component.scss"],
})
export class ScannerContainerComponent implements OnInit {
    barcode: string;
    constructor() {}

    ngOnInit(): void {}

    readBarCode(barcode: string) {
        this.barcode = barcode;
    }
}
