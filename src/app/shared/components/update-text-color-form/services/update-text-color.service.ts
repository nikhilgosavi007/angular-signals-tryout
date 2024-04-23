import {Injectable} from '@angular/core'
import {GlobalStore} from '../../../store/global-store'

export interface IColorCode {
  colorCode: string
}

@Injectable()
export class UpdateTextColorService extends GlobalStore<IColorCode> {
  constructor() {
    super()
  }
}
