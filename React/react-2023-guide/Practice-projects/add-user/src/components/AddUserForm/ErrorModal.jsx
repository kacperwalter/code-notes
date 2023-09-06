import styled from 'styled-components'

const Modal = styled.div`
  position: absolute;
  top: 10rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  min-width: 40rem;
  z-index: 11;
  padding: 5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vh;
  height: 100vh;
  background-color: rgba(108, 122, 137, 0.7);
`

const ErrorModal = () => {
  return (
    <>
      <Modal>
        <h2>Some error message</h2>
        <p>Some other error message content</p>
      </Modal>
      <Background />
    </>
  )
}

export default ErrorModal