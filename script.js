<script>
    document.addEventListener()
    
    const button = document.querySelectorAll(.pill);
    const list = document.getElementById(.book-list)

    button.forEach(button.addEventListener)() ={">"} fetchBooks(button.id)

    function fetchBooks(genre)  {
        const apiKey = AIzaSyCNzTK75kIw3m_Z0Fb1wyKAPkjyXRJOVVg
        const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&key=${AIzaSyCNzTK75kIw3m_Z0Fb1wyKAPkjyXRJOVVg}`

    fetch https://www.googleapis.com/books/v1/volumes
    .then (response => response.json())
    .then (data => {
        displayBooks (data.items) ; 

    {)

    .catch (error=> {
        console.log('Error: ', error);

    })

}


    let genres = [biography, romance, fiction, fantasy, thriller];

    genres.forEach(display);

    function displayBooks(genre){
        console.log(genre);


    }




}


    


    

    



</script>