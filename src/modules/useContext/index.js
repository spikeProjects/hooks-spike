import React, {Component, useContext} from 'react'

//1.使用 React.createContext(themes.light);
//2.使用 1 中的结果作为父组件，并将需要传给子组件的值绑定value
//3.useContext 的参数为1 获取到的MyContext
//4.这样当 组件父级最近一个 MyContext.provider 更新，子组件useContext会拿到最新的值
//5.当在provider的子组件中变更context对象的时候，是不能重新渲染的，要使用consumer

//注意放到一个对象上，防止每次使用新的对象导致所有渲染
const themes = {
  light: {
    foreground: "red",
    background: "yello"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

let ThemeContext;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      light: {
        foreground: "red",
        background: "yello"
      },
      dark: {
        foreground: "#ffffff",
        background: "#222222"
      }
    };
    setTimeout(function(){
      themes.light.foreground = 'green'
      console.log(themes.light.foreground)
    }, 1000)
  }
  render() {
    ThemeContext = React.createContext(this.state.light);

    return (
      <ThemeContext.Provider value={this.state.light}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

function Toolbar(props) {
  return (
    <div>
      <div onClick={() => {
        alert('fuck' + themes.light.foreground)
        themes.light.foreground = 'green'
        alert('fuck' + themes.light.foreground)
        }}>值发生变化 TODO</div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  console.log(theme.background, theme.foreground)
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
