const b = 30;
const d = 40;

const ff = () => {
  console.log(b);
  console.log(d)
}

const a = () => {
  console.log(d)
  const b = 10;
  const c = 20;
  ff();
}

const aa = a;

aa();