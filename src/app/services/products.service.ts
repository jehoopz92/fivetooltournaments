import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { HttpClient, HttpResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiKey = environment.API_KEY
  baseURL = environment.BASE_URL

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.baseURL + 'v1/products', {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    })
  }
}
