import {Account, Image, Payment, User} from "../../types";
import {Row} from "../components";

export interface Rows {
  avatar: string
  username: string
  country: string
  name: string
  lastPayments: number
  posts: number
  userID: string
  payments: Payment[]
}

export const dataConverter = (images: Image[],users: User[], accounts: Account[] ) : Rows[] => {
  const rows : Rows[] = users.map((el, i) => ({
    ...el,
    ...accounts[i],
    ...images[i],
    lastPayments: getLatestPayment(accounts[i].payments),
    avatar: getAvatar(images[i])
  }))
  return rows;
}

const getLatestPayment = (payments : Payment[]) : number => {
    return payments.length ? payments[0].totalSum : 0
}

const getAvatar = (image: Image) : string=> image.url