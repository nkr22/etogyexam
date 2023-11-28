import { useEffect, useMemo, useState } from "react";
import "./App.css";
import ProjectForm from "./ProjectForm";
import Home from "./Home";
import Projects from "./Projects.js";
import Navigation from "./Navigation";
import EditProject from "./EditProject";
import Login from "./Login";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { ProjectContext } from "./ProjectData";
function App() {
    const [projectData, setProjectData] = useState(() => {
        const storedContacts = localStorage.getItem("projects");
        return storedContacts ? JSON.parse(storedContacts) : [];
    });
    useEffect(() => {
        localStorage.setItem("projects", JSON.stringify(projectData));
    }, [projectData]);
    const addProject = (newProject) => {
      setProjectData([...projectData, newProject]);
    };
    const deleteProject = (id) => {
      const updatedProjects = projectData.filter(
          (project) => project.id !== id
      );
      setProjectData(updatedProjects);
  };
    const updateProject = (updatedProject) => {
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
            const updatedContacts = [...prevProjectData];
            // Update the contact at the given index with the new contact data
            updatedContacts[index] = updatedProject;
            // Return the updated contact data array
            return updatedContacts;
        });
    };

    const router = useMemo(
        () =>
            createHashRouter([
                { path: "/", element: <Home /> },
                {
                    path: "/projectform",
                    element: <ProjectForm />,
                },
                {
                  path: "/login",
                  element: <Login />,
                },
                {
                    path: "/projectlist",
                    element: <Projects projectData={projectData} />,
                },
                {
                    path: "/editProject/:id",
                    element: <EditProject />,
                },
            ]),
        [projectData]
    );
    return (
        <ProjectContext.Provider
            value={{ projectData, addProject, deleteProject, updateProject }}>
            <div className="App">
                <Navigation></Navigation>
                <div id="content">
                    <RouterProvider router={router}></RouterProvider>
                </div>
            </div>
        </ProjectContext.Provider>
    );
}

export default App;