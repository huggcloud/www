'use strict'

document [`addEventListener`] (
`DOMContentLoaded`

, () => {
const img_elements = document [`querySelectorAll`] (`img`)

for (
let iteration = 0
; iteration < img_elements [`length`]
; ++ iteration
) {
const data_src = img_elements [iteration] [`getAttribute`] (`data-src`)

if (data_src) {img_elements [iteration] [`setAttribute`] (
`src`
, data_src
)}
}


/*  if (! (`WebSocket` in window)) {
    console [`log`] (`websockets disabled`)
    return
  }

  const websocket = new WebSocket (`wss://www.hugg.cloud:4343`)
  websocket [`addEventListener`] (`message`, message)

  function message (message_container) {
    const message = JSON [`parse`] (message_container [`data`])

    switch (message [`s`]) {
      case ``:
      break

      default:
    }
  }*/
}
)


/*window [`addEventListener`] (
`error`
, log
)*/
