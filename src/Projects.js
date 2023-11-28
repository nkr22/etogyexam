import React, { useContext } from "react";
import { ProjectContext } from "./ProjectData";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project, handleDelete, handleUpdate }) => {
    const navigate = useNavigate();
    return (
        <div key={project.id} className="contact-card">
            <h3>
                {project.projectName}
            </h3>
            <p>Description: {project.description}</p>
            <p>Completion Date: {project.completionDate}</p>
            <button
                className="btn-change"
                onClick={() => {
                    navigate(`/editProject/${project.id}`);
                }}>
                Edit
            </button>
            <button
                className="btn-danger"
                onClick={() => handleDelete(project.id)}>
                Delete
            </button>
        </div>
    );
};

const Projects = () => {
    const navigate = useNavigate();
    const { projectData, deleteProject, updateProject } =
        useContext(ProjectContext);
    const handleDelete = (id) => {
        deleteProject(id);
    };
    const handleUpdate = (editedContact) => {
        updateProject(editedContact);
    };
    if (projectData.length > 0) {
        return (
            <div>
                <h2>Contacts</h2>
                <div className="contact-list">
                    {projectData.map((project) => (
                        <>
                            <ProjectCard
                                project={project}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            />
                        </>
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <h2>Contacts</h2>
                <div className="no-contacts">
                    No projects currently on record
                    <button
                        onClick={() => {
                            navigate(`/projectform`);
                        }}>
                        Add a Project
                    </button>
                </div>
            </div>
        );
    }
};

export default Projects;





