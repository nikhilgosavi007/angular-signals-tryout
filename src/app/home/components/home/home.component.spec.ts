import {ComponentFixture, TestBed} from '@angular/core/testing'

import {HomeComponent} from './home.component'
import {UpdateTextColorService} from '../../../shared/components/update-text-color-form/services/update-text-color.service'
import {UpdateFontSizeFormService} from '../../../shared/components/update-font-size-form/services/update-font-size-form.service'
import {UpdateButtonBackgroundFormService} from '../../../shared/components/update-button-background-form/services/update-button-background-form.service'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        UpdateTextColorService,
        UpdateFontSizeFormService,
        UpdateButtonBackgroundFormService,
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
