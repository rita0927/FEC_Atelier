import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectReviewsMeta } from '../../store/selectors';
import ProductBreakdownFactors from './ProductBreakdownFactors.jsx'
import { CharacteristicsBreakdownContainer, RatingsBreakdownRow } from './styles/Container.style'

import {} from './styles/Container.style'

const ProductBreakdown = () => {


  const reviewsAggregates = useSelector(selectReviewsMeta);

  const characteristics = reviewsAggregates ? reviewsAggregates.characteristics : undefined;

  const productCharacteristicBreakdown = (characteristic) => {
    switch (characteristic) {
      case 'Fit':
        return ['Runs Tight', '', 'Runs Long']
      case 'Size':
        return ['Too Small', '', 'Too Wide']
      case 'Width':
        return ['Too Narrow', '', 'Too Wide']
      case 'Length':
        return ['Short', '', 'Long']
      case 'Comfort':
        return ['Uncomfortable', '', 'Perfect']
      case 'Quality':
        return ['Poor', '', 'Perfect']
    }
  }

  const productBreakdownRendering = characteristics ? Object.keys(characteristics).map( key => {
      let characteristicsBreakdown = productCharacteristicBreakdown(key)
      return (
        <CharacteristicsBreakdownContainer key={characteristics[key]['id']}>
            {key}
            <ProductBreakdownFactors productFactorValue={characteristics[key]['value']}/>
            <RatingsBreakdownRow>
                <div>{characteristicsBreakdown[0]}</div>
                <div>{characteristicsBreakdown[1]}</div>
                <div>{characteristicsBreakdown[2]}</div>
            </RatingsBreakdownRow>
        </CharacteristicsBreakdownContainer>
      )
  }) : null;

  return (
    <>
      {productBreakdownRendering}
    </>
  );

};

export default ProductBreakdown;