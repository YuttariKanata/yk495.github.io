def expl_minmax(expression):
    temp = expression.replace('(','\max(').replace('[','\min(').replace(']',')')
    return temp

# 例を試す
example_expression = "(3+[5-2])"
result = expl_minmax(example_expression)
print("元の式:", example_expression)
print("置換後の式:", result)
