INSERT INTO department (name)
VALUES
    ('Administration'),
    ('Research&Development'),
    ('Marketing'),
    ('Sales'),
    ('HumanResources'),
    ('Accounting&Finance'),
    ('InformationTechnology');



INSERT INTO role (title, salary, department_id)
VALUES
    ('Manager', 120000, 10),
    ('Supervisor', 75000, 20),
    ('R&D Engineer', 95000, 30),
    ('Content Marketing Specialist', 52000, 40),
    ('Human Resources Specialist', 58000, 50),
    ('Accountant', 54000, 60),
    ('Software Engineer', 130000, 70),
    ('Junior Developer', 70000, 80);



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Ronald', 'Firbank', 10, NULL),
    ('Virginia', 'Woolf', 20, 1),
    ('Piers', 'Gaveston', 30, 1),
    ('Charles', 'LeRoi', 40, 1),
    ('Katherine', 'Mansfield', 50, 1),
    ('Dora', 'Carrington', 60, 1),
    ('Edward', 'Bellamy', 60, 1),
    ('Montague', 'Summers', 70, 1),
    ('Octavia', 'Butler', 70, 1),
    ('Unica', 'Zurn', 80, 1);