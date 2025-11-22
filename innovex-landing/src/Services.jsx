import React from 'react';

const serviceCategories = [
    {
        name: "Industrial Engineering",
        color: "blue",
        services: [
            { title: "Product Design & Development", desc: "From concept to prototype, ensuring functionality and manufacturability." },
            { title: "Manufacturing Expertise", desc: "Sourcing machinery, factory layout, and process optimization." },
            { title: "Renewable Energy", desc: "Solar power installations and sustainable energy management systems." },
            { title: "MEP Contracting", desc: "Mechanical, Electrical, and Plumbing solutions for industrial and commercial projects." }
        ]
    },
    {
        name: "IT Services",
        color: "cyan",
        services: [
            { title: "Infrastructure Management", desc: "Robust server, network, and cloud infrastructure solutions." },
            { title: "Cybersecurity", desc: "Comprehensive security frameworks to protect digital assets." },
            { title: "Software Development", desc: "Custom enterprise software and application development." },
            { title: "Smart Automation", desc: "IoT solutions for smart homes and intelligent buildings." }
        ]
    },
    {
        name: "AI & Future Tech",
        color: "purple",
        services: [
            { title: "Predictive Analytics", desc: "Using data to forecast trends and optimize decision-making." },
            { title: "Machine Learning", desc: "Automating complex tasks and processes with intelligent algorithms." },
            { title: "Natural Language Processing", desc: "Advanced text and speech processing solutions." }
        ]
    },
    {
        name: "Business & Training",
        color: "orange",
        services: [
            { title: "Strategic Consulting", desc: "Market expansion, partnership building, and growth strategy." },
            { title: "Professional Training", desc: "Capacity building in IT, engineering, and business management." },
            { title: "Logistics & Supply Chain", desc: "Optimizing flow of goods and services for efficiency." }
        ]
    }
];

function Services() {
    return (
        <div style={{ paddingTop: '100px' }}>
            <div className="container section-padding">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h4 className="text-gradient" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800', marginBottom: '1rem' }}>Our Capabilities</h4>
                    <h2 style={{ fontSize: '3rem' }}>Full Spectrum of Services</h2>
                </div>

                {serviceCategories.map((category, index) => (
                    <div key={index} className="service-category">
                        <h2 style={{ color: `var(--primary-${category.color})`, borderBottomColor: `var(--primary-${category.color})` }}>
                            {category.name}
                        </h2>
                        <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {category.services.map((service, sIndex) => (
                                <div key={sIndex} className={`card card-${category.color}`} style={{ padding: '2rem' }}>
                                    <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{service.title}</h3>
                                    <p style={{ color: 'var(--text-light)' }}>{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
