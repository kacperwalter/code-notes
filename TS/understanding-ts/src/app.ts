class Department {
  // private name: string
  // private readonly id: string
  static fiscalYear = 2023

  // private instead of protected - we can refer to these variables in inherited classes (while private can not)
  protected employees: string[] = []

  // public and private variables - we can write it like this (we dont have to declare the variables two times)
  constructor(public name: string, private readonly id: number) {
    // this.id = id
    // this.name = name
    console.log(Department.fiscalYear)
  }

  static createEmployee(name: string) {
    return { name: name }
  }

  // this in this method is making sure that we always refer to the Department object
  describe(this: Department): void {
    console.log(`Department (${this.id}): ${this.name}`)
  }

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

  showAdmins(): void {
    console.log(this.admins)
  }
}

class AccountingDepartment extends Department {
  private lastReport: string

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport
    throw new Error('No report found')
  }

  set mostRecentReport(value: string) {
    this.addReport(value)
  }

  constructor(id: number, private reports: string[]) {
    super('Accounting', id)
    this.lastReport = reports[0]
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

const accounting = new AccountingDepartment(1, [])

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
