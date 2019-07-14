from CalculatorVisitor import CalculatorVisitor

class MyVisitor(CalculatorVisitor):
	def calculate(self, left, operator, right):
		if operator == "+":
			return left + right
		elif operator == "-":
			return left - right

	def is_operator(self, operator):
		if operator == "+" or operator == "-":
			return True
		else:
			return False

	def is_float(self, value):
		try:
			float(value)
			return True
		except ValueError:
			return False

	def visitOperation(self, ctx):
		left = None
		right = None
		operator = None
		for i in range(ctx.getChildCount()):
			if ctx.getChildCount() > 1:
				# left value
				if left is None:
					if str(type(ctx.getChild(i))) == "<class 'CalculatorParser.CalculatorParser.OperationContext'>":
						left = self.visitOperation(ctx.getChild(i))
					elif self.is_float(str(ctx.getChild(i))):
						left = float(str(ctx.getChild(i)))
				# operator
				elif operator is None:
					if self.is_operator(str(ctx.getChild(i))):
						operator = str(ctx.getChild(i))
				# right value
				elif right is None:
					if str(type(ctx.getChild(i))) == "<class 'CalculatorParser.CalculatorParser.OperationContext'>":
						right = self.visitOperation(ctx.getChild(i))
					elif self.is_float(str(ctx.getChild(i))):
						right = float(str(ctx.getChild(i)))
			else:
				result = float(str(ctx.getChild(i)))
				return result

		# calculate the operation
		result = self.calculate(left, operator, right)
		return result

	def visitExpression(self, ctx):
		output = ""
		for i in range(ctx.getChildCount()):
			if self.visitOperation(ctx.getChild(i)) is not None:
				output = self.visitOperation(ctx.getChild(i))
		return output

	def visitStatement(self, ctx):
		left = None
		right = None
		operator = ""
		result = None
		for i in range(ctx.getChildCount()):
			if isinstance(self.visitExpression(ctx.getChild(i)), float) or str(type(ctx.getChild(i))) == "<class 'CalculatorParser.CalculatorParser.OperationContext'>":
				if left is None:
					left = self.visitExpression(ctx.getChild(i))
				elif right is None:
					right = self.visitExpression(ctx.getChild(i))
			else:
				operator = str(ctx.getChild(i))

		if left is not None and operator is not None and right is not None:
			result = self.calculate(left, operator, right)
		elif left is not None and right is None:
			result = left
		elif left is None and right is not None:
			result = right

		return result

	def visitStart(self, ctx):
		for i in range(ctx.getChildCount()):
			if isinstance(self.visitStatement(ctx.getChild(i)), float):
				print("Result = " + str(self.visitStatement(ctx.getChild(i))) + "\n")
