import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { LoggerService } from '@tp-ui/tp-core';
import { TpWindowService } from '@tp-ui/tp-window';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, filter, map, tap, withLatestFrom } from 'rxjs/operators';
import { <%= classify(name) %>State } from './tp-<%= dasherize(name) %>.reducers';
import { Tp<%= classify(name) %>Service } from '../services';
import { Load, LoadFail, LoadSuccess, Tp<%= classify(name) %>ActionTypes } from './tp-<%= dasherize(name) %>.actions';
import { select<%= classify(name) %>Loaded } from './tp-<%= dasherize(name) %>.selectors';

@Injectable()
export class Tp<%= classify(name) %>Effects {
  @Effect()
  load<%= classify(name) %>$: Observable<Action> = this.actions$.pipe(
    ofType(Tp<%= classify(name) %>ActionTypes.Load),
    withLatestFrom(this.store.pipe(select(select<%= classify(name) %>Loaded))),
    filter(([, loaded]) => !loaded),
    exhaustMap(([loadAction]: [Load, boolean]) =>
      this.<%= camelize(name) %>Service.get<%= classify(name) %>().pipe(
        tap(() => {
          if (loadAction.payload) {
            this.tpWindowService.progressStart(loadAction.payload);
          }
        }),
        map((payload: any) => new LoadSuccess(payload)),
        catchError((error: HttpErrorResponse) => of(new LoadFail(error))),
        tap((failAction: LoadFail) => {
          const error = failAction.payload;
          if (error instanceof HttpErrorResponse) {
            this.loggerService.error(this.translateService.instant('ui.common.service.fetch.error'), error);
          }
          if (loadAction.payload) {
            this.tpWindowService.progressComplete(loadAction.payload);
          }
        })
      )
    )
  );

  constructor(
    private actions$: Actions,
    private <%= camelize(name) %>Service: Tp<%= classify(name) %>Service,
    private loggerService: LoggerService,
    private translateService: TranslateService,
    private store: Store<<%= classify(name) %>State>,
    private tpWindowService: TpWindowService
  ) {}
}
