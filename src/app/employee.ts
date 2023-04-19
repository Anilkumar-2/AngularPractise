export class Employee {
    empId !: number;
    empName!: string;
    empDep!: string;
    empActive!: boolean;
    constructor(  empId: number, empName: string, empDep: string, empActive: boolean)
    {
        this.empId=empId;
        this.empName=empName;
        this.empDep=empDep;
        this.empActive=empActive;
    }
}