//函数接口
/*interface Teacher {
    (vaule:string,data:string):string
}*/
//泛型接口
/*interface Teacher {
    <T>(data:T):T
}
export  default  Teacher*/
//泛型接口
interface Teacher<T>{
    (data:T):T
}
export default Teacher
