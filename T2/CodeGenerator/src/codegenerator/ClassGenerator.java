package codegenerator;

import javassist.CannotCompileException;
import javassist.ClassPool;
import javassist.CtClass;
import javassist.CtMethod;

public class ClassGenerator {
    private ClassPool pool;
    private CtClass cc;
    private final MethodGenerator mg = new MethodGenerator();;
    
    public void generateClass(String className) throws CannotCompileException {
        pool = ClassPool.getDefault();
        cc = pool.makeClass(className);
    }
    
    public void generateMethod(String methodName, String parameter1, String parameter2, String methodBody) throws CannotCompileException {
        StringBuffer method = mg.generateMethod(methodName, parameter1, parameter2, methodBody);
        cc.addMethod(CtMethod.make(method.toString(), cc));
    }
    
    public Class getCtClass() throws CannotCompileException {
        return cc.toClass();
    }
}