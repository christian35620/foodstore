import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: "scanner",
        loadChildren: () =>
            import("./barcode-scanner/barcode-scanner.module").then(
                (m) => m.BarcodeScannerModule
            ),
    },
    { path: "", redirectTo: "scanner", pathMatch: "full" }, // redirect to `first-component`
    { path: "**", redirectTo: "scanner" }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
