import './index.scss'
import AnimatedLetters from '../AnimatedLetters';

const Twitter = () =>{
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    strArray={['T', 'w', 'i', 't', 't', 'e', 'r']}
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