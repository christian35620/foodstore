import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderContainerComponent } from "./components/header/header-container.component";
import { FooterContainerComponent } from "./components/footer/footer-container.component";

@NgModule({
    declarations: [
        HeaderContainerComponent, //
        FooterContainerComponent,
    ],
    imports: [CommonModule],
})
export class CoreModule {}
