const morsecode = {
  a: "._",
  b: "_...",
  c: "_._.",
  d: "_..",
  e: ".",
  f: ".._.",
  g: "__.",
  h: "....",
  i: "..",
  j: ".___",
  k: "_._",
  l: "._..",
  m: "__",
  n: "_.",
  o: "___",
  p: ".__.",
  q: "__._",
  r: "._.",
  s: "...",
  t: "_",
  u: ".._",
  v: "..._",
  w: ".__",
  x: "_.._",
  y: "_.__",
  z: "__..",
  " ": " ",

  1: ".____",
  2: "..___",
  3: "...__",
  4: "...._",
  5: ".....",
  6: "_....",
  7: "__...",
  8: "___..",
  9: "____.",
  0: "_____",

  ".": "._._._",
  ",": "__..__",
  "?": "..__..",
  "'": ".____.",
  "/": "_.._.",
  "(": "_.__.",
  ")": "_.__._",
  "&": "._...",
  ":": "___...",
  ";": "_._._.",
  "=": "_..._",
  "+": "._._.",
  "-": "_...._",
  _: "..__._",
  '"': "._.._.",
  $: "..._.._",
  "!": "_._.__",
  "@": ".__._.",
};

// expected result .. / .-.. --- ...- . / -.-- --- ..-
const Result = (props) => {
  let str = "";
  let strone = props.userInput.toLowerCase().split("");

  const corrector = strone.some((morsecode) =>
    Object.entries(morsecode).join("").includes("€")
  );
  if (!corrector) {
    str = strone.map((element) => {
      return morsecode[element];
    });
  } else {
    str = "we live in 1890! € are not exist ";
  }

  //console.log(str.join(""));

  return (
    <textarea
      rows="10"
      cols="18"
      placeholder="your coded signal is:"
      value={str}
    ></textarea>
  );
};
export default Result;
