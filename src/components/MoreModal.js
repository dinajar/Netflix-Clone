import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

function MoreModal(props) {
    return (
        <>
            <Modal show={props.showFlag} onHide={props.handleclose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.cardValues.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image style={{ width: '20rem' }} src={'https://image.tmdb.org/t/p/w500' + props.cardValues.poster_path}></Image>
                   
                    <p> {props.cardValues.overview}</p>

                    <p>comment : {props.cardValues.comment}</p>
                    

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleclose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            
        </>
    )
}
export default MoreModal;