import './index.scss'
import AnimatedLetters from '../AnimatedLetters';

const TikTok = () =>{
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    strArray={['T', 'i', 'K', 'T', 'o', 'k']}
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
export default TikTok