import React from 'react';

function CartSvg( {width, height, fill}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 21 21" fill="none">
      <path d="M20.0957 6.30133H5.39115L4.5 3H1V4H4L7.06459 16.1746C6.33747 16.3866 5.80262 17.05 5.80262 17.8461C5.80262 18.8121 6.58553 19.5956 7.55219 19.5956C8.51884 19.5956 9.30175 18.8121 9.30175 17.8461C9.30175 17.4504 9.16525 17.0894 8.94409 16.7967H13.8574C13.6363 17.0894 13.4998 17.451 13.4998 17.8461C13.4998 18.8121 14.2827 19.5956 15.2487 19.5956C16.2147 19.5956 16.9982 18.8121 16.9982 17.8461C16.9982 16.8794 16.2153 16.0972 15.2487 16.0965H7.76547L7.42619 14.6967H17.2489L20.0951 6.30001L20.0957 6.30133ZM8.60153 17.8474C8.60153 18.4262 8.131 18.8967 7.55219 18.8967C6.97337 18.8967 6.50284 18.4262 6.50284 17.8474C6.50284 17.2686 6.97337 16.798 7.55219 16.798C8.131 16.798 8.60153 17.2692 8.60153 17.8474ZM16.2987 17.8474C16.2987 18.4262 15.8275 18.8967 15.2487 18.8967C14.6699 18.8967 14.1993 18.4262 14.1993 17.8474C14.1993 17.2686 14.6699 16.798 15.2487 16.798C15.8275 16.798 16.2987 17.2692 16.2987 17.8474ZM7.25687 13.9985L5.56047 7.00154H19.1199L16.7476 13.9985H7.25687Z" fill={fill}/>
    </svg> 
  )
}

export default CartSvg;