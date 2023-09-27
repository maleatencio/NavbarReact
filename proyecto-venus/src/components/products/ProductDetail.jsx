import { Card, CardContent, Grid, Typography } from "@mui/material";

const ProductDetail = ({product, children}) => {
    const {id, img, nombre, precio} = product
    return ( <Grid item key ={id} xs={ 8} sm={1} md={8} lg={0}>
        <Card clasName="card-product-container">
            <img src={img}/>
            <CardContent>
                <Typography>{nombre}</Typography>
                <Typography>${precio}</Typography>
            </CardContent>
        </Card>

    </Grid>

    );
}


export default ProductDetail;