import {Injectable} from '@angular/core'
import {GlobalStore} from '../../shared/store/global-store'

export interface ICounter {
  count: number
}

@Injectable({
  providedIn: 'root',
})
export class CounterService extends GlobalStore<ICounter> {
  constructor() {
    super()
  }
}
