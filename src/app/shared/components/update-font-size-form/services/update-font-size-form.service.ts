import {Injectable} from '@angular/core'
import {GlobalStore} from '../../../store/global-store'

export interface IFontSize {
  fontSize: string
}

@Injectable({
  providedIn: 'root',
})
export class UpdateFontSizeFormService extends GlobalStore<IFontSize> {
  constructor() {
    super()
  }
}
