import React, { useState, useEffect, useRef, useContext } from 'react';
import { Form, InputGroup, FormControl, Button, Container } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import ShopContext from '../Context/shopContext';


const NewBookForm = () => {
    
    const context = useContext(ShopContext);
    
    //console.log(context.newProducts);

    const [ bookName, setBookName ] = useState("");
    const [ published, setPublished ] = useState("");
    const [ authorName, setAuthorName ] = useState("");
    const [ genre, setGenre ] = useState("");
    const [ imageUrl, setImageUrl ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ inStock, setInStock ] = useState("");
    const [ description, setDescription ] = useState("");

    //Ovde ja dodavam novata kniga na context.newProducts , shto e niza od Shop Global State, no vaka sozdavam nova niza namesto da ja apdejtiram veke postoeckata context.newProducts (shto ne e dobro zatoa shto ne mozam ponatamu da ja koristam za na home page da mi izlezat site knigi vklucuvajki gi i novite). Ne mi uspeva od tuka da ja promenam context.newProducts direkno.
    const [ newBookArray , setNewBook ] = useState([]);
    

    const bookNameInputRef = useRef(null);

    useEffect(() => {
        bookNameInputRef.current.focus();
           
    },[]);

    const handleBookName = e => {
        setBookName(e.target.value);
    }

    const handlePublished = e => {
        setPublished(e.target.value);
    }

    const handleAuthorName = e => {
        setAuthorName(e.target.value);
    }

    const handleGenre = e => {
        setGenre(e.target.value);
    }

    const handleImageUrl = e => {
        setImageUrl(e.target.value);
    }

    const handlePrice = e => {
        setPrice(e.target.value);
    }

    const handleInStock = e => {
        setInStock(e.target.value);
    }

    const handleDescription = e => {
        setDescription(e.target.value);
    }


    const handleSubmit = e => {
        e.preventDefault();

        const newBook = {
            id: uuid(), 
            name: bookName,
            published: published,
            authorName: authorName,
            genre: genre,
            image: imageUrl,
            price: price,
            description: description,
            inStock: inStock,
            createdAt:  new Date()
        }

        setBookName("");
        setPublished("");
        setAuthorName("");
        setGenre("");
        setImageUrl("");
        setPrice("");
        setInStock("");
        setDescription("");

        if(newBook) {

            //Ovde ja dodavam novata kniga na nizata no ova e nova niza , ne e vo red vaka bidejki izleguvam od globalniot kontekst. 
            //Dali ima nacin da ja koristam ovde metodata za promena na state od ShopGlobalState? Mislam na ovaa metoda , updateNewProducts, so koja vo GlobalState gi menuvam newProducts?
            //const [ newProducts, updateNewProducts ] = useState([]); //ova e od ShopGlobalState
            setNewBook([...context.newProducts, newBook]);
           
            //context.newProducts.push(newBook);
            
        }

    }

    console.log(newBookArray);


    return (
        
        <Container className="formContainer">
            <h1>Add a New Book</h1>
            <br />

            <Form>
                <Form.Label >Book Title</Form.Label>
                <InputGroup className="mb-3" >
                    <InputGroup.Text id="basic-addon3">
                    </InputGroup.Text>
                    <FormControl id="basic-url" aria-describedby="basic-addon3" 
                        ref={ bookNameInputRef }
                        type="text"
                        name="bookName"
                        value={ bookName }
                        onChange={ handleBookName }
                    />
                </InputGroup>

                <Form.Label >Published (year)</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3" >
                    </InputGroup.Text>
                    <FormControl id="basic-url" aria-describedby="basic-addon3" 
                        type="text"
                        name="published"
                        value={ published }
                        onChange={ handlePublished }
                    />
                </InputGroup>

                <Form.Label >Author Name</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">
                    </InputGroup.Text>
                    <FormControl id="basic-url" aria-describedby="basic-addon3" 
                        type="text"
                        name="authorName"
                        value={ authorName }
                        onChange={ handleAuthorName }
                    />
                </InputGroup>

                <Form.Label >Genre</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">
                    </InputGroup.Text>
                    <FormControl id="basic-url" aria-describedby="basic-addon3" 
                        type="text"
                        name="genre"
                        value={ genre }
                        onChange={ handleGenre }
                    />
                </InputGroup>

                <Form.Label >Image Url</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">
                    </InputGroup.Text>
                    <FormControl id="basic-url" aria-describedby="basic-addon3" 
                        type="text"
                        name="imageUrl"
                        value={ imageUrl }
                        onChange={ handleImageUrl }
                    />
                </InputGroup>

                <Form.Label >Price</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">
                    </InputGroup.Text>
                    <FormControl id="basic-url" aria-describedby="basic-addon3" 
                        type="text"
                        name="price"
                        value={ price }
                        onChange={ handlePrice }
                    />
                </InputGroup>

                <Form.Label >In Stock:</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">
                    </InputGroup.Text>
                    <FormControl id="basic-url" aria-describedby="basic-addon3" 
                        type="text"
                        name="inStock"
                        value={ inStock }
                        onChange={ handleInStock }
                    />
                </InputGroup>
                
                <Form.Label >Description of the Book</Form.Label>
                <InputGroup>
                    <InputGroup.Text>
                    </InputGroup.Text>
                    <FormControl as="textarea" aria-label="With textarea"
                        type="text"
                        name="description"
                        value={ description }
                        onChange={ handleDescription }
                    />
                </InputGroup>

                <br />

                <Button variant="primary" type="submit"  onClick={ handleSubmit } id="submitBtn">
                    Submit
                </Button>
            </Form>
        </Container>
        
        
    )
}

export default NewBookForm;
