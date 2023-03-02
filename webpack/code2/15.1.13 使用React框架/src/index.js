// // 引入CSS文件
// require("./css/init");
// // 通过 CommonJS 规范导入 show 函数
// const show = require('./show');
// // 执行 show 函数
// show('itbaizhan');

// import Show from "./show"
// import "./css/init.css"

// Show("My Learn itbaizhan")

import React from "react"
import ReactDOM from "react-dom"
import Hello from "./components/Hello.jsx"
import "./css/init.css"

class App extends React.Component{
    render(){
        return(
            <div style={{ color:'red' }}>
                <Hello />
            </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById("root"))