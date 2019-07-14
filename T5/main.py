import sys
import re
from antlr4 import *
from CalculatorLexer import CalculatorLexer
from CalculatorParser import CalculatorParser
from MyVisitor import MyVisitor

def verify_input(input):
	input = str(input).replace(" ", "")
	invalids_list = re.findall("\([0-9]+\)", input)

	valid = input
	if len(invalids_list) > 0:
		for invalid in invalids_list:
			no_opening = str(invalid).replace("(", "")
			no_parentheses = str(no_opening).replace(")", "")
			valid = input.replace(invalid, no_parentheses)

	return valid

def main(argv):
	input_stream = FileStream(argv[1])
	input_list = str(input_stream).splitlines()

	for input in input_list:
		print("Input = " + input)
		input_string = verify_input(input)

		lexer = CalculatorLexer(InputStream(input_string))
		stream = CommonTokenStream(lexer)
		parser = CalculatorParser(stream)

		tree = parser.start()
		visitor = MyVisitor()
		visitor.visit(tree)

if __name__ == '__main__':
	main(sys.argv)
