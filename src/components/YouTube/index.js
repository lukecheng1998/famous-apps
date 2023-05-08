import './index.scss'
import AnimatedLetters from '../AnimatedLetters';

const Twitter = () =>{
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    strArray={['Y', 'o', 'u', 'T', 'u', 'b', 'e']}
                    idx={15}
                    />
                </h1>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    )
}
export default Twitter