import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FaqComponent} from './faq/faq.component';
import {RouterModule} from "@angular/router";
import {CardModule} from "primeng/card";
import {InplaceModule} from "primeng/inplace";
import {PanelModule} from "primeng/panel";


@NgModule({
    declarations: [
        FaqComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: FaqComponent},
        ]),
        CardModule,
        InplaceModule,
        PanelModule,
    ]
})
export class FaqModule {
}
