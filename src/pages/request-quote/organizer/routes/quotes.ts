import * as api from "@/pages/request-quote/api/quotes"

const defaultPath = "/quotes"
const defaultName = "QuoteManagement"

export const mainPageName = `${defaultName}Main`
export const updatePageName = `${defaultName}UpdateForm`
export const newPageName = `${defaultName}NewForm`
export const formName = `${defaultName}Form`

const props = {
  bulkActionFunction: api.bulkAction,
  listFunction: api.list,
  fetchFunction: api.get,
  createFunction: api.create,
  updateFunction: api.update,
  newPageRouteName: newPageName,
  updatePageRouteName: updatePageName,
  mainPageRouteName: mainPageName,
  formName: formName,
}

export default [
  {
    path: `${defaultPath}`,
    name: `${defaultName}Main`,
    component: () => import(/* webpackChunkName: "quote" */ "@/pages/request-quote/organizer/Index.vue"),
    props,
  },
  {
    path: `${defaultPath}/new`,
    name: newPageName,
    component: () => import(/* webpackChunkName: "quote" */ "@/pages/request-quote/organizer/forms/CQuoteForm.vue"),
    meta: {
      parent: {
        name: mainPageName,
      },
    },
    props: {
      ...props,
      id: "new",
    },
  },
  {
    path: `${defaultPath}/:id`,
    name: updatePageName,
    component: () => import(/* webpackChunkName: "quote" */ "@/pages/request-quote/organizer/forms/CQuoteForm.vue"),
    props,
    meta: {
      parent: {
        name: mainPageName,
      },
    },
  },
]
