export const createChannelIO = () => {
  const elementById = document.getElementById("ch-plugin")
  if (elementById) {
    return
  }

  const pluginId = "1523708c-dc64-4a9c-ad5f-84ad6baf1c31"

  window["channelPluginSettings"] = {
    plugin_id: pluginId,
    //"user": {
    //"id": "{{.UserPhone}}",
    //"name": {{.UserName}},
    //"mobileNumber": "{{.UserPhone}}"
    //}
  }

  const node = document.createElement("div")
  node.id = "ch-plugin"
  document.body.appendChild(node)
  const s = document.createElement("script")
  s.type = "text/javascript"
  s.async = true
  s.src = "//cdn.channel.io/plugin/ch-plugin-web.js"
  s.setAttribute("charset", "UTF-8")
  const x = document.getElementsByTagName("script")[0]
  x.parentNode.insertBefore(s, x)
}

export const removeChannelIO = () => {
  const elementById = document.getElementById("ch-plugin")
  if (elementById) {
    elementById.parentNode.removeChild(elementById)
  }
}
