import React from 'react';

function About() {
    return (
        <div style={{ paddingTop: '100px' }}>
            {/* Hero / Intro */}
            <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <h4 className="text-gradient" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800', marginBottom: '1rem' }}>About Us</h4>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Driving Innovation & Excellence</h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-light)' }}>
                            INNOVEX is a Riyada-certified SME dedicated to transforming industries through engineering, technology, and strategic growth.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--primary-blue)' }}>Who We Are</h2>
                            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', color: '#444' }}>
                                We specialize in delivering integrated solutions across <strong>Industrial Engineering, IT Services, Business Development, and Professional Training</strong>. Our expertise spans from concept design and prototyping to full-scale manufacturing and digital transformation.
                            </p>
                            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', color: '#444' }}>
                                By aligning our services with <strong>Oman Vision 2040</strong>, we strive to be a catalyst for sustainable progress, helping businesses optimize performance and embrace the future.
                            </p>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <img src="/hero_bg_light.png" alt="Innovex Office" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                            <div style={{
                                position: 'absolute', bottom: '-20px', right: '-20px',
                                background: 'white', padding: '2rem', borderRadius: '12px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.15)', maxWidth: '300px'
                            }}>
                                <h4 style={{ color: 'var(--primary-orange)', fontSize: '3rem', margin: 0 }}>10+</h4>
                                <p style={{ fontWeight: '600', color: '#666' }}>Years of Combined Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                        <div className="card card-purple" style={{ padding: '3rem' }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary-purple)' }}>Our Vision</h3>
                            <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
                                To empower industries and organizations in Oman through innovative engineering, strategic consulting, and capability development. We are committed to driving sustainable progress by delivering integrated solutions aligned with Oman Vision 2040.
                            </p>
                        </div>
                        <div className="card card-green" style={{ padding: '3rem' }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary-green)' }}>Our Mission</h3>
                            <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
                                Guided by our vision we shall deliver high-quality, cost-effective projects on schedule and enhance our client’s satisfaction through continuous improvement of our business practices in terms of creativity, safety, quality, and service delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '4rem' }}>Our Leadership</h2>
                    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>

                        {/* Yaqeen */}
                        <div className="card text-center" style={{ padding: '2.5rem' }}>
                            <img src="/yaqeen.jpg" alt="Yaqeen Alkhathri" style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem', border: '4px solid var(--bg-light)' }} />
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Yaqeen Alkhathri</h3>
                            <p style={{ color: 'var(--primary-blue)', fontWeight: '700', letterSpacing: '1px' }}>FOUNDER & CEO</p>
                        </div>

                        {/* Riaz */}
                        <div className="card text-center" style={{ padding: '2.5rem' }}>
                            <img src="/riaz_real.jpg" alt="Riaz Ahamed" style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem', border: '4px solid var(--bg-light)' }} />
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Riaz Ahamed</h3>
                            <p style={{ color: 'var(--primary-blue)', fontWeight: '700', letterSpacing: '1px' }}>PRINCIPAL TECHNOLOGIST</p>
                            <p style={{ fontSize: '0.9rem', color: '#777' }}>Software Systems</p>
                        </div>

                        {/* Muna */}
                        <div className="card text-center" style={{ padding: '2.5rem' }}>
                            <img src="/muna.jpg" alt="Muna Al Shukaili" style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem', border: '4px solid var(--bg-light)' }} />
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Muna Al Shukaili</h3>
                            <p style={{ color: 'var(--primary-blue)', fontWeight: '700', letterSpacing: '1px' }}>BUSINESS CONSULTANT</p>
                        </div>

                        {/* Vinayak */}
                        <div className="card text-center" style={{ padding: '2.5rem' }}>
                            <img src="/vinayak.jpg" alt="Vinayak" style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem', border: '4px solid var(--bg-light)' }} />
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Vinayak</h3>
                            <p style={{ color: 'var(--primary-blue)', fontWeight: '700', letterSpacing: '1px' }}>AI EXPERTISE</p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
