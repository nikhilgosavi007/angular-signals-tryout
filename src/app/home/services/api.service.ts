import {inject, Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

export interface ITextApiResponse {
  text: string
}

@Injectable()
export class ApiService {
  private BASE_URL = 'https://mock-api.akh.ovh/'
  private httpClient = inject(HttpClient)

  // makes a GET request to the intended url and returns an observable of type ITextApiResponse
  getText(slug: string): Observable<ITextApiResponse> {
    const url = `${this.BASE_URL}${slug}`
    return this.httpClient.get<ITextApiResponse>(url)
  }
}
