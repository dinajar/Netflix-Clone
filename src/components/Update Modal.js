import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function UpdateModal(props) {

    const updateMovie= async (e)=>{
        e.preventDefault();
        const obj = {
            name : e.target.Name.value,
            poster_path : e.target.image.value,
            overview : e.target.overview.value,
            comment : e.target.comment.value
        }
        const serverURL = `http://localhost:3001/update/${props.cardValues.id}`;
        const axiosRes = await axios.put(serverURL,obj);
        console.log(axiosRes.data);
        props.takeNewArr(axiosRes.data);
        props.handleclose();
        

    }
    return (
        <>
            <Modal show={props.updateFlage} onHide={props.handleclose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.cardValues.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={updateMovie}>
                        <Form.Group className="mb-3" >

                        <Form.Text className="text-muted">
                                Movie Name
                            </Form.Text>
                            <Form.Control  name ="Name" type="text" defaultValue={props.cardValues.name} />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label> Image </Form.Label>
                            <Form.Control  name ="image" type="text" defaultValue={props.cardValues.poster_path} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label> overview </Form.Label>
                            <Form.Control  name ="overview" type="text" defaultValue={props.cardValues.overview} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label> comment </Form.Label>
                            <Form.Control name ="comment" type="text" defaultValue={props.cardValues.comment} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>


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
export default UpdateModal;