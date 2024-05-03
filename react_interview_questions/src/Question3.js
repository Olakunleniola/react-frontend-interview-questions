// You are given the following api:
// https://example.com/api/v1/model?page=1&limit=10

// This API return the following:
// {
//   list: [{
//     id: 1,
//     title: 'title',
//     description: 'description'
//   }],
//   num_pages: 10,
//   page: 1,
//   limit: 10
// }

// Fill in the following TODO to make this work.

// If you don't answer this question fully, we will reject your candidacy.

// const TablePage = () => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [limit, setLimit] = userState(10);
//   const [currentPage, setPage] = useState(0);
//   const [canPreviousPage, setCanPreviousPage] = useState(false);
//   const [canNextPage, setCanNextPage] = useState(false);
//   const [pageCount, setPageCount] = useState(0);

//   function previousPage() {
//     //TODO
//   }

//   function nextPage() {
//     //TODO
//   }

//   useEffect(() => {
//     //TODO
//     //Call Axios
//   }, []);

//   return (<div>
//   <table>
//   <thead>
//   <td>ID</td>
//   <td>title</td>
//   <td>description</td>
//   </thead>
//   <tbody>
//   {data.map((row, index) => {
//     return (<tr>
//     <td>{row.id}</td>
//     <td>{row.title}</td>
//     <td>{row.description}</td>
//     </tr>);
//   })}
//   </tbody>
//   </table>
//   <div>
//   <span>Page{" "}{page} of {pageCount}</span>
//   <select value={limit} onChange={(e) => {setLimit(Number(e.target.value)); }}>
//     {[5, 10, 20, 30, 40, 50].map((pageSize) => (
//       <option key={pageSize} value={pageSize}>
//         Show {pageSize}
//       </option>
//     ))}
//   </select>
//   <button onClick={previousPage} disabled={!canPreviousPage}>
//     &#x02190;
//   </button>
//   <button onClick={nextPage} disabled={!canNextPage}>
//     &#x02192;
//   </button>
//   </div>
//   </div>);
// });

import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Question3 () {
    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [canPreviousPage, setCanPreviousPage] = useState(false);
    const [canNextPage, setCanNextPage] = useState(false);
    const [pageCount, setPageCount] = useState(0);
  
    function previousPage() {
      //TODO
      if(canPreviousPage) {setCurrentPage(prev => prev - 1)}
    }
  
    function nextPage() {
      //TODO
      if(canNextPage) {setCurrentPage(prev => prev + 1)}
    }
  
    useEffect(() => {
      //TODO
      //Call Axios
      axios.get(`https://example.com/api/v1/model?page=${currentPage}&limit=${limit}`)
        .then(({data}) => {
            setData(data.list);
            setPageCount(data.num_pages);
            setLimit(data.limit);
            setCurrentPage(data.page)
        })
        .catch((err) => {console.error(err)})
    }, [currentPage,limit]);

    useEffect(() => {
        setCanNextPage(pageCount - currentPage > 0);
        setCanPreviousPage(currentPage > 1);
    }, [currentPage, pageCount])
  
    return (
        <div className="p-10">
            <h2 className="font-black my-10">Question 3</h2>
            <h3 className="my-6 font-bold">Solution</h3>
            <table className="table-auto border-collapse border border-slate-500 my-10">
                <thead className="bg-gray-200 rounded-2">
                    <tr>
                        <th className="border border-slate-600 px-10">ID</th>
                        <th className="border border-slate-600 px-10">title</th>
                        <th className="border border-slate-600 px-10">description</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => {
                        return (
                            <tr key={index}>
                                <td>{row.id}</td>
                                <td>{row.title}</td>
                                <td>{row.description}</td>
                            </tr>);
                        })}
                </tbody>
            </table>
            <div>
                <span>Page{" "}{currentPage} of {pageCount}</span>
                <select className="mx-2 border-2 p-2" value={limit} onChange={(e) => {setLimit(Number(e.target.value)); }}>
                    {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
                <button className="bg-blue-500 disabled:opacity-50 rounded p-1 px-3 mx-2 font-black" onClick={previousPage} disabled={!canPreviousPage}>
                    &#x02190;
                </button>
                <button className="bg-blue-500 disabled:opacity-50 rounded p-1 px-3 mx-2 font-black" onClick={nextPage} disabled={!canNextPage}>
                    &#x02192;
                </button>
            </div>
        </div>
    );
};