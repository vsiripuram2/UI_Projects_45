import React from 'react';
import { useSelector } from 'react-redux';

const Account = () => {
    let data = useSelector((state) => {
        return state;
    })
    return (
       <>
       <div className='container'>
        <h2 className='text-primary'>Account Details</h2>
        <table className='table table-borered w-50'>
            <thead>
                <tr>
                    <th>Balance</th>
                    <th>FullName</th> 
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.balance}</td>
                    <td>{data.fullName}</td>
                </tr>
            </tbody>

        </table>
        <h1>This is my name {data.name}</h1>
       </div>
       </>
    );
};

export default Account;