grammar Calculator;

/*
 * Parser Rules
 */

start: statement EOF;

statement: (expression OPERATOR expression)+ | expression;

expression: '(' operation ')' | operation;

operation: NUMBER OPERATOR NUMBER | NUMBER |  operation OPERATOR operation | operation OPERATOR '(' operation ')';

/*
 * Lexer Rules
 */

NUMBER: [0-9]+;

OPERATOR: '+' | '-' ;

WHITESPACE: [ \t\r\n]+ -> skip;
