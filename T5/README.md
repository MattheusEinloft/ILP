# T5 - DSLs  

## Descrição  
Implementação de uma pequena calculadora no ANTLR, utilizando Python para manipular os dados gerados pelo parser.  
Operações suportadas:
* Soma (+)
* Subtração (-)

## Requisitos  
* ANTLR 4.7.1  
* Java (versão 1.6 ou maior)  
* Python 3

## Instruções  
1. Configure o ANTLR (Instruções disponíveis em: https://github.com/antlr/antlr4/blob/master/doc/getting-started.md)  
1. Clone o projeto  
1. 
1. Execute os seguintes comandos:
```
$ cd ILP/T5
$ antlr4 -visitor -no-listener -Dlanguage=Python3 Calculator.g4
$ python3 main.py input.txt
```
