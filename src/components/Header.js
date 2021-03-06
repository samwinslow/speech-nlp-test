import React from 'react'
import styled from 'styled-components'
import BrandTitle from './BrandTitle'
import {
  TabNavigation,
  Tab,
  DocumentOpenIcon,
} from 'evergreen-ui'
import theme from '../constants/theme'
import Amplify, { Auth } from 'aws-amplify'

const StyledHeader = styled.header`
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 1rem;
  background-color: ${theme.colors.accent};
`
const Navigation = styled(TabNavigation)`
  padding: 0.5rem;
`
const TabItem = styled(Tab)`
  font-family: ${theme.type.base.fontFamily};
  font-size: ${theme.type.base.fontSize};
  color: ${props => props.primary ? theme.colors.primary : theme.colors.text};
`

class Header extends React.Component {
  render() {
    const { user } = this.props
    return (
      <StyledHeader>
        <BrandTitle />
        <Navigation>
          <TabItem is="a" href="/" id={1} isSelected={true}>
            Home
          </TabItem>
          {/* <TabItem is="a" href="#" id={1} isSelected={false}>
            Demo
          </TabItem> */}
          <TabItem is="a" href="#pricing" id={1} isSelected={false}>
            Pricing
          </TabItem>
          { user ? (
            <TabItem is="a" href="/doc" id={1} isSelected={false} primary>
              Go to Editor &nbsp; <DocumentOpenIcon />
            </TabItem>
          ) : (
            <TabItem is="a" id={1} isSelected={false} primary /*onClick={() => Auth.federatedSignIn()}*/ href="https://samwinslow.typeform.com/to/xBMZ0XKz">
              Request Access
            </TabItem>
          )}
        </Navigation>
      </StyledHeader>
    )
  }
}

export default Header;
