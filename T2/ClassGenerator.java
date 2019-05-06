import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import javassist.CannotCompileException;
import javassist.ClassPool;
import javassist.CtClass;
import javassist.CtMethod;

public class ClassGenerator {
    private static final String className = "ClasseTeste";
    private static final String methodName = "HelloWorld";
    private static final String methodBody = "int n1 = 10;int n2 = 20;java.lang.System.out.println(\"Soma = \" + (n1+n2));";

    public static Class generateClass(String className, String methodName, String methodBody) throws CannotCompileException {
        ClassPool pool = ClassPool.getDefault();
        CtClass cc = pool.makeClass(className);

        StringBuffer method = new StringBuffer();
        method.append("public void ")
              .append(methodName)
              .append("() {")
              .append(methodBody)
              .append(";}");

        cc.addMethod(CtMethod.make(method.toString(), cc));

        return cc.toClass();
    }

    public static void main(String[] args) {
        try {
            Class classGenerated = generateClass(className, methodName, methodBody);
            Object obj = classGenerated.newInstance();
            Method helloWorldMethod = classGenerated.getDeclaredMethod(methodName);
            helloWorldMethod.invoke(obj);

            System.out.println("\nNome da classe = " + obj.getClass().getSimpleName());
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