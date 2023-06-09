import styled from 'styled-components'

const CartButton = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1.5rem;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  
  }
  .auth-btn-user {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    /* color: var(--clr-primary-5); */
    border: 0.025rem solid var(--clr-primary-5);
    border-radius: .25rem;
    padding: .25rem;
    font-size: 1.5rem;
  }

  .auth-favicon-user{
    margin-right:.25rem;
    color: var(--clr-primary-5);
  }

  .auth-user{
    font-size: 1.2rem;
  }
`
export default CartButton