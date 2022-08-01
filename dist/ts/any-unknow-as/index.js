"use strict";
// let x: string; 
// const y = [1, 2];
// y.push('hello');
// let x:any = 10;
// let x1: number = x;
// let x2: string = x;
// let x3: string[] = x;
// let x4: [string, boolean] = x;
// let x5: null = x;
// let x6: undefined = x;
// let x7: any = x;
// x7 = x1;
// x7 = x2;
// x7 = x3;
// x7 = x4;
// x7 = x5;
// x7 = x6;
const ifHasProduct = true;
function getProduct() {
    let productName;
    productName = ifHasProduct ? 'Apple' : null;
    return productName;
}
const product = getProduct();
if (typeof product == 'string') {
    product.split('');
}
// const fetchData = async () => {
//   const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const data = resp.json() as unknown as {userId: number, id: number, title: string, completed: boolean}
// }
4;
// export {};
