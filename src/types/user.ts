export type User = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    position: string,
    phone: string,
    roleId: number,
    managerId: string,
    address: string | null,
    postalCode: string | null,
    city: string | null,
    country: string | null,
    subDepartment: string | null,
    manager: Manager,
    avatar: Avatar,
    department: Department,
    group: null,
    division: null
}

type Manager = {
    id: string,
    firstName: string,
    lastName: string,
    archivedAt: string | null,
    email: string,
    phone: string,
    position: string,
    avatar: string | null
}

export type Timesheets = {
    id: string,
    assessment: number,
    breakMinutes: number,
    minutes: number,
    startTime: string,
    endTime: string,
    note: string | null,
    status: string,
    locationChecked: boolean,
    approvalPersonId: string | null,
    userId: string,
    companyId: string
}

type Department = {
    id: string,
    title: string,
    managerId: string
}

type Avatar = {
    link: string
}
