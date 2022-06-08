INSERT INTO department (name)
VALUES
    (Administration),
    (Research & Development),
    (Marketing),
    (Sales),
    (Human Resources),
    (Accounting & Finance)
    (Information Technology);



INSERT INTO role (title, salary, department_id)
VALUES
    (Manager, 120000, 10),
    (Supervisor, 75000, 20),
    (R&D Engineer, 95000, 30),
    (Content Marketing Specialist, 52000, 40),
    (Human Resources Specialist, 58000, 50),
    (Accountant, 54000, 60),
    (Software Engineer, 130000, 70),
    (Junior Developer, 70000, 80);



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Ronald', 'Firbank', 'Manager', NULL),
    ('Virginia', 'Woolf', 'Supervisor', 1),
    ('Piers', 'Gaveston', 'R&D Engineer', 1),
    ('Charles', 'LeRoi', 'Content Marketing Specialist', 1),
    ('Katherine', 'Mansfield', 'Human Resources Specialist', 1),
    ('Dora', 'Carrington', 'Accountant', 1),
    ('Edward', 'Bellamy', 'Accountant', 1),
    ('Montague', 'Summers', 'Software Engineer', 1),
    ('Octavia', 'Butler', 'Software Engineer', 1),
    ('Unica', 'Zurn', 'Junior Developer', 1);