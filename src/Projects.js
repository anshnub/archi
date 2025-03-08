import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopMenu from "./core/TopMenu";
import Footer from "./core/footer";
import Data from "./projects.json";
import { Container, Row, Col } from "react-bootstrap";
import './App.css';

const Projects = (props) => {
    const theme = '#191919';
    const [projects, setProjects] = useState([]);

    // Define project categories with their cover photo paths
    const projectCategories = [
        {
            title: "Tyagi Residency Project",
            coverPhoto: "/images/tyagi/tyagi/cover.jpg"
        },
        {
            title: "Ahir Residency Project", 
            coverPhoto: "/images/ahir/ahir/cover.jpg"
        },
        {
            title: "Phonest Pavilion Project",
            coverPhoto: "/images/phonestphoenix/phonestphoenix/cover.jpg"
        },
        {
            title: "CASA DE RECURSO",
            coverPhoto: "/images/CASADERECURSO/CASADERECURSO/cover.jpg"
        },
        {
            title: "Phonest Phoenix Wakad Project",
            coverPhoto: "/images/phonestmall/phonestmall/cover.jpg"
        },
        {
            title: "Residency 1404",
            coverPhoto: "/images/residence/residence/cover.jpg"
        }
    ];

    const ProjectCategory = ({ title, coverPhoto }) => (
        
            <div className="project-item" style={{ backgroundColor: theme, opacity: "0.9" }}>
                <Link to={`/projects/${title.toLowerCase().replace(/ /g, '-')}`} 
                      className="text-decoration-none">
                    <div className="project-image-container">
                        <img 
                            src={coverPhoto}
                            className="rounded border border-white img-fluid" 
                            alt={`${title} Cover`}
                            style={{ 
                                objectFit: "cover",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
                            }}
                        />
                    </div>
                    <h2 className="text-warning text-center p-3" style={{ 
                        fontFamily: "'Aref Ruqaa', serif",
                        fontSize: "1.5rem",
                        minHeight: "80px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white"
                    }}>
                         <span style={{ color: "white" }}>{title}</span>
                    </h2>
                </Link>
            </div>
        
    );

    return (
        <div className="g-0" style={{ maxWidth: "100vw" }}>
            <TopMenu />
            <div className="container-fluid">
                <Container>
                    <Row className="g-4">
                        {projectCategories.map((category, index) => (
                            <Col key={index} xs={12} md={6} lg={4}>
                                <ProjectCategory 
                                    title={category.title}
                                    coverPhoto={category.coverPhoto}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
                <Footer />
            </div>
        </div>
    );
};

export default Projects;
