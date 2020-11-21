import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "newcode-dialog",
    templateUrl: "./newcode-dialog.component.html",
    styleUrls: ["./newcode-dialog.component.scss"],
})
export class NewcodeDialogComponent implements OnInit {
    @Input() barcode: string;
    constructor() {}

    ngOnInit(): void {}
}
