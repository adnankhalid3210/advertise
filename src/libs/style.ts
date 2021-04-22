export function getStyle(el, styleProp) {
  const defaultView = (el.ownerDocument || document).defaultView
  // W3C standard way:
  if (defaultView && defaultView.getComputedStyle) {
    // sanitize property name to css notation
    // (hypen separated words eg. font-Size)
    styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase()
    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp)
  } else if (el.currentStyle) {
    // IE
    // sanitize property name to camelCase
    styleProp = styleProp.replace(/-(\w)/g, function (str, letter) {
      return letter.toUpperCase()
    })
    const value = el.currentStyle[styleProp]
    // convert other units to pixels on IE
    if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
      return (function (value) {
        const oldLeft = el.style.left,
          oldRsLeft = el.runtimeStyle.left
        el.runtimeStyle.left = el.currentStyle.left
        el.style.left = value || 0
        value = el.style.pixelLeft + "px"
        el.style.left = oldLeft
        el.runtimeStyle.left = oldRsLeft
        return value
      })(value)
    }
    return value
  }
}

export function elementResizeWatcher(element, callback) {
  const resolve = function (element) {
    return typeof element === "string"
      ? document[[".", "#"].indexOf(element.charAt(0)) < 0 ? "getElementById" : "querySelector"](element)
      : element
  }
  let observer
  let watched = []
  const checkForElementChanges = function (data) {
    const w = data.el.offsetWidth,
      h = data.el.offsetHeight
    if (data.offsetWidth !== w || data.offsetHeight !== h) {
      data.offsetWidth = w
      data.offsetHeight = h
      data.cb({
        target: data.el,
        width: w,
        height: h,
      })
    }
  }
  const checkForChanges = function () {
    watched.forEach(checkForElementChanges)
  }
  let started = false
  const self = {
    start: function () {
      if (!started) {
        // Listen to the window resize event
        window.addEventListener("resize", checkForChanges)

        // Listen to the element being checked for width and height changes
        observer = new MutationObserver(checkForChanges)
        observer.observe(document.body, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true,
        })

        started = true
      }
    },
    stop: function () {
      if (started) {
        window.removeEventListener("resize", checkForChanges)
        observer.disconnect()
        started = false
      }
    },
    addListener: function (element, callback) {
      if (typeof callback !== "function") return

      const el = resolve(element)
      if (typeof el === "object") {
        watched.push({
          el: el,
          offsetWidth: el.offsetWidth,
          offsetHeight: el.offsetHeight,
          cb: callback,
        })
      }
    },

    removeListener: function (element, callback) {
      const el = resolve(element)
      watched = watched.filter(function (data) {
        return !(data.el === el && data.cb === callback)
      })
    },
  }

  self.addListener(element, callback)

  self.start()

  return self
}
