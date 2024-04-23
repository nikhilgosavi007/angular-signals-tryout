import {TestBed} from '@angular/core/testing'

import {UpdateTextColorService} from './update-text-color.service'

describe('UpdateTextColorService', () => {
  let service: UpdateTextColorService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateTextColorService],
    })
    service = TestBed.inject(UpdateTextColorService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
