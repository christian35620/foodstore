import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";

import { BarcodeReaderComponent } from "./components/scanner/barcode-reader/barcode-reader.component";
import { ScannerContainerComponent } from "./components/scanner/scanner-container.component";
import { NewcodeDialogComponent } from "./components/scanner/newcode-dialog/newcode-dialog.component";

const routes: Routes = [{ path: "", component: ScannerContainerComponent }];

@NgModule({
    declarations: [
        BarcodeReaderComponent, //
        ScannerContainerComponent,
        NewcodeDialogComponent,
    ],
    imports: [
        CommonModule, //
        RouterModule.forChild(routes),
        MatDialogModule,
        MatCardModule,
    ],
    exports: [
        MatDialogModule, //
    ],
})
export class BarcodeScannerModule {}
