const iconObj = icon => {
  let i = document.createElement('i');
  i.className = `fa fa-${icon} float-left mr-3 pt-1`;
  return i;
};

const descr = descr => {
  let p = document.createElement('p');
  p.innerHTML = `${descr}`;
  p.className = 'mb-4 tsize-16';
  return p;
};

const renderProfile = (profile, elementID) => {
  let profileDiv = document.querySelector(elementID);
  profileDiv.innerHTML = '';
  if (profile && profile.title && profile.description) {
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    h3.textContent = `${profile.title}`;
    h3.appendChild(iconObj('user'));
    p.textContent = `${profile.description}`;
    profileDiv.appendChild(h3);
    profileDiv.appendChild(p);
  }
};

const renderExperiences = (experiences, elementID) => {
  let experiencesDiv = document.querySelector(elementID);
  experiencesDiv.innerHTML = '';
  if (experiences) {
    let h3 = document.createElement('h3');
    let i = iconObj('briefcase');
    h3.textContent = 'Work history';
    h3.className = 'mb-3';
    h3.appendChild(i);
    experiencesDiv.appendChild(h3);

    experiences.forEach(experience => {
      if (
        experience.jobTitle &&
        experience.employer &&
        experience.startDate &&
        experience.endDate &&
        experience.city
      ) {
        let h5 = document.createElement('h5');
        let date = document.createElement('p');
        h5.textContent = `${experience.jobTitle} at ${experience.employer}, ${experience.city}`;
        h5.className = 'mb-1 tsize-18';
        date.innerHTML = `${experience.startDate} &#8213; ${experience.endDate}`;
        date.className = 'tsize-14 text-gray mb-1';
        experiencesDiv.appendChild(h5);
        experiencesDiv.appendChild(date);

        if (experience.description) {
          experiencesDiv.appendChild(descr(experience.description));
        }
      }
    });
  }
};

const renderEducations = (educations, elementID) => {
  let educationsDiv = document.querySelector(elementID);
  educationsDiv.innerHTML = '';
  if (educations) {
    let h3 = document.createElement('h3');
    let i = iconObj('graduation-cap');
    h3.textContent = 'Educations';
    h3.className = 'mb-3 mt-5';
    h3.appendChild(i);
    educationsDiv.appendChild(h3);

    educations.forEach(education => {
      if (
        education.school &&
        education.degree &&
        education.startDate &&
        education.endDate &&
        education.city
      ) {
        let h5 = document.createElement('h5');
        let date = document.createElement('p');
        h5.textContent = `${education.degree} at ${education.school}, ${education.city}`;
        h5.className = 'mb-1 tsize-18';
        date.innerHTML = `${education.startDate} &#8213; ${education.endDate}`;
        date.className = 'tsize-14 text-gray mb-1';
        educationsDiv.appendChild(h5);
        educationsDiv.appendChild(date);

        if (education.description) {
          educationsDiv.appendChild(descr(education.description));
        } else {
          date.className = 'tsize-14 text-gray mb-4';
        }
      }
    });
  }
};

const renderCourses = (courses, elementID) => {
  let coursesDiv = document.querySelector(elementID);
  coursesDiv.innerHTML = '';
  if (courses) {
    let h3 = document.createElement('h3');
    let i = iconObj('graduation-cap');
    h3.textContent = 'Courses';
    h3.className = 'mb-3 mt-5';
    h3.appendChild(i);
    coursesDiv.appendChild(h3);

    courses.forEach(course => {
      if (course.institution && course.name && course.startDate && course.endDate) {
        let h5 = document.createElement('h5');
        let p = document.createElement('p');
        h5.textContent = `${course.name} at ${course.institution}`;
        h5.className = 'mb-1 tsize-18';
        p.innerHTML = `${course.startDate} &#8213; ${course.endDate}`;
        p.className = 'tsize-14 text-gray mb-4';
        coursesDiv.appendChild(h5);
        coursesDiv.appendChild(p);
      }
    });
  }
};

const renderReferences = (references, elementID) => {
  let referencesDiv = document.querySelector(elementID);
  referencesDiv.innerHTML = '';
  if (references) {
    let h3 = document.createElement('h3');
    let i = iconObj('bullhorn');
    h3.textContent = 'References';
    h3.className = 'mb-3 mt-5';
    h3.appendChild(i);
    referencesDiv.appendChild(h3);

    references.forEach(reference => {
      if (reference.fullName && reference.company) {
        let h5 = document.createElement('h5');
        let p = document.createElement('p');
        h5.textContent = `${reference.fullName} from ${reference.company}`;
        h5.className = 'mb-1 tsize-18';
        p.innerHTML = `${reference?.phone}${reference?.phone && '<br/>'}${reference?.email}`;
        p.className = 'tsize-14 text-gray mb-4';
        referencesDiv.appendChild(h5);
        referencesDiv.appendChild(p);
      }
    });
  }
};

const renderDetails = (details, elementID) => {
  let detailsDiv = document.querySelector(elementID);
  if (details && details.address && details.phone && details.email) {
    let p = document.createElement('p');
    p.className = 'tsize-14 mb-1';
    p.innerHTML = `${details?.address}<br/>${details?.email}<br/>${details?.phone}`;
    detailsDiv.appendChild(p);
  }
};

const renderLinks = (links, elementID) => {
  let linksDiv = document.querySelector(elementID);
  if (links) {
    links.forEach(link => {
      let p = document.createElement('p');
      p.className = 'tsize-14 mb-1';
      if (link.urls.length > 1) {
        p.textContent = `${link.title}`;
        p.className = 'tsize-14 mb-2';
        link.urls.forEach(url => {
          let a = document.createElement('a');
          a.href = `${url}`;
          a.className = 'text-normal text-list mt-1 fa fa-hand-point-right';
          a.textContent = ` ${url}`;
          a.target = '_blank';
          p.appendChild(a);
        });
      } else {
        p.innerHTML = `<a href="${link.urls}" class="text-blue" target="_blank">${link.title}</a>`;
      }
      linksDiv.appendChild(p);
    });
  }
};

const renderSkills = (skills, elementID) => {
  let skillsDiv = document.querySelector(elementID);
  if (skills) {
    skills.forEach(skill => {
      let p = document.createElement('p');
      p.className = 'tsize-14 mb-2';
      p.textContent = `${skill.name}`;
      let div = document.createElement('div');
      div.className = 'progress';
      div.style = 'height: 3px;';
      div.innerHTML = `<div class="progress-bar" style="width: ${skill.level}%;" role="progressbar" aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100"></div>`;
      p.appendChild(div);
      skillsDiv.appendChild(p);
    });
  }
};

const renderLanguages = (languages, elementID) => {
  let languagesDiv = document.querySelector(elementID);
  if (languages) {
    languages.forEach(language => {
      let p = document.createElement('p');
      p.className = 'tsize-14 mb-2';
      p.textContent = `${language.name}`;
      let div = document.createElement('div');
      div.className = 'progress';
      div.style = 'height: 3px;';
      div.innerHTML = `<div class="progress-bar" style="width: ${language.level}%;" role="progressbar" aria-valuenow="${language.level}" aria-valuemin="0" aria-valuemax="100"></div>`;
      p.appendChild(div);
      languagesDiv.appendChild(p);
    });
  }
};

const _r = {
  renderProfile,
  renderExperiences,
  renderEducations,
  renderCourses,
  renderReferences,
  renderDetails,
  renderLinks,
  renderSkills,
  renderLanguages,
};

export default _r;
