import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import TopMenu from "./core/TopMenu";
import Footer from "./core/footer";
import './App.css';

const ProjectDetail = () => {
    const { projectId } = useParams();

    // Function to dynamically import images from a folder
    const importAll = (r) => {
        return r.keys().map(item => r(item));  // Call the require context to get the module
    };

    // Determine the folder based on the projectId
    let imageContext;
    switch (projectId) {
        case 'tyagi-residency-project':
            imageContext = require.context('../public/images/tyagi/tyagi', false, /\.(png|jpe?g|svg)$/);
            break;
        case 'ahir-residency-project':
            imageContext = require.context('../public/images/ahir/ahir', false, /\.(png|jpe?g|svg)$/);
            break;
        case 'phonest-pavilion-project':
            imageContext = require.context('../public/images/phonestphoenix/phonestphoenix', false, /\.(png|jpe?g|svg)$/);
            break;
        case 'casa-de-recurso':
            imageContext = require.context('../public/images/CASADERECURSO/CASADERECURSO', false, /\.(png|jpe?g|svg)$/);
            break;
        case 'phonest-phoenix-wakad-project':
            imageContext = require.context('../public/images/phonestmall/phonestmall', false, /\.(png|jpe?g|svg)$/);
            break;
        case 'residency-1404':
            imageContext = require.context('../public/images/residence/residence', false, /\.(png|jpe?g|svg)$/);
            break;
        default:
            imageContext = null;
            break;
    }

    // Dynamically import images
    const images = imageContext ? importAll(imageContext) : [];

    return (
        <div>
            <TopMenu />
            <Container fluid>
                <Row className="g-4">
                    {images.map((image, index) => (
                        <Col key={index} xs={12} md={6} lg={4}>
                            <div className="project-image-container">
                                <img 
                                    src={image}
                                    className="rounded border border-white img-fluid"
                                    alt={`Project ${projectId} - ${index}`}
                                    style={{
                                        objectFit: "cover",
                                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
                                    }}
                                />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer /> 
        </div>
    );
};

export default ProjectDetail;
