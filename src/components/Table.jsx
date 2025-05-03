import React from 'react'
import Buttons from './Buttons'

function Table() {
    const data = [
        {
            id: "uuid-1",
            firstName: "REUVIN",
            lastName: "HERNANDEZ",
            course: "BSIT",
            year: "1st Year",
            contactNumber: "09171234567",
          },
          {
            id: "uuid-2",
            firstName: "REUVIN",
            lastName: "HERNANDEZ",
            course: "BSCS",
            year: "2nd Year",
            contactNumber: "09281234567",
          },
          {
            id: "uuid-3",
            firstName: "REUVIN",
            lastName: "HERNANDEZ",
            course: "BSBA",
            year: "3rd Year",
            contactNumber: "09391234567",
          },
          {
            id: "uuid-4",
            firstName: "REUVIN",
            lastName: "HERNANDEZ",
            course: "BSIT",
            year: "4th Year",
            contactNumber: "09451234567",
          },
          {
            id: "uuid-5",
            firstName: "REUVIN",
            lastName: "HERNANDEZ",
            course: "BSCS",
            year: "1st Year",
            contactNumber: "09181234567",
          }
    ]
    
    const headers = [
        "ID",
        "First Name",
        "Last Name",
        "Course",
        "Year",
        "Contact Number",
        "Actions"
    ]
  return (
    <div className="grid gap-4 w-full">
        <div>
            <div className="flex justify-end my-2">
                <input
                type="text"
                placeholder="Search..."
                className="border px-3 py-1 rounded"
                />
            </div>
            <table className="w-full text-center">
            <thead>
                <tr>
                {headers.map((header, i) => (
                    <th key={i} className="border px-4 py-2">{header}</th>
                ))}
                </tr>
            </thead>
            <tbody>
            {data.map((items, i) => (
                <tr key={i}>
                <td className="border px-4 py-2">{items.id}</td>
                <td className="border px-4 py-2">{items.firstName}</td>
                <td className="border px-4 py-2">{items.lastName}</td>
                <td className="border px-4 py-2">{items.course}</td>
                <td className="border px-4 py-2">{items.year}</td>
                <td className="border px-4 py-2">{items.contactNumber}</td>
                <td className="border px-4 py-2">
                    <div className="flex gap-x-2 justify-center items-center">
                        <Buttons 
                            btnLabel="Update"
                            btnColor="success"
                            btnSize="small"
                        />
                        <Buttons 
                            btnLabel="View"
                            btnColor="normal"
                            btnSize="small"
                        />
                        <Buttons 
                            btnLabel="Delete"
                            btnColor="warning"
                            btnSize="small"
                        />
                    </div>
                </td>
                </tr>
            ))}
            </tbody>
            </table>
        </div>
    </div>
  )
}

export default Table