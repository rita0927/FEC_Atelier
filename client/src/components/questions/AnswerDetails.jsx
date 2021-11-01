import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../styles/Modal';
import Button from '../styles/Button.styled.js';
import { Container1, Container2, Image, Card } from '../styles/Card'

const AnswerDetails = ({ answer }) => {

  const [showModal, setShowModal] = useState(false);
  const [zoomedPic, setZoomedPic] = useState(null);

  const closeModal = () => {
    setShowModal(false);
  }


  const renderPhoto = (url) => {
    return (
      <div>
        <div className="modal-btns">
          <Button onClick={closeModal}>Close</Button>
        </div><br />
        <div className='wrapper'>
          <Image src={url} />
        </div>
      </div>
    )
  }


  const showGallery = (photos) => {
    return (
      <div>
        <Container1>
          {photos.map(pic => {
            return (
              <div key={pic}>
                <Card onClick={() => setShowModal(true)}>
                  <Image src={pic} alt="Photo"></Image>
                  {showModal && <Modal closeModal={closeModal} renderContent={renderPhoto(pic)} />}
                </Card>
              </div>
            )
          })}
        </Container1>
      </div>
    )
  }

  // If the answer is from the seller, then the username should display “Seller” in bold.

  return (
    <div>
      <p> <b>A:</b> {answer.body}</p>
      <div>
        {answer.photos.length === 0 ? null : showGallery(answer.photos)}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'start',
          gap: '1rem',
        }}
      >
        <p>by {answer.answerer_name === 'Seller' ? <b>Seller</b> : answer.answerer_name}, {answer.date.slice(0, 10)}</p>
        <p>|</p>
        <p>Helpful?</p>
        <p>Yes ({answer.helpfulness | 0})</p>
        <p>|</p>
        <p>Report</p>
      </div>

    </div>
  )

};

export default AnswerDetails;



