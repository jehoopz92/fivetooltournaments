import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiKey: string
  baseURL = environment.BASE_URL

  constructor(private http: HttpClient) {
    if (environment.production) {
      this.apiKey = environment.API_KEY_PROD
    } else {
      this.apiKey = environment.API_KEY_DEV
    }
  }

  getProducts() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.apiKey,
    })
    let options = { headers: headers }
    return this.http.get(this.baseURL + 'v1/products', {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    })
  }

  // createCheckout(order: any) {
  //   const requestData = `success_url=https://localhost:4200/&cancel_url=https://localhost:4200/#aboutme&mode=payment&line_items[0][price]=price_1KPSGJBd9ZzHiMEYBiheAw5I&line_items[0][quantity]=3&metadata[size]=L`
  //   return this.http.post(this.baseURL + 'v1/checkout/sessions', requestData, {
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       Authorization: `Bearer ${this.apiKey}`,
  //     },
  //   })
  // }

  // createOrder(order: any) {
  //   const requestData = `currency=usd&items[0][amount]=78&items[0][quantity]=3&metadata[size]=L`
  //   return this.http.post(this.baseURL + 'v1/orders', requestData, {
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       Authorization: `Bearer ${this.apiKey}`,
  //     },
  //   })
  // }
}
