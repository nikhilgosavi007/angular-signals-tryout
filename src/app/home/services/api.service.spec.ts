import {TestBed} from '@angular/core/testing'

import {ApiService, ITextApiResponse} from './api.service'
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing'
import {take} from 'rxjs'
import {HttpErrorResponse} from '@angular/common/http'

describe('ApiService', () => {
  let service: ApiService
  let controller: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    })
    service = TestBed.inject(ApiService)
    controller = TestBed.inject(HttpTestingController)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should call http get with the right url and respond with the correct response', (done) => {
    const slug: string = 'api1'
    const response: ITextApiResponse = {text: 'abc'}

    service
      .getText(slug)
      .pipe(take(1))
      .subscribe((res) => {
        expect(res).toEqual(response)
        expect(res).toBeTruthy()
        done()
      })

    const request: TestRequest = controller.expectOne({
      method: 'GET',
      url: `https://mock-api.akh.ovh/${slug}`,
    })

    request.flush(response)
  })

  it('should respond with the correctly in case of error', (done) => {
    const slug: string = 'api1'
    const response: ITextApiResponse = {text: 'abc'}

    service
      .getText(slug)
      .pipe(take(1))
      .subscribe({
        error: (error: HttpErrorResponse) => {
          expect(error).toBeTruthy()
          done()
        },
      })

    const request: TestRequest = controller.expectOne({
      method: 'GET',
      url: `https://mock-api.akh.ovh/${slug}`,
    })

    request.flush(null, {status: 404, statusText: 'Resource not found'})
  })
})
