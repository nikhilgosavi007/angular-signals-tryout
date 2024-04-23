import {CommonModule} from '@angular/common'
import {Component} from '@angular/core'
import {UpdateFontSizeFormComponent} from '../update-font-size-form/update-font-size-form.component'
import {UpdateButtonBackgroundFormComponent} from '../update-button-background-form/update-button-background-form.component'
import {UpdateTextColorFormComponent} from '../update-text-color-form/update-text-color-form.component'

@Component({
  selector: 'bv-side-bar',
  standalone: true,
  imports: [
    CommonModule,
    UpdateFontSizeFormComponent,
    UpdateButtonBackgroundFormComponent,
    UpdateTextColorFormComponent,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {}
