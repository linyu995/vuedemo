//类泛型  T 表示泛型，具体什么类型是调用这个方法的时候决定的
class Student<T> {
    public list: T[] = [];
    add(num: T) {
        this.list.push(num);
    }
    min(): T {
        var minVal = this.list[0];
        for (var i = 0, leng = this.list.length; i < leng; i++) {
            if (minVal > this.list[i]) {
                minVal = this.list[i];
            }
        }
        return minVal;
    }

}
export default Student
