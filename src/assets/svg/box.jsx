import * as React from "react"

function Box(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
      <path d="M3 20V8.7q-.425-.275-.712-.7Q2 7.575 2 7V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v3q0 .575-.288 1-.287.425-.712.7V20q0 .825-.587 1.413Q19.825 22 19 22H5q-.825 0-1.413-.587Q3 20.825 3 20zM5 9v11h14V9zm15-2V4H4v3zM9 14h6v-2H9zm-4 6V9v11z" />
    </svg>
  )
}

export default Box;