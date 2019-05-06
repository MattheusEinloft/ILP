import javassist.CannotCompileException;
import javassist.ClassPool;
import javassist.CtClass;
import javassist.CtMethod;

public class ClassGenerator {
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
}