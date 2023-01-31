import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #25262c;
  min-height: 100vh;
`
export const ResponsiveContainer = styled.div`
  width: 90%;
  background-color: #1b1c22;
  display: flex;
  height: 600px;
  flex-direction: row;
  align-items: center;
`
export const ImageTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  height: 600px;
  width: 45%;
`
export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 580px;
  align-items: center;
  border-radius: 5px;
`
export const Heading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #f8fafc;
`
export const Image = styled.img`
  width: 100%;
  max-width: 400px;
`
export const TextArea = styled.textarea`
  width: 100%;
  background-color: #25262c;
  font-family: 'Roboto';
  font-size: 20px;
  height: 100%;
  color: #f1f5f9;
  font-weight: ${props => (props.isBold === true ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic === true ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.isUnderlined === true ? 'underline' : 'normal'};
`
export const TextStylesContainer = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 0px;
`
export const Button = styled.button`
  border: none;
  background-color: transparent;
  margin-right: 15px;
  color: ${props => (props.isActive === true ? '#faff00' : '#f1f5f9')};
`
export const ListItem = styled.li`
  list-style-type: none;
`
