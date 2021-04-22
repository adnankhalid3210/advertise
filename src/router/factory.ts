import {
  Component,
  Dictionary,
  NavigationGuard,
  PathToRegexpOptions,
  RedirectOption,
  RouteConfig,
  RoutePropsFunction,
} from "vue-router/types/router"
import deepmerge from "deepmerge"

function convertProps(
  props?: boolean | Record<string, any> | RoutePropsFunction,
): boolean | Record<string, any> | RoutePropsFunction | undefined {
  // params는 props에 다 넣는다
  const propsType = typeof props
  if (!props) {
    props = (route) => ({ ...route.params })
  } else if (propsType === "function") {
    const p = props as RoutePropsFunction
    props = (route) => ({
      ...route.params,
      ...p(route),
    })
  } else if (propsType === "object") {
    // 클로저 생성을 위해 캐시
    const pprops = props
    props = (route) => ({
      ...route.params,
      ...Object(pprops),
    })
  } else if (propsType === "string") {
    const idValue = String(props)
    switch (idValue) {
      case "me":
        props = (route) => ({
          ...route.params,
          id: "me",
        })
        break
      case "new":
        props = (route) => ({
          ...route.params,
          id: "new",
        })
        break
      default:
        props = (route) => {
          const id = route.params[idValue]
          return {
            ...route.params,
            id: id,
          }
        }
        break
    }
  }
  return props
}

export const r = (rparam: SomeRouteConfig): RouteConfig => {
  let { props, meta } = rparam
  const { path, name, component, components } = rparam
  meta = meta || {}
  if (components) {
    // 여러 컴포넌트가 있을 때
    const keys = Object.keys(components)
    const mp: Record<string, boolean | Record<string, any> | RoutePropsFunction | undefined> = {}
    keys.forEach((k) => {
      mp[k] = convertProps((props as Record<string, boolean | Record<string, any> | RoutePropsFunction | undefined>)[k])
    })
    props = mp
  } else {
    props = convertProps(props)
  }

  return {
    ...rparam,
    name: name,
    meta: meta,
    props: props,
    path: path!,
    component: component,
  }
}

export interface SomeRouteConfig {
  path?: string
  name?: string
  component?: Component
  components?: Dictionary<Component>
  redirect?: RedirectOption
  alias?: string | string[]
  children?: RouteConfig[]
  meta?: any
  beforeEnter?: NavigationGuard
  props?: boolean | Record<string, any> | RoutePropsFunction
  caseSensitive?: boolean
  pathToRegexpOptions?: PathToRegexpOptions
}

export const mr = (elem: RouteConfig, props?: SomeRouteConfig): RouteConfig => {
  if (props) {
    return r(deepmerge(elem, props))
  }
  return r(elem)
}

export const rr = (list: RouteConfig[], props?: SomeRouteConfig): RouteConfig[] => {
  return list.map((elem) => {
    return mr(elem, props)
  })
}
