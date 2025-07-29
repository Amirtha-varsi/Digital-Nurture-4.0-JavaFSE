
CREATE TABLE employees (
  emp_id NUMBER,
  emp_name VARCHAR2(50),
  department VARCHAR2(30),
  salary NUMBER
);
INSERT INTO employees VALUES (201, 'David', 'HR', 30000);
INSERT INTO employees VALUES (202, 'Emma', 'IT', 40000);
INSERT INTO employees VALUES (203, 'Liam', 'IT', 42000);
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  dept_name IN VARCHAR2,
  bonus_percent IN NUMBER
) IS
BEGIN
  UPDATE employees
  SET salary = salary + (salary * bonus_percent / 100)
  WHERE department = dept_name;
  
  DBMS_OUTPUT.PUT_LINE(' Bonus applied for department: ' || dept_name);
END;
/
BEGIN
  UpdateEmployeeBonus('IT', 10);  
END;
/
select*from employees;
