import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  ResponsiveContainer,
  ImageTitleContainer,
  EditorContainer,
  Heading,
  TextArea,
  TextStylesContainer,
  Button,
  ListItem,
  Image,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBold: false, isItalic: false, isUnderlined: false}

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderlined: !prevState.isUnderlined}))
  }

  render() {
    const {isBold, isItalic, isUnderlined} = this.state
    return (
      <AppContainer>
        <ResponsiveContainer>
          <ImageTitleContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageTitleContainer>
          <EditorContainer>
            <TextStylesContainer>
              <ListItem>
                <Button
                  data-testid="bold"
                  isActive={isBold}
                  onClick={this.onClickBold}
                >
                  <VscBold size={25} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  data-testid="italic"
                  isActive={isItalic}
                  onClick={this.onClickItalic}
                >
                  <GoItalic size={25} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  data-testid="underline"
                  isActive={isUnderlined}
                  onClick={this.onClickUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ListItem>
            </TextStylesContainer>
            <TextArea
              isBold={isBold}
              isItalic={isItalic}
              isUnderlined={isUnderlined}
            />
          </EditorContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
