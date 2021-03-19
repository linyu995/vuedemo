import arryInterface from './arrayInterface'
import uinitInterface from './uinitInterface'
interface Animal extends arryInterface,uinitInterface{
    name:string,
    age:string,
    [index:string]:string

}
export default Animal
