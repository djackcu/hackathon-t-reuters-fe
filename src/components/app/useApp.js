import {useSelector, useDispatch} from 'react-redux'

const useApp = (initalValue) => {
    const employers = useSelector(state =>state.employers);

    return{employers};
}

export default useApp;