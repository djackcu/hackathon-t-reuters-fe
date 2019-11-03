import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {loadEmployers} from '../../redux/actions/employerActions'

const useApp = (initalValue) => {
    const employers = useSelector(state => state.employers);
    const dispatch = useDispatch();
    const loadEmployer = () => dispatch(loadEmployers());
    
    useEffect(() => {
        loadEmployer()
        return () => {
            
        };
    }, [])

    return{employers};
}

export default useApp;