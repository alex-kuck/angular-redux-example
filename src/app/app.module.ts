import { TodoActions } from './todo-actions';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { IAppState, rootReducer } from './store';
import { CounterActions } from './counter-actions';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [
    CounterActions,
    TodoActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
    private devTools: DevToolsExtension) {

    const storeEnhancers = devTools.isEnabled() ? [devTools.enhancer()] : [];

    ngRedux.configureStore(
      rootReducer,
      {},
      [],
      storeEnhancers
    );
  }
}
