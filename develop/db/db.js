const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password123',
    database: 'employees_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Function to view all departments
const viewAllDepartments = async () => {
    const [rows, fields] = await connection.execute('SELECT * FROM department');
    return rows;
};

// Function to view all roles
const viewAllRoles = async () => {
    const [rows, fields] = await connection.execute('SELECT * FROM role');
    return rows;
};

// Function to view all employees
const viewAllEmployees = async () => {
    const [rows, fields] = await connection.execute('SELECT * FROM employee');
    return rows;
};

// Function to add a department
const addDepartment = async (name) => {
    const result = await connection.execute(
        'INSERT INTO department (name) VALUES (?)', [name]
    );
    return result;
};

// Function to add a role
const addRole = async (title, salary, department_id) => {
    const result = await connection.execute(
        'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, department_id]
    );
    return result;
};

// Function to add an employee
const addEmployee = async (first_name, last_name, role_id, manager_id) => {
    const result = await connection.execute(
        'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [first_name, last_name, role_id, manager_id]
    );
    return result;
};

// Function to update an employee role
const updateEmployeeRole = async (role_id, employee_id) => {
    const result = await connection.execute(
        'UPDATE employee SET role_id = ? WHERE id = ?', [role_id, employee_id]
    );
    return result;
};

