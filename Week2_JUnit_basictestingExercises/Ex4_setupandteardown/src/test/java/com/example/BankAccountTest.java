package com.example;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class BankAccountTest {

    private BankAccount account;

    @Before
    public void setUp() {
        
        account = new BankAccount();
        System.out.println("Setup complete");
    }

    @After
    public void tearDown() {
        account.clear();
        System.out.println("Teardown complete");
    }

    @Test
    public void testDeposit() {
        
        account.deposit(1000);

        
        assertEquals(1000, account.getBalance(), 0.001);
    }

    @Test
    public void testWithdraw() {
        
        account.deposit(500);

        
        account.withdraw(200);

        
        assertEquals(300, account.getBalance(), 0.001);
    }

    @Test
    public void testOverWithdraw() {
        
        account.withdraw(100);  
       
        assertEquals(0, account.getBalance(), 0.001);
    }
}
