export function hello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('支持async、await');
    }, 2000);
  });
}