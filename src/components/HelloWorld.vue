<template>
  <div>
    <div>{{state.name}}</div>
    <div>{{age}}</div>
  </div>
</template>

<script lang="ts">
import {defineComponent,onMounted,reactive} from  'vue'
import Student from "../util/classfanxing/student";
import f from "@/util/fanxing/fangxingDemo";
import Teacher from "@/util/interfacefanxing/interDemo";
import Dog from "@/util/interface/uinitInterface";
import Cat from "../util/interface/arrayInterface"
import Animal from "@/util/interface/extendsInterface";
import Work from "@/util/interface/functionInterface";
import Person from "@/util/interface/functionfanxininterface"
import People from "@/util/interface/functionfanxinginterfaceOne";
import EnumDemo from "@/util/enumdemo/enumDemo"
const demo=defineComponent({
   setup(){
     const state=reactive({
       name:'里面',
       age:23
     })
     onMounted(()=>{
       /*T 表示泛型，具体什么类型是调用这个方法的时候决定的*/
       //1.函数泛型
       state.name=f('话语')
      // 2.类泛型
      var a=new Student<string>();
      a.add('蝴蝶花')
       var b=new Student<number>();
      b.add(555)
       //3.接口泛型
      var c:Teacher=function<T>(value:T):T {
        return value
      }
      var d=c<number>(5)
      var e=c<string>("理解")
       //4.联合类型接口案例
       var dog:Dog={
         name:'豆豆',
         age:'89'
       }
       console.log(dog.age)
      //数组接口
        var agelist:Cat;
        agelist["John"] = 15
       //接口继承
        var obj:Animal={
          name:'苦海',
          age:'89',
        }
        //函数接口
        var work:Work=function (value:string,value2:string):string {
             return value
        }
        var k= work('零');
        console.log(k);
       //泛型函数接口
       var lk:Person<number>=function getData<T> (value:T):T {
         return value
       }
       var l= lk(5)
       console.log(l)

       //泛型函数接口二
       var again:People=function<T> (value:T):T {
          return value
       }
       var kk=again<string>("大户")
       console.log(kk)
      //枚举
       Famous.AGE
       Famous.NAME
       //symbol
      var a= Symbol('key')
       var c=Symbol('key')
       a===c //错误的

     })
     return {
       state,name
     }
   },
   data(){
     return{
       age:18,
       /*scores:0*/

     }
   },
   mounted() {
   /* this.scores=score*/
   }
})
  export default demo
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
