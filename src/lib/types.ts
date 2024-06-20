import Stripe from 'stripe'

import {
  _getTicketsWithAllRelations
} from './queries'

export type TicketDetails = Prisma.PromiseReturnType<
  typeof _getTicketsWithAllRelations
>

export type PricesList = Stripe.ApiList<Stripe.Price>