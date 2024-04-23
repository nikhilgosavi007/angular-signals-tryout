import {Component, inject, OnDestroy, OnInit, Signal} from '@angular/core'
import {CommonModule} from '@angular/common'
import {Subscription, take} from 'rxjs'
import {UpdateTextColorService} from '../../../shared/components/update-text-color-form/services/update-text-color.service'
import {UpdateButtonBackgroundFormService} from '../../../shared/components/update-button-background-form/services/update-button-background-form.service'
import {UpdateFontSizeFormService} from '../../../shared/components/update-font-size-form/services/update-font-size-form.service'
import {ApiService} from '../../services/api.service'
import {HttpClientModule, HttpErrorResponse} from '@angular/common/http'
import {CounterService, ICounter} from '../../services/counter.service'

@Component({
  selector: 'bv-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ApiService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  text: string = ''
  errorMessage: string = ''

  private updateTextColorService = inject(UpdateTextColorService)
  textColor: Signal<string> = this.updateTextColorService.select('colorCode')

  private updateButtonBackgroundFormServiceService = inject(
    UpdateButtonBackgroundFormService
  )
  buttonBackgroundColor: Signal<string> =
    this.updateButtonBackgroundFormServiceService.select('buttonBackground')

  private updateFontSizeFormServiceService = inject(UpdateFontSizeFormService)
  fontSize: Signal<string> =
    this.updateFontSizeFormServiceService.select('fontSize')

  private counterService = inject(CounterService)
  currentCount: Signal<number> = this.counterService.select('count')

  private apiService = inject(ApiService)

  ngOnInit(): void {
    this.getText()
    this.setDefaultCounterValue()
  }

  // calls ApiService to text from API, sets error message when request fails
  getText() {
    this.apiService
      .getText('api1')
      .pipe(take(1))
      .subscribe({
        next: (response) => (this.text = response.text),
        error: (error: HttpErrorResponse) => {
          this.errorMessage =
            'Oops! Something went wrong. Please reload your page.'
          console.error(error)
        },
      })
  }

  // increments value of counter by 1
  increment() {
    this.counterService.setState({count: this.currentCount() + 1} as ICounter)
  }

  // resets counter at 0
  setDefaultCounterValue() {
    this.counterService.setState({count: 0} as ICounter)
  }
}
