//typicode.js
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

fetch('https://jsonplaceholder.typicode.com/posts', {
 

    })
    .then(result => result.json())
    .then(result => {
        console.log(result);
        result.forEach(json => {
            document.getElementById('list').appendChild(makeRow(makeRow(json)));
        });
    })
    .catch(err => console.log(err));

    const fields = ['id', 'tile', 'userId']
    function makeRow(json = {}) {
        let table = document.createElement('table');
        let tr = document.createElement('tr');
        
        fields.forEach(function(item) {
            let td = document.createElement('td');
            td.innerText = json[item];
            tr.qppendChild(td);
        });
    }