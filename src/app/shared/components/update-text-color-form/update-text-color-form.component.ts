import {CommonModule} from '@angular/common'
import {Component, inject, OnDestroy, OnInit} from '@angular/core'
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'
import {
  IColorCode,
  UpdateTextColorService,
} from './services/update-text-color.service'
import {Subscription} from 'rxjs'

@Component({
  selector: 'bv-update-text-color-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-text-color-form.component.html',
  styleUrl: './update-text-color-form.component.scss',
})
export class UpdateTextColorFormComponent implements OnInit, OnDestroy {
  private updateTextColorService = inject(UpdateTextColorService)
  private fb = inject(FormBuilder)
  private regexRGB = '^#(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$'
  updateTextColorForm = this.fb.group({
    textColor: ['', [Validators.required, Validators.pattern(this.regexRGB)]],
  })
  private subscriptions = new Subscription()

  // returns readonly updateTextColorForm form control
  get updateTextColorFormControl() {
    return this.updateTextColorForm.controls
  }

  ngOnInit(): void {
    this.setDefaultTextColorValue()
    this.subscriptions.add(this.subscribeToTextColorInputChanges())
  }

  // resets colorCode value to '#000000' in the store
  setDefaultTextColorValue() {
    this.updateTextColorService.setState({colorCode: '#000000'} as IColorCode)
  }

  // subscription to value changes inside textColor input field
  // sets textColor value based on user input, resets to default when input value is invalid
  subscribeToTextColorInputChanges() {
    return this.updateTextColorFormControl.textColor.valueChanges.subscribe(
      (value) => {
        if (this.updateTextColorFormControl.textColor.valid) {
          this.updateTextColorService.setState({colorCode: value} as IColorCode)
        } else {
          this.setDefaultTextColorValue()
        }
      }
    )
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }
}
