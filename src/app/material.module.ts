import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import{ MatMenuModule} from  '@angular/material/menu';
import{ MatIconModule} from '@angular/material/icon';
import{ MatCardModule} from '@angular/material/card';
import{ MatSidenavModule} from '@angular/material/sidenav';
import{ MatFormFieldModule} from '@angular/material/form-field';
import{ MatInputModule} from '@angular/material/input';
import{ MatTooltipModule} from '@angular/material/tooltip';
import{ MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatToolbarModule,
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatToolbarModule
    ]
})
export class MaterialModule { }