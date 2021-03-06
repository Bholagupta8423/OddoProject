import React from "react";
import MUIDataTable from 'mui-datatables';
import { data } from './data';
import './ProductTab.css'
const ProductVarientTab = () => {
    
    const columns = [
        { label: 'Title', name: 'title' },
        { label: 'Author', name: 'authors' },
        { label: 'Page Count', name: 'num_pages', options: { sort: true } },
        { label: 'Rating', name: 'rating' }
      ];

      const options = {
        filterType: 'checkbox'
      };

  return(
    <>
<div style={{ maxWidth: '100%' }}>
      <MUIDataTable
        columns={columns}
        data={data}
        // title='Books Directory'
        // options={options}
      />
      </div>
    </>
  )
}

export default ProductVarientTab;
