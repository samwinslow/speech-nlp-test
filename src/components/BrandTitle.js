import React from 'react'
import theme from '../constants/theme'

class BrandTitle extends React.Component {
  render () {
    const { style } = this.props
    return (
      <h1
        style={{
          ...style,
          fontSize: '1.618rem',
          fontFamily: theme.type.mono.fontFamily,
          lineHeight: 1,
          color: theme.colors.text,
        }}
      >
        roughdraft
      </h1>
    )
  }
}

export default BrandTitle;