
CREATE TABLE savings_accounts (
  account_id NUMBER,
  account_holder VARCHAR2(50),
  balance NUMBER
);
INSERT INTO savings_accounts VALUES (101, 'Alice', 5000);
INSERT INTO savings_accounts VALUES (102, 'Bob', 7500);
INSERT INTO savings_accounts VALUES (103, 'Charlie', 9000);
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  UPDATE savings_accounts
  SET balance = balance + (balance * 0.01);
  
  DBMS_OUTPUT.PUT_LINE('Monthly interest applied to all savings accounts.');
END;
/
BEGIN
  ProcessMonthlyInterest;
END;
/
select*from savings_accounts;

