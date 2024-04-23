import {CommonModule} from '@angular/common'
import {Component, inject, OnDestroy, OnInit} from '@angular/core'
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'
import {
  IButtonBackground,
  UpdateButtonBackgroundFormService,
} from './services/update-button-background-form.service'
import {Subscription} from 'rxjs'

@Component({
  selector: 'bv-update-button-background-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-button-background-form.component.html',
  styleUrl: './update-button-background-form.component.scss',
})
export class UpdateButtonBackgroundFormComponent implements OnInit, OnDestroy {
  private updateButtonBackgroundFormServiceService = inject(
    UpdateButtonBackgroundFormService
  )
  private fb = inject(FormBuilder)
  private regexRGB = '^#(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$'
  updateBackgroundColorForm = this.fb.group({
    buttonBackgroundColor: [
      '',
      [Validators.required, Validators.pattern(this.regexRGB)],
    ],
  })
  private subscriptions = new Subscription()

  // returns readonly updateBackgroundColorForm form control
  get updateBackgroundColorFormControl() {
    return this.updateBackgroundColorForm.controls
  }

  ngOnInit(): void {
    this.setDefaultButtonBackgroundColorValue()
    this.subscriptions.add(this.subscribeToBtnBgColorInputChanges())
  }

  // resets buttonBackground value to '#c9c9c9' in the store
  setDefaultButtonBackgroundColorValue() {
    this.updateButtonBackgroundFormServiceService.setState({
      buttonBackground: '#c9c9c9',
    } as IButtonBackground)
  }

  // subscription to value changes inside buttonBackgroundColor input field
  // sets buttonBackground value based on user input, resets to default when input value is invalid
  subscribeToBtnBgColorInputChanges() {
    return this.updateBackgroundColorFormControl.buttonBackgroundColor.valueChanges.subscribe(
      (value) => {
        if (this.updateBackgroundColorFormControl.buttonBackgroundColor.valid) {
          this.updateButtonBackgroundFormServiceService.setState({
            buttonBackground: value,
          } as IButtonBackground)
        } else {
          this.setDefaultButtonBackgroundColorValue()
        }
      }
    )
  }

  ngOnDestroy(): void {}
}
