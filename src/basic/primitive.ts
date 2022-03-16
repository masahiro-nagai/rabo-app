export default function primitiveSample(){
    let name: string = '永井'
    //name = "123"
    console.log("primitive sample 1:",typeof name, name)

    let age: number = 40
    console.log("primitive sample 2:",typeof age,age)

    const isOver20: boolean = age >= 20
    console.log("primitive sample 3:",typeof isOver20,isOver20)

}