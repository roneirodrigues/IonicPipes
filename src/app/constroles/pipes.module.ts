import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SortbyPipe } from './sortby.pipe';

@NgModule({
    declarations: [SortbyPipe],
    imports: [IonicModule],
    exports: [SortbyPipe]
})
export class PipesModule { }
