
package com.cognizant.spring_country_service_in.service;

import com.cognizant.spring_country_service_in.model.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {
    public Country getCountry(String code) {
        ApplicationContext context = new ClassPathXmlApplicationContext("Country.xml");
        List<Country> countryList = (List<Country>) context.getBean("countryList");

        return countryList.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);
    }
}
