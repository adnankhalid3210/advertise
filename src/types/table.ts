import { PropType } from "vue"

export type Row = { id: string } & { [key: string]: string | number | null }

export type ColumnListProp = PropType<Array<Column> | Array<string>>

export type valueConverter = (col: Column, row: Row) => string

export interface Column {
  field: string
  valueConverter: valueConverter
  text: string
  ignoreValue: boolean
  sortable: boolean
  sort: "asc" | "desc" | "no_order" | "" | null
  // 이거는 필요 없을듯
  index?: number
}
