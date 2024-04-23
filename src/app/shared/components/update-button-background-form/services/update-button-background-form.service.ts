import {Injectable} from '@angular/core'
import {GlobalStore} from '../../../store/global-store'

export interface IButtonBackground {
  buttonBackground: string
}

@Injectable({
  providedIn: 'root',
})
export class UpdateButtonBackgroundFormService extends GlobalStore<IButtonBackground> {
  constructor() {
    super()
  }
}
