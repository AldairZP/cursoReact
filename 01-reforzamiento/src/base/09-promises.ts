const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //! yo quiero mi dinero!!
    // reject("mi agmigo se perdio");
    resolve(32);
    // resolve("respuesta"); // no funciona porque el generico es number
  }, 2000); // 2 segundos
});

myPromise
  .then((myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`);
  })
  .catch((reason) => {
    console.warn("");
  })
  .finally(() => {
    console.log("a seguir con mi vida");
  });
