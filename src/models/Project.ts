import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    repoUrl: {type: String, required: true},
    deployUrl: {type: String, required: true},
    images: {type: Array<String>, required: true},
    techs: {type: Array<String>, required: true},
});

export const Project = mongoose.model("Project", projectSchema);