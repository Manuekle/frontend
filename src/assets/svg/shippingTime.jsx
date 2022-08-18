import * as React from "react"

function shippingTime(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M16.292 7.021l.583-.583-1.521-1.521V2.583h-.833V5.25zM5.438 14.188q.52 0 .885-.365t.365-.885q0-.521-.365-.886-.365-.364-.885-.364-.521 0-.886.364-.364.365-.364.886 0 .52.364.885.365.365.886.365zm5.729 0q.521 0 .885-.365.365-.365.365-.906 0-.5-.365-.865-.364-.364-.885-.364t-.886.364q-.364.365-.364.865 0 .541.364.906.365.365.886.365zm-7.875 4.145q-.375 0-.625-.25t-.25-.625v-1.687q-.355-.417-.552-.938-.198-.521-.198-1.083V5.896q0-.688.26-1.344.261-.656 1.094-1.146.833-.489 2.396-.739 1.562-.25 4.166-.146-.208.417-.343.854-.136.437-.198.896-2.188-.083-3.448.125-1.261.208-1.782.625H9q0 .458.062.896.063.437.188.854H3.417v2.333h7.166q.855.917 1.99 1.417t2.427.5v2.729q0 .562-.198 1.083-.198.521-.552.938v1.687q0 .375-.26.625-.261.25-.615.25h-.917q-.354 0-.614-.25-.261-.25-.261-.625v-.77h-6.5v.77q0 .375-.26.625-.261.25-.615.25zm8.333-7.479H3.417h9.833-1.625zm3.333-1.583q-1.77 0-2.989-1.219-1.219-1.219-1.219-2.99 0-1.77 1.219-2.989Q13.188.854 14.958.854q1.771 0 2.99 1.219 1.219 1.219 1.219 2.989 0 1.771-1.219 2.99-1.219 1.219-2.99 1.219zm-9.896 5.687h6.563q.667 0 1.146-.479.479-.479.479-1.167v-2.458H3.417v2.458q0 .688.479 1.167.479.479 1.166.479zm3.98-9.937h-5.23 5.23z" />
    </svg>
  )
}

export default shippingTime;
