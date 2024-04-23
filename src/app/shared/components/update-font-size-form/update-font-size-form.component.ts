import {CommonModule} from '@angular/common'
import {Component, inject, OnInit} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {
  IFontSize,
  UpdateFontSizeFormService,
} from './services/update-font-size-form.service'

export enum fontSizes {
  fs12 = '12',
  fs14 = '14',
  fs16 = '16',
  fs18 = '18',
  fs20 = '20',
}

@Component({
  selector: 'bv-update-font-size-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-font-size-form.component.html',
  styleUrl: './update-font-size-form.component.scss',
})
export class UpdateFontSizeFormComponent implements OnInit {
  fontSizesArray: Array<fontSizes> = Object.values(fontSizes)
  selectedFontSize: fontSizes | 'default' = 'default'
  private updateFontSizeFormServiceService = inject(UpdateFontSizeFormService)

  ngOnInit(): void {
    this.setDefaultFontSizeValue()
  }

  // resets fontSize value to '16' in the store
  setDefaultFontSizeValue() {
    this.updateFontSizeFormServiceService.setState({
      fontSize: '16',
    } as IFontSize)
  }

  // subscription to value changes inside fontSize select input field
  // sets fontSize value based on user input, resets to default(16) when 'default' is selected
  onFontSizeChange($event: fontSizes | 'default') {
    if ($event !== 'default') {
      this.updateFontSizeFormServiceService.setState({
        fontSize: $event,
      } as IFontSize)
    } else {
      this.setDefaultFontSizeValue()
    }
  }
}
