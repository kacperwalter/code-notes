abstract class Department {
  // private name: string
  // private readonly id: string
  static fiscalYear = 2023

  // protected instead of private - we can refer to these variables in inherited classes (while private can not)
  protected employees: string[] = []

  // public and private variables - we can write it like this (we dont have to declare the variables two times)
  constructor(public name: string, protected readonly id: number) {
    // this.id = id
    // this.name = name
    console.log(Department.fiscalYear)
  }

  static createEmployee(name: string): {
    name: string
  } {
    return { name: name }
  }

  // this in this method is making sure that we always refer to the Department object
  // abstract method to overwrite in inherited classes
  abstract describe(this: Department): void

  addEmployee(employee: string): void {
    this.employees.push(employee)
  }

  printEmployeeInformation(): void {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class ITDepartment extends Department {
  admins: string[]

  constructor(id: number, admins: string[]) {
    super('IT', id) // super() calls the constructor from inherited class
    this.admins = admins
  }

  describe(): void {
    console.log(`IT Department - ID ${this.id}`)
  }

  showAdmins(): void {
    console.log(this.admins)
  }
}

class AccountingDepartment extends Department {
  private lastReport: string
  private static instance: AccountingDepartment

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport
    throw new Error('No report found')
  }

  set mostRecentReport(value: string) {
    this.addReport(value)
  }

  // singleton - that means that we wan't only one instantion of the class
  // we can achive that by using private constructor
  private constructor(id: number, private reports: string[]) {
    super('Accounting', id)
    this.lastReport = reports[0]
  }

  static getInstance() {
    if (AccountingDepartment.instance) return this.instance
    this.instance = new AccountingDepartment(1, [])
    return this.instance
  }

  describe(): void {
    console.log(`Department ID: ${this.id}`)
  }

  addReport(text: string): void {
    this.reports.push(text)
    this.lastReport = text
  }

  // we can override methods from inherited classes
  addEmployee(employee: string): void {
    if (employee === 'Max') return
    this.employees.push(employee)
  }

  printReports(): void {
    console.log(this.reports)
  }
}

// const accounting = new AccountingDepartment(1, [])
// instead of this, when we use a singleton (private constructor), we have to write a method to get the initalized object
const accounting = AccountingDepartment.getInstance()

accounting.describe()

// console.log(accounting.mostRecentReport)

// using private variable inside the class prevents us from accessing it outside the class
// accounting.employees[2] = 'Anna'

// we have to use the public method to add employee
accounting.addEmployee('Max')

const it = new ITDepartment(2, ['Aga', 'Jacek'])
it.showAdmins()

const employee1 = Department.createEmployee('Max')
console.log(employee1)
console.log(Department.fiscalYear)
