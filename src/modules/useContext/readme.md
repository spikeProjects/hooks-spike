主要用于全局状态；
或者是跨级父子组件的传递；

https://react.docschina.org/docs/context.html#caveats

https://react.docschina.org/docs/hooks-reference.html#usecontext

关于 较大数据的子组件优化，使用[useMemo](https://github.com/facebook/react/issues/15156)
https://react.docschina.org/docs/hooks-reference.html#usememo

Option 3: One component with useMemo inside
```
import {useMemo} from 'react';

function Button() {
  let appContextValue = useContext(AppContext);
  let theme = appContextValue.theme; // Your "selector"

  return useMemo(() => {
    // The rest of your rendering logic
    return <ExpensiveTree className={theme} />;
  }, [theme])
}
```