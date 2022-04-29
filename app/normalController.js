const testHello = () => {
  return "hello wak";
};

const mathMultiply = async (num1, num2) => {
  return new Promise((resolve, reject) => {
    resolve(num1 * num2);
  });
};

const mathAdd = async (num1, num2) => {
  try {
    return (await num1) + num2;
  } catch (err) {
    console.log({ err });
    throw "missing arguments";
  }
};

module.exports = {
  testHello,
  mathMultiply,
  mathAdd,
};
