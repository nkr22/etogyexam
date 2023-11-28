

import { useContext, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ProjectContext } from "./ProjectData";
import { useNavigate } from "react-router-dom";

const ProjectForm = () => {
    const { addProject } = useContext(ProjectContext);
    const navigate = useNavigate();
    const formRef = useRef(null);

    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [completionDate, setCompletionDate] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        // create new contact object
        const newProject = {
            id: uuidv4(),
            projectName,
            description,
            completionDate,
        };

        addProject(newProject);
        formRef.current.reset();
        setProjectName("");
        setDescription("");
        setCompletionDate("");

        navigate("/projectlist");
    };
    return(
        <div className="login-container">
        <form ref={formRef} onSubmit={handleSubmit} className="login-form">
            <label>
                Project Name:
                <input
                    type="text"
                    value={projectName}
                    name="projectName"
                    onChange={(e) => {
                        setProjectName(e.target.value);
                    }}
                />
            </label>
            <label>
                Description of Project:
                <input
                    type="textarea"
                    value={description}
                    name="description"
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                />
            </label>
            <label>
                Expected Project Completion Date:
                <input
                    type="date"
                    value={completionDate}
                    name="completiondate"
                    onChange={(e) => {
                        setCompletionDate(e.target.value);
                    }}
                />
            </label>

            <button type="submit">Submit</button>
        </form>
    </div>
    )
}

export default ProjectForm;