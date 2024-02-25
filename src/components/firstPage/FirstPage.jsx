import React from 'react'
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

export default function FirstPage() {


    return (
        <div className='d-flex flex-column mx-3' >
            <header className='d-flex justify-content-center my-3'>
                {/* <h1>Electronic Signature App</h1> */}
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Welcome to Electronic Signature App',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Welcome to Electronic Finger Print App',
                        1000,
                        'Welcome to Electronic Documents App',
                        1000
                    ]}
                    wrapper="h1"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block', margin:'auto' }}
                    repeat={Infinity}
                    cursor={true}
                />
            </header>

            <section className='d-flex justify-content-center flex-column align-items-center'>
                <p>
                    Sign your documents digitally with ease using our Electronic Signature App.
                    Simply upload your document, add your signature, and save the digitally signed document securely.
                </p>

                <h3>Get Started</h3>
                <p>
                    Click the button below to start signing your documents:
                </p>
                <Link to={'/signaturePad'} ><button className="btn btn-dark" >Start Signing</button></Link>
            </section>
        </div>
    );
}
