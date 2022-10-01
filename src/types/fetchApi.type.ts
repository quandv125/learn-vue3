// #1
// (1): import type { ResItemType } from '@/types/fetchApi.type'
// (2): const myData = ref<ResItemType[]>([])

// #2
// interface subType {
//   age: string
//   address: string
//   phone: string
//   postcode: number
// }
// interface Item {
//     id: number
//     username: string
//     info: subType[]
//   }
// const data = ref<Array<Item>>([])
export interface TopLevel {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}
