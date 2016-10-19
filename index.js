import SwaggerParser from './parsers/';
const json = require('./input/test.json');
const compiler = async (input, outputPath) => {
  return (lexer) => (parser) => (transformer) => (generator) => generator(transformer(parser(lexer(input))));
};

SwaggerParser(json);
