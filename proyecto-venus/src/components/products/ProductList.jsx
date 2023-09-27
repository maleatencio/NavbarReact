import { CircularProgress, Grid, Typography } from '@mui/material'
import useAsynckMock from '../../hooks/useAsyncMock'
import products from '../../mocks/products.json'
import ProductDetail from './ProductDetail'

const ProductList = () => {
    const {data, loading} = useAsynckMock(products)

    if(loading) return <CircularProgress />
    return ( <div className='container'>
        <Typography variant= 'h2'  >
           Productos
        </Typography>
        <Grid container spacing={3}>
            {
                data.map((product) =>{
                    return(
                        <ProductDetail key={product.id} product={product}> 
                        </ProductDetail>
                    )
                })
            }
        </Grid>
    </div>
         
    );
}


export default ProductList;