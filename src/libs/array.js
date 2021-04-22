import _ from "lodash/array"

// id 와 같은 걸 찾는다
export const findIndexByID = (arr, id) => {
  return _.findIndex(arr, (n) => {
    return n.id === id
  })
}

export const sortByDisplayOrder = (a, b) => a.display_order - b.display_order

export const sortByCreatedAt = (a, b) => {
  // 날짜가 없으면 제일 최신
  if (!b.created_at) {
    return 1
  }
  if (!a.created_at) {
    return -1
  }
  return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
}

// 지정값으로 채운 배열을 반환함
export const makeFilledArray = (length, value) => {
  const a = []
  for (let i = 0; i < length; i++) {
    a.push(value)
  }
  return a
}

export const makeFilledArrayFunc = (length, value) => {
  const a = []
  for (let i = 0; i < length; i++) {
    a.push(value(i))
  }
  return a
}

if (!Array.prototype.findValue) {
  const map = function (array, mapFunction) {
    const arr = []
    for (let i = 0; i < array.length; i++) {
      const mapFunction1 = mapFunction(array[i])
      if (mapFunction1) {
        arr.push(mapFunction1)
      }
    }
    return arr && arr.length > 0
  }

  // 리스트의 propertyName 에서 value 에 해당하는 값이 있으면 해당값 반환
  // 점이 없는 경우 그냥 자기 프로퍼티에서만 찾고, 있으면 자식에게서 찾는다
  Array.prototype.findValue = function (propertyName, value) {
    if (!/\./.test(propertyName)) {
      const needle = new RegExp(value, "i")
      return map(this, (v) => {
        const haystack = v[propertyName]
        // check for string in haystack
        return needle.test(haystack) ? v : null
      })
    }

    const split = propertyName.split(".")
    const name0 = split[0]
    const name1 = split[1]
    const needle = new RegExp(value, "i")
    return map(this, (v) => {
      const haystack = v[name0][name1]
      // check for string in haystack
      // return the matched item if true, or null otherwise
      return needle.test(haystack) ? v : null
    })
  }
}
