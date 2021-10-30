import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadRelatedProducts } from '../../store/apiActions';
import { selectRelatedProducts, selectProduct, selectCurrentStyle, selectedStyle, selectAverageRating } from '../../store/selectors';
import Stars from '../../../assets/star.png';
import noImage from '../../../assets/no-preview.jpg';
import plusSign from '../../../assets/plussign.jpg';
import { Container1, Container2, Image, Category, Price, Anchor, Card, Add } from './styles/style'

const RelatedItems = () => {

  const dispatch = useDispatch();
  useEffect(() => dispatch(loadRelatedProducts), []);

  const relatedProducts = useSelector(selectRelatedProducts);
  const currentProduct = useSelector(selectProduct);
  const currentStyle = useSelector(selectCurrentStyle(undefined));
  const averageRating = useSelector(selectAverageRating);

  // console.log('currentProduct', currentProduct);

  // console.log('relatedProducts', relatedProducts)
  // console.log('currentStyle', currentStyle)
  // console.log(averageRating)

  console.log(Stars)


  return (
    <div>
      <h3>Related Products</h3>
      <Container1>
      {relatedProducts.map(product => {
        return <Anchor key={product.id}>
                <Card>
                  {!product.url ? <Image src={noImage}></Image> : <Image src={product.url}></Image>}
                  <div>
                    <Category>{product.category}</Category>
                    <h5><b>{product.name}</b></h5>
                    <Price>${product.default_price}</Price>
                    <div>{product.rating}</div>
                  </div>
                </Card>
               </Anchor>
      })}
      </Container1>
      <h3>Your Outfit</h3>
      <Container2>
        <Add>
            <Image src={plusSign}></Image>
            <div style={{marginTop: "30px"}}>Add to Outfit</div>
        </Add>
      </Container2>

    </div>
  );
};

export default RelatedItems;