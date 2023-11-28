import React, {useState, useContext, useRef} from "react";
import { ProjectContext } from "./ProjectData";
import { useNavigate, useParams } from "react-router-dom";

const EditProject = () => {
    const navigate = useNavigate();

    const {id} = useParams();
    const {projectData} = useContext(ProjectContext);

    const project = projectData.find((project) => project.id === id);

    const {updateProject} = useContext(ProjectContext);
    const [editedProject, setEditedProject] = useState(project);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProject(editedProject);
        navigate("/projectlist");
    }

    const formRef = useRef(null);

    const handleChange = (e) => {
        setEditedProject({...editedProject, [e.target.name]: e.target.value});
    };

    return (
        <div className="login-container">
            <form ref={formRef} onSubmit={handleSubmit} className="login-form">
                <label>
                    Project Name:
                    <input
                        type="text"
                        value={editedProject.projectName}
                        name="projectName"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Description of Project:
                    <input
                        type="textarea"
                        value={editedProject.description}
                        name="description"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Expected Project Completion Date:
                    <input
                        type="date"
                        value={editedProject.completionDate}
                        name="completionDate"
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EditProject;