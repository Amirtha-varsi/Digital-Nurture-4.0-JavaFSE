package Ex7_FinancialForecasting.code;
import java.util.HashMap;

public class financial {
    

    
    static HashMap<Integer, Double> memo = new HashMap<>();

    
    public static double calculateFutureValue(double currentValue, double rate, int years) {
        if (years == 0) {
            return currentValue;
        }

        
        if (memo.containsKey(years)) {
            return memo.get(years);
        }

        
        double future = (1 + rate) * calculateFutureValue(currentValue, rate, years - 1);

        
        memo.put(years, future);
        return future;
    }

    public static void main(String[] args) {
        double currentValue = 10000; 
        double growthRate = 0.08;    
        int years = 10;              

        double result = calculateFutureValue(currentValue, growthRate, years);
        System.out.printf("Future value after %d years = ₹%.2f\n", years, result);
    }
}

    

