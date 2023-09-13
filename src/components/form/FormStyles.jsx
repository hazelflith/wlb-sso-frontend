import styled from 'styled-components'

function getWindowHeight(height) {
  return `height: ${height}px;`
}

export const FormMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  ${({height}) => height && getWindowHeight(height)};
  background: linear-gradient(130deg, #014a62, rgba(2, 121, 130, 0.68));
  /*background-image: url('https://storage.googleapis.com/wlb-dev/1562591350969_man.jpg');*/
`
export const FormInput = styled.input`
  background: white;
  border-style: solid;
  border-color: grey;
  border-radius: 10px;
  padding: 20px;
`
