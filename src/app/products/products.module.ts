import { NgModule } from '@angular/core';


import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';


@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],

  imports: [],

  providers: [...fromServices.services],
  
  exports: [...fromContainers.containers, ...fromComponents.components],
})
export class ProductsModule {}

