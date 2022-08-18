import * as React from "react"

const Thermometer = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30px"
    height="50px"
    viewBox="0 0 14 31"
    {...props}
  >
    <path
      d="M5.724 280.268v8.478a2.47 2.47 0 1 0 2.58.002v-8.48z"
      style={{
        opacity: 1,
        fill: "#c0392b",
        fillOpacity: 1,
        fillRule: "evenodd",
        stroke: "none",
        strokeWidth: 0.35687089,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
      transform="translate(0 -266)"
    />
    <path
      style={{
        opacity: 1,
        fill: "none",
        fillOpacity: 1,
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 0.35687089,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
      d="M7.014 270.253a1.29 1.29 0 0 0-1.29 1.29v17.203a2.47 2.47 0 0 0-1.18 2.104 2.47 2.47 0 0 0 2.47 2.47 2.47 2.47 0 0 0 2.47-2.47 2.47 2.47 0 0 0-1.18-2.102v-17.204a1.29 1.29 0 0 0-1.29-1.29z"
      transform="translate(0 -266)"
    />
    <path
      style={{
        fill: "none",
        stroke: "#000",
        strokeWidth: ".37568492px",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      d="M9.164 275.593h1.307M9.164 282.156h1.307M9.164 277.234h1.307M9.164 273.953h1.307M9.164 280.515h1.307M9.164 283.796h1.307M9.164 285.437h2.277M9.164 278.875h2.277M9.164 272.312h2.277"
      transform="translate(0 -266)"
    />
    <path
      style={{
        fill: "none",
        stroke: "#fff",
        strokeWidth: 0.27738255,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      d="M5.358 290.853c.15.749.586 1.322 1.381 1.536v0"
      transform="translate(0 -266)"
    />
  </svg>
)

export default Thermometer
