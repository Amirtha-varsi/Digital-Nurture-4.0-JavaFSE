
CREATE TABLE bank_accounts (
  account_number NUMBER,
  holder_name VARCHAR2(50),
  balance NUMBER
);
INSERT INTO bank_accounts VALUES (301, 'John', 8000);
INSERT INTO bank_accounts VALUES (302, 'Sophia', 4000);
CREATE OR REPLACE PROCEDURE TransferFunds (
  from_acc IN NUMBER,
  to_acc IN NUMBER,
  amount IN NUMBER
) IS
  from_balance NUMBER;
BEGIN
  SELECT balance INTO from_balance FROM bank_accounts WHERE account_number = from_acc;

  IF from_balance < amount THEN
    DBMS_OUTPUT.PUT_LINE('Insufficient balance for transfer.');
  ELSE
    UPDATE bank_accounts SET balance = balance - amount WHERE account_number = from_acc;
    UPDATE bank_accounts SET balance = balance + amount WHERE account_number = to_acc;
    DBMS_OUTPUT.PUT_LINE('Transfer successful from ' || from_acc || ' to ' || to_acc);
  END IF;
END;
/
BEGIN
  TransferFunds(301, 302, 2000);
END;
/
select*from bank_accounts;