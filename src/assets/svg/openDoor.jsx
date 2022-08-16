import * as React from "react"

function OpenDoor(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
      <path d="M11 13q.425 0 .713-.288Q12 12.425 12 12t-.287-.713Q11.425 11 11 11t-.712.287Q10 11.575 10 12t.288.712Q10.575 13 11 13zm-4 8v-2l6-1V6.875q0-.375-.225-.675-.225-.3-.575-.35L7 5V3l5.5.9q1.1.2 1.8 1.025T15 6.85v12.8zm-4 0v-2h2V5q0-.85.588-1.425Q6.175 3 7 3h10q.85 0 1.425.575Q19 4.15 19 5v14h2v2zm4-2h10V5H7z" />
    </svg>
  )
}

export default OpenDoor;