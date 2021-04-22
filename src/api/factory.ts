import HTTP from "@/api/default"
import qs, { ParsedUrlQuery } from "querystring"
import { ListResponse } from "@/api/listResponse"
import { ListResponseGeneric } from "@/api/listResponseGeneric"
import { QueryParam } from "@/api/queryParam"

export const decorateForIE = (query?: QueryParam) => {
  const ua = window.navigator.userAgent
  const msie = ua.indexOf("MSIE ")

  if (!(msie > 0 || !!navigator.userAgent.match(/Trident.*rv:11\./))) {
    return query
  }
  // If Internet Explorer, return version number
  const randomizer = new Date().getUTCMilliseconds()
  if (!query) {
    query = { randomizer: randomizer }
  } else {
    query["randomizer"] = randomizer
  }
  return query
}

export function APISet(featureURL: string): any {
  const restore = async (acID: string, query?: QueryParam) => {
    query = decorateForIE(query)
    if (query) {
      const q = qs.encode(query)
      const { data } = await HTTP.patch(`/${featureURL}/${acID}/deleted?${q}`, { restore: true })
      return data
    } else {
      const { data } = await HTTP.patch(`/${featureURL}/${acID}/deleted`, { restore: true })
      return data
    }
  }

  const get = async (acID: string, query?: QueryParam) => {
    query = decorateForIE(query)
    if (query) {
      const q = qs.encode(query)
      const { data } = await HTTP.get(`/${featureURL}/${acID}?${q}`)
      return data
    } else {
      const { data } = await HTTP.get(`/${featureURL}/${acID}`)
      return data
    }
  }

  const create = async (create: object) => {
    const { data } = await HTTP.post(`/${featureURL}`, create)
    return data
  }

  const remove = async (acID: string) => {
    const { data } = await HTTP.delete(`/${featureURL}/${acID}`)
    return data
  }

  const update = async (update: { id: string }) => {
    const { data } = await HTTP.put(`/${featureURL}/${update.id}`, update)
    return data
  }

  const list = async (query?: QueryParam): Promise<ListResponse> => {
    query = decorateForIE(query)

    if (query) {
      const q = qs.encode(query)
      const { data } = await HTTP.get(`/${featureURL}?${q}`)
      return data
    } else {
      const { data } = await HTTP.get(`/${featureURL}`)
      return data
    }
  }

  const bulkAction = async (bulk: object) => {
    const { data } = await HTTP.patch(`/${featureURL}`, bulk)
    return data
  }

  const upload = async (file: Blob, query?: ParsedUrlQuery, callback?: (progressEvent: any) => void) => {
    const d = new FormData()
    d.append("file", file)
    let f = `/${featureURL}`
    if (query) {
      f = `${f}?${qs.encode(query)}`
    }
    const { data } = await HTTP.put(f, d, {
      onUploadProgress: callback,
    })
    return data
  }

  const download = (query?: Record<string, any>) => {
    let url = `${process.env.VUE_APP_API_SERVER_HOST}/${process.env.VUE_APP_API_VERSION}/${featureURL}.xlsx`
    if (query) {
      const q = qs.encode(query)
      url += `?${q}`
    }
    window.open(url, "_blank")
  }

  const patchState = async ({ id, state }: { id: string; state: string }) => {
    const { data } = await HTTP.patch(`/${featureURL}/${id}`, {
      state: state,
    })
    return data
  }

  return { bulkAction, create, get, remove, update, list, upload, download, patchState }
}

export function APISetGeneric<T>(featureURL: string): any {
  const get = async (acID: string, query?: QueryParam): Promise<T> => {
    query = decorateForIE(query)
    if (query) {
      const q = qs.encode(query)
      const { data } = await HTTP.get(`/${featureURL}/${acID}?${q}`)
      return data
    } else {
      const { data } = await HTTP.get(`/${featureURL}/${acID}`)
      return data
    }
  }

  const create = async (create: object): Promise<T> => {
    const { data } = await HTTP.post(`/${featureURL}`, create)
    return data
  }

  const remove = async (acID: string): Promise<void> => {
    await HTTP.delete(`/${featureURL}/${acID}`)
  }

  const update = async (update: { id: string }): Promise<T> => {
    const { data } = await HTTP.put(`/${featureURL}/${update.id}`, update)
    return data
  }

  const list = async (query?: QueryParam): Promise<ListResponseGeneric<T>> => {
    query = decorateForIE(query)

    if (query) {
      const q = qs.encode(query)
      const { data } = await HTTP.get(`/${featureURL}?${q}`)
      return data
    } else {
      const { data } = await HTTP.get(`/${featureURL}`)
      return data
    }
  }

  const bulkAction = async (bulk: object): Promise<any> => {
    const { data } = await HTTP.patch(`/${featureURL}`, bulk)
    return data
  }

  const upload = async (file: Blob, query?: ParsedUrlQuery, callback?: (progressEvent: any) => void): Promise<any> => {
    const d = new FormData()
    d.append("file", file)
    let f = `/${featureURL}`
    if (query) {
      f = `${f}?${qs.encode(query)}`
    }
    const { data } = await HTTP.put(f, d, {
      onUploadProgress: callback,
    })
    return data
  }

  const download = (query?: Record<string, any>): void => {
    let url = `${process.env.VUE_APP_API_SERVER_HOST}/${process.env.VUE_APP_API_VERSION}/${featureURL}.xlsx`
    if (query) {
      const q = qs.encode(query)
      url += `?${q}`
    }
    window.open(url, "_blank")
  }

  return { bulkAction, create, get, remove, update, list, upload, download }
}

// 보드 아래에 있는 목록
export const makeBoardItemList = (fURL: string) => {
  return async ({
    board_id,
    owned,
    randomize,
    start,
    limit,
    deleted_after,
    updated_after,
    order,
  }: {
    board_id: string
    owned: boolean
    randomize: boolean
    start?: number
    limit?: number
    deleted_after?: number
    updated_after?: number
    order?: string
  }) => {
    // 자기 항목 목록
    let url = `/${fURL}?board_id=${board_id}`
    if (owned) {
      url = `/${fURL}?own=true&board_id=${board_id}`
    }

    if (randomize || decorateForIE()) {
      url += `&randomize=${new Date().getUTCMilliseconds()}`
    }

    if (start !== undefined && limit !== undefined) {
      url += `&s=${start}&l=${limit}`
    }

    if (deleted_after) {
      url += `&deleted_after=${deleted_after}`
    }

    if (updated_after) {
      url += `&updated_after=${updated_after}`
    }

    if (order) {
      url += `&o=${order}`
    }

    const { data } = await HTTP.get(url)
    return data
  }
}
