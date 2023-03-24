import javax.jws.WebService;

@WebService
public class MyWebService {

    public int add(int a, int b) {
        return a + b;
    }

    public int subtract(int a, int b) {
        return a - b;
    }

    public int multiply(int a, int b) {
        return a * b;
    }

    public int divide(int a, int b) {
        if (b == 0) {
            throw new IllegalArgumentException("Cannot divide by zero");
        }
        return a / b;
    }
}


--------------------------------------------------------------------------------
import javax.xml.ws.Endpoint;

public class MyWebServicePublisher {

    public static void main(String[] args) {
        Endpoint.publish("http://localhost:8080/mywebservice", new MyWebService());
    }
}


------------------------------------------------------------------------------------

// Por fim, basta executar a classe "MyWebServicePublisher" para iniciar o servidor SOAP na porta 8080 e disponibilizar os endpoints (métodos)
// do nosso serviço. Para testar o servidor, podemos acessar o WSDL (Web Services Description Language) gerado automaticamente pelo JAX-WS em 
//"http://localhost:8080/mywebservice?wsdl" e utilizar algum cliente SOAP para fazer chamadas aos métodos.
