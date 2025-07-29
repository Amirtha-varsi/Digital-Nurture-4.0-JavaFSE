package com.cognizant.spring_learn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringLearnApplication {
    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        LOGGER.info("START");

        displayCountry();

        LOGGER.info("END");
    }

    public static void displayCountry() {
        // Load the Spring XML file
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

        // Get the country bean
        Country country = context.getBean("country", Country.class);

        // Show a clean console output
        System.out.println("\n================== Country Details ==================");
        System.out.println("Country Code : " + country.getCode());
        System.out.println("Country Name : " + country.getName());
        System.out.println("=====================================================\n");

        LOGGER.debug("Country : {}", country.toString());
    }
}
