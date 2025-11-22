import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const services = [
    {
        title: "Industrial Engineering",
        desc: "From concept to execution, we deliver end-to-end industrial solutions. We specialize in advanced product design, rapid prototyping, and manufacturing expertise, leveraging process optimization to drive unparalleled industrial efficiency and operational excellence.",
        img: "/service_industrial.png",
        link: "/services",
        theme: "blue"
    },
    {
        title: "Smart Manufacturing",
        desc: "Transforming traditional floors into smart factories. We implement automated manufacturing facilities with seamless robotic integration and high-tech IoT solutions, ensuring your production lines are ready for the Industry 4.0 era.",
        img: "/service_manufacturing.png",
        link: "/services",
        theme: "green"
    },
    {
        title: "IT Services & Infrastructure",
        desc: "Empowering your digital backbone with robust IT solutions. Our services encompass comprehensive infrastructure management, scalable cloud computing, and bespoke enterprise software development designed to streamline operations and enhance business agility.",
        img: "https://placehold.co/600x400/0056b3/ffffff?text=IT+Services",
        link: "/services",
        theme: "cyan"
    },
    {
        title: "AI & Machine Learning",
        desc: "Unlocking the power of data with cutting-edge AI. We leverage predictive analytics, Natural Language Processing (NLP), and intelligent automation to transform raw data into actionable business insights that drive strategic decision-making.",
        img: "https://placehold.co/600x400/6f42c1/ffffff?text=AI+%26+ML",
        link: "/services",
        theme: "purple"
    },
    {
        title: "Business Development",
        desc: "Accelerating your growth trajectory. We provide strategic consulting, market expansion planning, and high-value partnership building to help your organization achieve sustainable growth and maintain a competitive advantage in a dynamic market.",
        img: "https://placehold.co/600x400/fd7e14/ffffff?text=Business+Dev",
        link: "/services",
        theme: "orange"
    },
    {
        title: "Cybersecurity Solutions",
        desc: "Safeguarding your digital assets with military-grade protection. We deploy comprehensive security frameworks to ensure compliance, mitigate cyber risks, and protect your critical infrastructure in an increasingly interconnected world.",
        img: "https://placehold.co/600x400/dc3545/ffffff?text=Cybersecurity",
        link: "/services",
        theme: "blue"
    },
    {
        title: "Smart Automation",
        desc: "Redefining living and working spaces. Our IoT-enabled smart home and building automation solutions deliver enhanced comfort, superior energy efficiency, and advanced security, creating intelligent environments that respond to your needs.",
        img: "https://placehold.co/600x400/0dcaf0/ffffff?text=Smart+Automation",
        link: "/services",
        theme: "cyan"
    },
    {
        title: "Professional Training",
        desc: "Investing in your most valuable asset: your people. We empower your workforce with specialized, industry-relevant training programs in IT, engineering, and business management, fostering a culture of continuous learning and innovation.",
        img: "https://placehold.co/600x400/ffc107/ffffff?text=Training",
        link: "/services",
        theme: "orange"
    },
    {
        title: "Renewable Energy",
        desc: "Pioneering a sustainable future. We deliver state-of-the-art renewable energy solutions, including large-scale solar power installations and intelligent energy management systems, committed to reducing carbon footprints and promoting green energy.",
        img: "https://placehold.co/600x400/009e49/ffffff?text=Renewable+Energy",
        link: "/services",
        theme: "green"
    },
    {
        title: "MEP Contracting",
        desc: "Building the veins of your infrastructure. Our Mechanical, Electrical, and Plumbing (MEP) contracting services ensure reliable, efficient, and compliant building systems, forming the solid foundation for any successful construction project.",
        img: "https://placehold.co/600x400/6c757d/ffffff?text=MEP+Contracting",
        link: "/services",
        theme: "purple"
    }
];

const heroImages = [
    "/hero_bg_light.png", // Existing
    "https://placehold.co/1920x1080/002a80/ffffff?text=Industrial+Engineering", // Placeholder 1
    "https://placehold.co/1920x1080/5a189a/ffffff?text=Artificial+Intelligence", // Placeholder 2
    "https://placehold.co/1920x1080/0056b3/ffffff?text=IT+Transformation" // Placeholder 3
];

function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {/* Hero Section - Carousel & Vibrant */}
            <section style={{
                height: '95vh', display: 'flex', alignItems: 'center',
                position: 'relative', overflow: 'hidden'
            }}>
                {/* Background Carousel */}
                {heroImages.map((img, index) => (
                    <div key={index} style={{
                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                        backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center',
                        opacity: index === currentImageIndex ? 1 : 0,
                        transition: 'opacity 1.5s ease-in-out',
                        zIndex: 1
                    }}></div>
                ))}

                {/* Subtle Gradient Overlay */}
                <div className="overlay" style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(to bottom right, rgba(0, 86, 179, 0.3), rgba(111, 66, 193, 0.2))',
                    zIndex: 2
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 10, marginTop: '50px' }}>
                    <div className="hero-text-container">
                        <h1 className="hero-title" style={{
                            fontSize: '4.5rem', marginBottom: '1.5rem', color: '#000',
                            lineHeight: '1.1'
                        }}>
                            <span className="text-gradient-hero">Innovating for a <br /> Brighter Future</span>
                        </h1>
                        <p style={{
                            fontSize: '1.6rem', marginBottom: '3rem', lineHeight: '1.6', fontWeight: '600',
                            color: '#333'
                        }}>
                            Your partner in <span className="text-gradient" style={{ fontWeight: '800', fontSize: '1.8rem' }}>Artificial Intelligence</span>, Industrial Engineering, IT Transformation, and Strategic Growth.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Link to="/services" className="btn-gradient" style={{ fontSize: '1.1rem', padding: '15px 40px' }}>Discover More</Link>
                            <Link to="/contact" className="btn-outline" style={{ fontSize: '1.1rem', padding: '15px 40px' }}>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services / Expertise Section - Alternating Layout */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <h4 className="text-gradient" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800', marginBottom: '1rem' }}>Our Expertise</h4>
                        <h2 style={{ fontSize: '3.5rem' }}>Comprehensive Solutions</h2>
                    </div>

                    {services.map((service, index) => (
                        <div key={index} className={`feature-row`}>
                            <div className="feature-img">
                                <img src={service.img} alt={service.title} />
                            </div>
                            <div className="feature-content">
                                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }} className="text-gradient-multicolor">
                                    {service.title}
                                </h3>
                                <div style={{ width: '60px', height: '4px', background: `var(--primary-${service.theme})`, marginBottom: '1rem', borderRadius: '2px' }}></div>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                                    {service.desc}
                                </p>
                                <Link to={service.link} style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                                    color: `var(--primary-${service.theme})`, fontWeight: '700',
                                    fontSize: '1rem', letterSpacing: '0.5px'
                                }}>
                                    KNOW MORE <span style={{ transition: 'transform 0.3s' }}>→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;
