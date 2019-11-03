import {useSelector, useDispatch} from 'react-redux'
import {useEffect, useState} from 'react'
import escapeRegExp from 'escape-string-regexp'
import {loadEmployers} from '../../redux/actions/employerActions'

const useApp = (initalValue) => {

    const dispatch = useDispatch();
    const loadEmployer = () => dispatch(loadEmployers());
    
    useEffect(() => {
        loadEmployer();
        return () => {
            
        };
    }, [])

    const [query, setQuery] = useState('');
    
    const employer = useSelector(state => state.employers.map((employ) => {
        return {
            name: employ.name,
            description: employ.description
        }
    }))

    const [employerFiltered, setEmployerFiltered] = useState(employer);
    const handlerFilter = (e) => {
        const newVal = e.target.value;
        setQuery(newVal);
        const match = new RegExp(escapeRegExp(newVal),'i')
        console.log(match)
        let filteredEmployer = employer.filter((employ) => match.test(employ.name));
        setEmployerFiltered(filteredEmployer)
    }
    return{query,employerFiltered,handlerFilter}
}

export default useApp;