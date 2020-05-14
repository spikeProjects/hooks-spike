import React from 'react'
import {ThemeContext} from './theme-context';

// class ThemedButton extends React.Component {
export default function ThemedButton() {
  return (
    <ThemeContext.Consumer>
    {({theme, toggleTheme}) => (
      <button
        // style={{width: '120px', height: '30px', }}
        style={{backgroundColor: theme.background}}
      >这是个按钮</button>
    )}
    </ThemeContext.Consumer>
  );
}
// ThemedButton.contextType = ThemeContext;

// export default ThemedButton;
