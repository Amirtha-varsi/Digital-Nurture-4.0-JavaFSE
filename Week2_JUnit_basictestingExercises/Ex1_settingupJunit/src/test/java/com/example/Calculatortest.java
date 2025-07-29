package com.example;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class Calculatortest {

    @Test
    public void testAdd() {
        Calculator calc = new Calculator();
        int result = calc.add(5, 10);
        assertEquals(15, result);
    }
}
