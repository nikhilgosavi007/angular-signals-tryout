import {TestBed} from '@angular/core/testing'

import {UpdateFontSizeFormService} from './update-font-size-form.service'

describe('UpdateFontSizeFormService', () => {
  let service: UpdateFontSizeFormService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(UpdateFontSizeFormService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
