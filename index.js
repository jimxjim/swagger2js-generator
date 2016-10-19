const test = async () => {
  const a = await new Promise((resolve) => resolve(123))
  console.log(a);
};

test();
