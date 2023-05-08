import './index.scss'
import AnimatedLetters from '../AnimatedLetters';

const Minecraft = () =>{
    return (
        <div className='container minecraft-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    strArray={['M', 'i', 'n', 'e', 'c', 'r', 'a', 'f', 't']}
                    idx={15}
                    />
                </h1>
                <p>Test paragraph 1</p>
                <p>Test paragraph 2</p>
                <p>Test paragraph 3</p>
            </div>
        </div>
    )
}
export default Minecraft