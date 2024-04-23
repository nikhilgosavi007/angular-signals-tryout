import {Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import {HeaderComponent} from './shared/components/header/header.component'
import {SideBarComponent} from './shared/components/side-bar/side-bar.component'
import {UpdateTextColorService} from './shared/components/update-text-color-form/services/update-text-color.service'
import {UpdateFontSizeFormService} from './shared/components/update-font-size-form/services/update-font-size-form.service'
import {UpdateButtonBackgroundFormService} from './shared/components/update-button-background-form/services/update-button-background-form.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SideBarComponent],
  providers: [
    UpdateTextColorService,
    UpdateFontSizeFormService,
    UpdateButtonBackgroundFormService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'brevo-assignment-angular'
}
