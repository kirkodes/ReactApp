import React, {useState} from 'react';

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; // api end point
const key = '4PKvt7YX2uDsn5xem9VJLmFQPSjPMxM7';

const NytApp = () => {
    const [ search, setSearch ] = useState('');
    const [ startDate, setStartDate ] = useState('');
    const [ endDate, setEndDate ] = useState('');
    const [ pageNumber, setPageNumber ] = useState('');
    const [ results, setResults ] = useState([]);

    const fetchResults = () => {
        let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`;
        url = startDate ? url + `&begin_date=${startDate}` : url;
        url = endDate ? url + `&end_date=${endDate}` : url;

        fetch(url)
            .then(res => res.json())
            .then(data => setResults(data.response.docs))
            .catch(err => console.log(err));
    };

    return(
        <div className='main'>
            <div className='mainDiv'>
                <form onSubmit={ }>
                    <span>Enter a single search term (required) : </span>
                    <input type='text' name='search' onChange={ } required />
                </form>
            </div>
        </div>
    )
};

export default NytApp;