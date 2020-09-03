import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";
import { connect } from "react-redux"; //da bi se povezao dashboard sa store
import { getProjects } from "../actions/projectActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
  //sta ce da se desi kada klijent ode na putanju do dashboard
  //lifecycle hooks
  componentDidMount() {
    this.props.getProjects(); //ovo se uzima iz store-a jer smo mapirali
  }
  render() {
    const { projects } = this.props.project; //isto je kao : const projects = this.props.project.projects
    {
      /*  const projectObject = {
      projectName: "projectName",
      projectIdentifier: "props",
      description: "desc props",
 */
    }
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              <CreateProjectButton />
              <br />
              <hr />
              {/*<ProjectItem project={projectObject} />
              saljemo prop projectObject, dashboard ekstraktuje projekte iz stanja u njegov props i tako salje dalje*/}
              {projects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  getProjects: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project, //iz index.js u reducer folderu, iz tog project-a extraktujemo projekte
});

export default connect(mapStateToProps, { getProjects })(Dashboard);
