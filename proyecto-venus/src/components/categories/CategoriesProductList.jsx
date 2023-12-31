import { useParams } from "react-router-dom";
import useAsyncMock from "../../hooks/useAsyncMock";
import products from "../../mocks/products.json"
import { CircularProgress, Grid } from "@mui/material";
import ProductDetail from "../products/ProductDetail"

const CategoriesProductList = () => {
    const { categoriaId } = useParams()
    const { data, loading } = useAsyncMock(products);

    if (loading) return <CircularProgress />

    const categorySelected = data.filter ( categoria => categoria.categoria === categoriaId)
    return ( <div>
        <Grid container spacing={3}>
            {categorySelected.map((product)=> {
              return <ProductDetail key={product.id} product={product} />
            })}
        </Grid>
    </div>

    );
}


export default CategoriesProductList;