const compiler = async (input) => {
  return (lexer) => (parser) => (transformer) => (generator) => generator(transformer(parser(lexer(input))));
};
