
public class Singletontest {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("App started.");

        Logger logger2 = Logger.getInstance();
        logger2.log("Another event happened.");

        Logger logger3 = Logger.getInstance();
        logger3.log("An error occurred.");

        if (logger1 == logger2 && logger2 == logger3) {
            System.out.println(" Singleton is working. All instances are the same.");
        } else {
            System.out.println(" Singleton failed. Different instances exist.");
        }
    }
}
