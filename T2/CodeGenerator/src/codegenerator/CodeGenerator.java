/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package codegenerator;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.*;
import javassist.CannotCompileException;


public class CodeGenerator {

    public static void main(String[] args) throws NoSuchMethodException, IllegalArgumentException, InvocationTargetException {
        String className = "Calculadora";
        
        ClassGenerator cg = new ClassGenerator();
        
        try {
            cg.generateClass("Calculadora");
            cg.generateMethod("soma", "int val1", "int val2", "int soma = val1 + val2; java.lang.System.out.println(\"Soma = \" + soma)");
            cg.generateMethod("subtracao", "int val1", "int val2", "java.lang.System.out.println(\"Subtracao = \" + (val1 - val2))");
            cg.generateMethod("multiplicacao", "int val1", "int val2", "java.lang.System.out.println(\"Multiplicacao = \" + (val1 * val2))");
            cg.generateMethod("divisao", "int val1", "int val2", "java.lang.System.out.println(\"Divisao = \" + (val1 / val2))");
            
            Class calculadora = cg.getCtClass();
            
            Class[] arg = new Class[2];
            arg[0] = int.class;
            arg[1] = int.class;
            Method metodoSoma = calculadora.getDeclaredMethod("soma", arg);
            Method metodoSubtracao = calculadora.getDeclaredMethod("subtracao", arg);
            Method metodoMultiplicacao = calculadora.getDeclaredMethod("multiplicacao", arg);
            Method metodoDivisao = calculadora.getDeclaredMethod("divisao", arg);
            
            Object obj = calculadora.newInstance();
            
            System.out.println("\nNome da classe: " + obj.getClass().getSimpleName());
            System.out.println("Metodo Soma: " + metodoSoma.toString());
            System.out.println("Metodo Subtracao: " + metodoSubtracao.toString());
            System.out.println("Metodo Multiplicacao: " + metodoMultiplicacao.toString());
            System.out.println("Metodo Divisao: " + metodoDivisao.toString());
            
            System.out.println("");
            metodoSoma.invoke(obj, 10, 5);
            metodoSubtracao.invoke(obj, 10, 5);
            metodoMultiplicacao.invoke(obj, 10, 5);
            metodoDivisao.invoke(obj, 10, 5);
        } catch(CannotCompileException e) {
            e.printStackTrace();
        } catch(InstantiationException e) {
            e.printStackTrace();
        } catch(NoSuchMethodException e) {
            e.printStackTrace();
        } catch(IllegalAccessException e) {
            e.printStackTrace();
        } catch(InvocationTargetException e) {
            e.printStackTrace();
        }
    }
    
}
