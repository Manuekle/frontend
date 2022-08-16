import * as React from "react"

function Undo(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={40} width={40} {...props}>
      <path d="M23.625 31.667H11.667v-2.792h11.958q2.833 0 4.875-1.833 2.042-1.834 2.042-4.584 0-2.75-2.042-4.604T23.625 16H11.958l4.584 4.625-1.917 1.917-7.958-7.917 7.958-7.958 1.917 1.958-4.584 4.583h11.667q3.958 0 6.833 2.667t2.875 6.583q0 3.917-2.875 6.563t-6.833 2.646z" />
    </svg>
  )
}

export default Undo;