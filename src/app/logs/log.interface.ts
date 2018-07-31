import {Category} from '../categories/category.interface'


export interface Log {
    _id: String,
    title: String,
    date: Date,
    category: Category[]
  }