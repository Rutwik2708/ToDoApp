import React from 'react'
import { MdOutlineDeleteOutline, MdEditNote, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const Table = () => {
  return (
    <div className='py-30'>
      <table className='w-11/12 max-w-4x1'>
        <thead className='border-b-2 border-black'>
          <tr>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Checkbox</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>To Do</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Status</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Date Created</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='p-3 text-sm'>
              <span className='inline-block cursor-pointer'> <MdOutlineCheckBox/></span>
            </td>
            <td className='p-3 text-sm'>lorem impsum</td>
            <td className='p-3 text-sm'>done</td>
            <td className='p-3 text-sm'>28-02-2024</td>
            <td className='p-3 text-sm font-medium grid grid-flow-col items-center mt-5'>
            <span className='text-x1 cursor-pointer'> <MdEditNote/> </span>
            <span className='text-x1 cursor-pointer'> <MdOutlineDeleteOutline/> </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table