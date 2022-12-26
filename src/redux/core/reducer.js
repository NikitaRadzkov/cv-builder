import { actionTypes } from './actionTypes';

const initialState = {
  userData: {
    name: '',
    language: 'English - B2',
    email: '',
    mobile: '',
    userData: '',
    profile: '',
    infoTitle: 'Personal info',
    experienceTitle: 'QA Engineer with 3 years of experience.',
    experience: '',
    projectsTitle: 'Projects',
    educationTitle: 'Education',
    education: 'Higher Education in Computer Science and Software Engineering',
    languageProficiency: 'Language proficiency',
    domainsTitle: 'Domains',
    domains: 'Big Data, Management System, Web',
    programmingLanguagesTitle: 'Programming languages',
    programmingLanguages: '',
    programmingTechnologiesTitle: 'Programming technologies',
    programmingTechnologiesLeft: '',
    programmingTechnologiesRight: '',
    // skillsTitle: 'Skills',
    photo: 'images/nobody.jpg',
  },
  workExperience: [{ id: '1' }],
  education: [{ id: '1' }],
  skills: [{ id: '1' }],
  professionalSkills: [{ id: '1' }],
  theme: {
    color: '#C3C2C4',
    fontFamily: 'Mulish',
  },
  itemStatus: {
    picture: false,
    info: true,
    profile: true,
    workExperience: true,
    education: true,
    skills: true,
    professionalSkills: true,
  },
};

export default function core(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_USER_DATA:
      if (!action.payload) return state;

      return {
        ...state,
        userData: {
          ...state.userData,
          ...action.payload,
        },
      };

    case actionTypes.UPDATE_THEME:
      if (!action.payload) return state;

      return {
        ...state,
        theme: {
          ...state.theme,
          ...action.payload,
        },
      };
    case actionTypes.UPDATE_ITEM_STATUS:
      if (!action.payload) return state;

      return {
        ...state,
        itemStatus: {
          ...state.itemStatus,
          ...action.payload,
        },
      };

    case actionTypes.ADD_NEW_WORK_EXPERIENCE:
      if (!action.payload) return state;

      return {
        ...state,
        workExperience: [
          ...state.workExperience,
          {
            ...action.payload,
          },
        ],
      };

    case actionTypes.UPDATE_WORK_EXPERIENCE:
      if (!action.payload) return state;

      return Object.assign({}, state, {
        workExperience: action.payload,
      });

    case actionTypes.UPDATE_WORK_EXPERIENCE_DATA:
      if (!action.payload || !action.payloadId) return state;

      const newWorkExperience = JSON.parse(JSON.stringify(state.workExperience));
      const index = state.workExperience
        .map((itm) => {
          return itm.id;
        })
        .indexOf(action.payloadId);
      if (index > -1) {
        Object.keys(action.payload).forEach(function (key) {
          newWorkExperience[index][key] = action.payload[key];
        });
      }
      return {
        ...state,
        workExperience: [...newWorkExperience],
      };

    case actionTypes.DELETE_WORK_EXPERIENCE_DATA:
      if (!action.payload) return state;

      let newWkE = JSON.parse(JSON.stringify(state.workExperience));
      newWkE = state.workExperience.filter(({ id }) => id !== action.payload);
      return {
        ...state,
        workExperience: [...newWkE],
      };

    case actionTypes.ADD_DELETED_WORK_EXPERIENCE_ITEM:
      if (!action.payload) return state;

      return {
        ...state,
        workExperience: [...state.workExperience, ...action.payload],
      };

    case actionTypes.ADD_NEW_EDUCATION:
      if (!action.payload) return state;

      return {
        ...state,
        education: [
          ...state.education,
          {
            ...action.payload,
          },
        ],
      };

    case actionTypes.UPDATE_EDUCATION:
      if (!action.payload) return state;

      return Object.assign({}, state, {
        education: action.payload,
      });

    case actionTypes.UPDATE_EDUCATION_DATA:
      if (!action.payload || !action.payloadId) return state;

      const neweducation = JSON.parse(JSON.stringify(state.education));
      const ejuIndex = state.education
        .map((itm) => {
          return itm.id;
        })
        .indexOf(action.payloadId);
      if (ejuIndex > -1) {
        Object.keys(action.payload).forEach(function (key) {
          neweducation[ejuIndex][key] = action.payload[key];
        });
      }
      return {
        ...state,
        education: [...neweducation],
      };

    case actionTypes.DELETE_EDUCATION_DATA:
      if (!action.payload) return state;

      let newE = JSON.parse(JSON.stringify(state.education));
      newE = state.education.filter(({ id }) => id !== action.payload);
      return {
        ...state,
        education: [...newE],
      };

    case actionTypes.ADD_DELETED_WORK_EDUCATION_ITEM:
      if (!action.payload) return state;

      return {
        ...state,
        education: [...state.education, ...action.payload],
      };

    case actionTypes.ADD_NEW_PROFESSIONAL_SKILL:
      if (!action.payload) return state;
      return {
        ...state,
        professionalSkills: [
          ...state.professionalSkills,
          {
            ...action.payload,
          },
        ],
      };

    case actionTypes.UPDATE_PROFESSIONAL_SKILL:
      if (!action.payload) return state;

      return Object.assign({}, state, {
        professionalSkills: action.payload,
      });

    case actionTypes.UPDATE_PROFESSIONAL_SKILL_DATA:
      if (!action.payload || !action.payloadId) return state;

      const newProfessionalSkills = JSON.parse(JSON.stringify(state.professionalSkills));
      const professionalSkillsIndex = state.professionalSkills
        .map((itm) => {
          return itm.id;
        })
        .indexOf(action.payloadId);
      if (professionalSkillsIndex > -1) {
        Object.keys(action.payload).forEach(function (key) {
          newProfessionalSkills[professionalSkillsIndex][key] = action.payload[key];
        });
      }
      return {
        ...state,
        professionalSkills: [...newProfessionalSkills],
      };

    case actionTypes.DELETE_PROFESSIONAL_SKILL_DATA:
      if (!action.payload) return state;

      let newProfSkills = JSON.parse(JSON.stringify(state.professionalSkills));
      newProfSkills = state.professionalSkills.filter(({ id }) => id !== action.payload);
      return {
        ...state,
        professionalSkills: [...newProfSkills],
      };

    case actionTypes.ADD_DELETED_PROFESSIONAL_SKILL_ITEM:
      if (!action.payload) return state;

      return {
        ...state,
        professionalSkills: [...state.professionalSkills, ...action.payload],
      };

    case actionTypes.ADD_NEW_SKILL:
      if (!action.payload) return state;

      return {
        ...state,
        skills: [
          ...state.skills,
          {
            ...action.payload,
          },
        ],
      };

    case actionTypes.UPDATE_SKILL:
      if (!action.payload) return state;

      return Object.assign({}, state, {
        skills: action.payload,
      });

    case actionTypes.UPDATE_SKILL_DATA:
      if (!action.payload || !action.payloadId) return state;

      const newSkills = JSON.parse(JSON.stringify(state.skills));
      const skillsIndex = state.skills
        .map((itm) => {
          return itm.id;
        })
        .indexOf(action.payloadId);
      if (skillsIndex > -1) {
        Object.keys(action.payload).forEach(function (key) {
          newSkills[skillsIndex][key] = action.payload[key];
        });
      }
      return {
        ...state,
        skills: [...newSkills],
      };

    case actionTypes.DELETE_SKILL_DATA:
      if (!action.payload) return state;

      let newS = JSON.parse(JSON.stringify(state.skills));
      newS = state.skills.filter(({ id }) => id !== action.payload);
      return {
        ...state,
        skills: [...newS],
      };

    case actionTypes.ADD_DELETED_WORK_SKILL_ITEM:
      if (!action.payload) return state;

      return {
        ...state,
        skills: [...state.skills, ...action.payload],
      };

    default:
      return { ...state };
  }
}
