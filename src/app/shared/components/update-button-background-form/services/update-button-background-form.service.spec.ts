import {TestBed} from '@angular/core/testing'

import {UpdateButtonBackgroundFormService} from './update-button-background-form.service'

describe('UpdateButtonBackgroundFormService', () => {
  let service: UpdateButtonBackgroundFormService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(UpdateButtonBackgroundFormService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
