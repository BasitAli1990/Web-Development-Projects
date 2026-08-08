const projectStatus = {
  PENDING: {description: "Pending Execution"},
  SUCCESS: {description: "Executed Successfully"},
  FAILURE: {description: "Execution Failed"},
}

class ProjectIdea {
  title ="Reading";
  constructor(title, description, status){
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus (newStatus){
    this.status = newStatus;
  }


}

class ProjectIdeaBoard {
  constructor (title){
    this.title = title;
    this.ideas = [];
  }

  pin(ProjectIdea) {
    this.ideas.push(ProjectIdea);
  }

  unpin(ProjectIdea) {
    this.ideas = this.ideas.filter(idea => idea !== ProjectIdea);
  }

  count(){
    return this.ideas.length;
  }

  formatToString(){
    let output = `${this.title} has ${this.count()} ideas\n`
    this.ideas.forEach(idea => {
      output += `${idea.title} ${idea.status} - ${idea.description}\n`;
    });
    return output;
  }

}

const projectIdea = new ProjectIdea("Smart Window Locks", "An automation project allowing users to lock, unlock windows automatically based on weather conditions.");

projectIdea.updateProjectStatus(projectStatus.SUCCESS);

const projectIdea2 = new ProjectIdea("Fitness Tracker App", "An app that tracks user workouts, diet, and sleep patterns.");
projectIdea2.updateProjectStatus(projectStatus.SUCCESS);

const projectIdea3 = new ProjectIdea("Breakfast Chef Robot", "A robot that can follow a given list of instructions and prepare breakfast for the user and let them know through their phone.");
projectIdea3.updateProjectStatus(projectStatus.FAILURE);

const projectIdea4 = new ProjectIdea("Online Used Video Games Store", "An online platform where users can buy second hand physical copies of video games from other users.");
projectIdea4.updateProjectStatus(projectStatus.SUCCESS);

PIB = new ProjectIdeaBoard("Projects");
PIB.pin(projectIdea);
PIB.pin(projectIdea2);
PIB.pin(projectIdea3);
PIB.pin(projectIdea4);
console.log(PIB.formatToString());

PIB.unpin(projectIdea);


PIB2 = new ProjectIdeaBoard("Empty Board");


console.log(PIB2.formatToString());

projectIdea5 = new ProjectIdea("Smart Home System", "An integrated system to control lighting, temperature, and security devices remotely.");

PIB3 = new ProjectIdeaBoard("Tech Projects Board");
PIB3.pin(projectIdea5)

console.log(PIB3.formatToString())



