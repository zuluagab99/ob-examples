import React from 'react'

const AsyncAwait = () => {
    
    async function generateNumber(){

        return 1;

    } 

    async function generatePromiseNumber(){

        return Promise.resolve(2)

    }


    function obtainNumber(){

        generateNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong ${error}`))

    }

    function obtainPromiseNumber(){

        generatePromiseNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong ${error}`))

    }

    async function saveSessionStorage(key, value) {

        await sessionStorage.setItem(key, value);

        return Promise.resolve(sessionStorage.getItem(key))

    }

    function showStorage() {
        saveSessionStorage('name', 'Alejandro')
            .then((response) => {
                let value = response;
                alert(`Saved name: ${value}`)
            })
            .catch((error) => {
                alert(`Something went wrong ${error}`)
            })
            .finally(() => console.log('Success: Name saved and retrieved'))
    }
    
    async function obtainMessage() {

        let promise = new Promise((resolve, reject) => {

            setTimeout(() => resolve('Hello world'), 2000)

        });

        let message = await promise;

        await alert(`Message received: ${message}`)

    }

    const returnError = async() => {
        
        await Promise.reject(new Error('Ups something went wrong!'))

    }

    const consumeError = () => {
        returnError()
            .then((response) => alert(`Everything is ok ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`))
            .finally(() => alert('Finally executed'))
    }

    const urlNotFound = async () => {

        try {

            let response = await fetch('https://invalidURL')
            alert(`Response: ${JSON.stringify(response)}`)
 
        } catch(error) {

            alert(`Something went wrong with your url : ${error} (check your console)`)

        }


    } 

    const multiplePromises = async () => {
        
        let results = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2')
            ]
        ).catch((error) => alert(`Somehting went wrong with your urls : ${error}`))

    }

  
    return (
        <div className='example'>
            <h1>Async and Promise examples</h1>
            <button onClick={obtainNumber}>Obtain number</button>
            <button onClick={obtainPromiseNumber}>Obtain promise number</button>
            <button onClick={showStorage}>Save name and Show</button>
            <button onClick={obtainMessage}>Receive message in two seconds</button>
            <button onClick={consumeError}>Obtein error</button>            
            <button onClick={urlNotFound}>Request unknown url</button>            
            <button onClick={multiplePromises}>Multiple promises                                             </button>            
        </div>
    );
}

export default AsyncAwait