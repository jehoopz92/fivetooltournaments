import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Stripe } from 'stripe'

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
    return this.http.get(this.baseURL + 'v1/products', {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    })
  }

  async createCheckout(order: any) {
    const stripe = new Stripe(this.apiKey, {
      apiVersion: '2020-08-27',
    })

    const session = await stripe.checkout.sessions
      .create({
        line_items: [
          {
            price: '25.00',
            quantity: 1,
            description: 'L',
          },
        ],
        mode: 'payment',
        success_url: `https://localhost:4200/`,
        cancel_url: `https://localhost:4200/#aboutus`,
      })
      .then((res) => {
        return res
      })
  }
}
