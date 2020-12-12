document.addEventListener('click', (eve) => {
    // Create feature

    let createField = document.getElementById('create-field');

    document.getElementById('create-form').addEventListener('submit', (scene) => {
        scene.preventDefault()
        axios.post('/create-item', {text: createField.value}).then(() => {
            document.getElementById('item-list').insertAdjacentHTML('beforeend', 'hello')
        }).catch(() => {
            console.log('try again later');
        });
    })


    // Delete feature
    if(eve.target.classList.contains('delete-me')) {
        if(confirm('Do you really want to delete it permanently?')) {
            axios.post('/delete-item', {id: eve.target.getAttribute('data-id')}).then(() => {
                eve.target.parentElement.parentElement.remove();
            }).catch(() => {
                console.log('try again later');
            });
        }
    }

        // Update feature
    if(eve.target.classList.contains('edit-me')) {
        let userInput = prompt('Enter your desired new text', eve.target.parentElement.parentElement.
        querySelector('.item-text').innerHTML);
        if(userInput) {
            axios.post('/update-item', {text: userInput, id: eve.target.getAttribute('data-id')}).then(() => {
                eve.target.parentElement.parentElement.querySelector('.item-text').innerHTML = userInput;
            }).catch(() => {
                console.log('try again later');
            });
        }
    }
})