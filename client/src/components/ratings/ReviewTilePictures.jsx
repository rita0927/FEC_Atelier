import React, { useState } from 'react';
import { PhotoGallery } from './styles/Container.style';
import { ReviewPicture } from './styles/Item.style';
import noPreview from '../../../assets/no-preview.jpg';
import Modal from '../styles/Modal';
import Button from '../styles/Button.styled.js';
import { Image, Card } from '../styles/Card'


const ReviewTilePictures = (props) => {
  let reviewPhotos = props.reviewPhotos ? props.reviewPhotos : [];

  const addDefaultSrc = (e) => {
    e.target.src = noPreview;
  }

  const [showModal, setShowModal] = useState(false);
  const [photoUrl, setPhotoUrl] = useState(null)

  const closeModal = (e) => {
    //stopPropgation prevents further propagation of the current event in the capturing and bubbling phases
    
    e.preventDefault();

    setShowModal(false);
  }

  const renderZoomedPhoto = (url) => {
    setShowModal(true);
    setPhotoUrl(url);
  }

  const zoomedPhoto = (
    <div>
      <div>
        <Image style={{ width: '500px', height: '500px' }} src={photoUrl} />
      </div><br/>
      <div className="modal-btns">
        <Button 
          data-element={'closeZoomedPhotoButton'}
          data-module={'review'}
          onClick={closeModal}
        >Close
        </Button>
      </div>
    </div>
  )

  let photoGallery = reviewPhotos.map( photo => {
    return <Card key={photo.id} style={{ border: 'none'}}>
        <ReviewPicture
          role={photo.id} 
          src={photo.url ? photo.url : noPreview}
          alt="product photo"
          data-element={'reviewPhoto'}
          data-module={'review'}
          onError={ (e) => { addDefaultSrc(e) }}
          onClick={() => renderZoomedPhoto(photo.url)}
        ></ReviewPicture>
      {showModal && <Modal closeModal={closeModal} renderContent={zoomedPhoto} />}
      </Card>
  })

  return (
    <PhotoGallery role="photoGallery">
      {photoGallery}
    </PhotoGallery>
  )
};

export default ReviewTilePictures;