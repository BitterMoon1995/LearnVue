//默认导入，路径要写对，名字可以任意写。
import nigger from './m1.js'
console.log(nigger)

//按需导入，和默认导入相互独立
//as取别名
import {s1,s2 as ss22,say} from "./m1";
console.log(s1)
console.log(ss22)
console.log(say)

//直接导入并执行模块代码
import './m2'