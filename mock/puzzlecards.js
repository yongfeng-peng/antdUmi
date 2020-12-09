const random_jokes = [
  {
    setup: 'What is the object oriented way to get wealthy ?',
      punchline: 'Inheritance',
  },
  {
    setup: 'To understand what recursion is...',
    punchline: "You must first understand what recursion is",
  },
  {
    setup: 'What do you call a factory that sells passable products?',
    punchline: 'A satisfactory',
  },
];
let random_joke_call_count = 0;
export default {
  'get /dev/random_joke': function (req, res) {
    const responseObj = random_jokes[random_joke_call_count % random_jokes.length];
    random_joke_call_count += 1;
    setTimeout(() => {
      res.json(responseObj);
    }, 3000);
  },
};

// mock 具备动态改变、延时返回等能力，如果你不需要这个能力，也可以简单地使用对象。
// export default {
//   'get /dev/random_joke': {
//     setup: 'What is the object oriented way to get wealthy ?',
//     punchline: 'Inheritance',
//   },
// };