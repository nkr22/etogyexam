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
            const index = prevProjectData.findIndex(
                (c) => c.id === updatedProject.id
            );

            if (index === -1) {
                return prevProjectData;
            }

            const updatedProjects = [...prevProjectData];

            updatedProjects[index] = updatedProject;

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
