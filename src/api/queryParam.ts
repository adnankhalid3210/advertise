export interface QueryParam {
  [key: string]: string | number | boolean | string[] | number[] | boolean[] | undefined | null

  //OrderBy     string `json:"order_by" query:"o"`
  // id.asc or id.desc,created_at.asc
  o?: string
  //QueryString string `json:"query_string" query:"q"`
  q?: string
  // qt=name,position
  //QueryTarget string `json:"query_target" query:"qt"`
  qt?: string
  //Start       int    `json:"start" query:"s"`
  s?: number
  //Limit       int    `json:"limit" query:"l"`
  l?: number
}
