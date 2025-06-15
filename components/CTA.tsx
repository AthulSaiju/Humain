import Image from "next/image";
import Link from "next/link";
import React from 'react'

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="cta-badge">Start learning your way.</div>
            <h2 className="text-3xl font-bold">
                Build and Personalize Humain
            </h2>
            <p>Pick a name, subject, voice, & personality — and start learning through voice conversations that feels real.</p>
            <Image src="images/cta.svg" alt="cta" width={362} height={232} />
            <button className="btn-primary border-1 border-gray-700 hover:bg-gray-800">
                <Image src="/icons/plus.svg" alt="plus" width={12} height={12}/>
                <Link href="/humains/new">
                    <p>Build a New Humain</p>
                </Link>
            </button>
        </section>
    )
}

export default CTA