import React, {createContext, useState} from 'react';

const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
    const [projectData, setProjectData] = useState(() => {
        const storedProjects = localStorage.getItem("projects");
        return storedProjects ? JSON.parse(storedProjects) : [];
    });

    const addProject = (newProject) => {
        setProjectData([...projectData, newProject]);
    };

    const deleteProject = (id) => {
        const updatedProjects = projectData.filter(
            (project) => project.id !== id
        );
        setProjectData(updatedProjects);
    }

    const editProject = (updatedProject) => {
        setProjectData((prevProjectData) => {
            // Find the index of the contact to be updated
            const index = prevProjectData.findIndex(
                (c) => c.id === updatedProject.id
            );
            // If the contact doesn't exist, return the previous state
            if (index === -1) {
                return prevProjectData;
            }
            // Create a copy of the previous contact data array
            const updatedProjects = [...prevProjectData];
            // Update the contact at the given index with the new contact data
            updatedProjects[index] = updatedProject;
            // Return the updated contact data array
            return updatedProjects;
        });
    };

    return (
        <ProjectContext.Provider
            value={{
                projectData,
                addProject,
                deleteProject,
                editProject
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    );
};

export {ProjectContext, ProjectContextProvider};
