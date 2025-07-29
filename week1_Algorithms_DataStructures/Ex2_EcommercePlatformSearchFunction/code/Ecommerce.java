package Ex2_EcommercePlatformSearchFunction.code;


import java.util.HashMap;

public class Ecommerce {

    
    static class Product {
        int productId;
        String productName;
        String category;

        public Product(int productId, String productName, String category) {
            this.productId = productId;
            this.productName = productName;
            this.category = category;
        }

        @Override
        public String toString() {
            return "[" + productId + ", " + productName + ", " + category + "]";
        }
    }

    public static void main(String[] args) {
        
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(103, "Smartphone", "Electronics"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Book", "Education")
        };

        
        HashMap<String, Product> productMap = new HashMap<>();
        for (Product p : products) {
            productMap.put(p.productName.toLowerCase(), p); 
        }

        
        String searchName = "Shoes";
        Product foundProduct = productMap.get(searchName.toLowerCase());

        
        System.out.println("Searching for product: " + searchName);
        if (foundProduct != null) {
            System.out.println(" Product found: " + foundProduct);
        } else {
            System.out.println(" Product not found.");
        }
    }
}

    

