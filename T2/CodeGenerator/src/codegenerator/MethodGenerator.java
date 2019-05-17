package codegenerator;


public class MethodGenerator {

    public StringBuffer generateMethod(String methodName, String parameter1, String parameter2, String methodBody) {
        StringBuffer method = new StringBuffer();
        method.append("public void ")
              .append(methodName)
              .append("(")
              .append(parameter1)
              .append(", ")
              .append(parameter2)
              .append(") {")
              .append(methodBody)
              .append(";}");
        
        return method;
    }
    
}
