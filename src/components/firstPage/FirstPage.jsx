import React from 'react'
import { Link } from 'react-router-dom';

export default function FirstPage() {


    return (
        <div  >
            <header>
                <h1>Electronic Signature App</h1>
            </header>

            <section>
                <h2>Welcome to our Electronic Signature App</h2>
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
