import ReactPaginate from 'react-paginate'

export default function Paginations({pagestotal}){

  const handlerpageclick=(num)=>{
   
  }
  
    return(
<ReactPaginate
breakLabel="..."
nextLabel="التالي"
onPageChange={handlerpageclick}
marginPagesDisplayed={2}
pageRangeDisplayed={2}
pageCount={500}
previousLabel={"السابق"}
containerClassName={"pagination justify-content-center p-3"}
pageClassName={"page-item"}
pageLinkClassName={"page-link"}
previousClassName={"page-item"}
nextClassName={"page-item"}
previousLinkClassName={"page-link"}
nextLinkClassName={"page-link"}
breakClassName={"page-item"}
breakLinkClassName={"page-link"}
activeClassName={"active"}

/>









    )
}