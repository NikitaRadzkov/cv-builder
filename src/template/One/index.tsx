import React from 'react';
import { connect } from 'react-redux';

import { Text } from '@component';
import { WorkExperience, Education, Skills } from './Elements';
import styles from './one.module.scss';
import Header from '../../component/Header';

import { TProps } from './one';
import ProfessionalSkills from './Elements/ProfessionalSkills';

class Template extends React.Component<TProps> {
  constructor(props: TProps) {
    super(props);
  }

  render() {
    const { itemStatus } = this.props;
    return (
      <div className={styles.insideCon}>
        <Header />
        <div>
          <Text value={this.props.userData.name} statename="userData.name" placeholder="Your Name" customclass={styles.name} />
        </div>
        <div>
          <Text
            value={this.props.userData.position}
            statename="userData.position"
            placeholder="QA Engineer"
            customclass={styles.position}
          />
        </div>
        <div className={styles.section}>
          {itemStatus.info && (
            <div className={[styles.info, styles.box].join(' ')}>
              <Text
                value={this.props.userData.educationTitle}
                statename="userData.educationTitle"
                placeholder="Education"
                customclass={styles.title}
                tag="div"
              />
              <Text
                value={this.props.userData.education}
                statename="userData.education"
                placeholder="Higher Education in Computer Science and Software Engineering"
                customclass={styles.leftSection}
              />
              <Text
                value={this.props.userData.languageProficiency}
                statename="userData.languageProficiency"
                placeholder="Language proficiency"
                customclass={styles.title}
                tag="div"
              />
              <Text
                value={this.props.userData.language}
                statename="userData.language"
                placeholder="English - B2"
                customclass={styles.leftSection}
              />
              <Text
                value={this.props.userData.domainsTitle}
                statename="userData.domainsTitle"
                placeholder="Domains"
                customclass={styles.title}
                tag="div"
              />
              <Text
                value={this.props.userData.domains}
                statename="userData.domains"
                placeholder="Your domains..."
                customclass={styles.leftSection}
              />
            </div>
          )}
          <div className={styles.vl} />
          {itemStatus.profile && (
            <div className={[styles.profile, styles.box].join(' ')}>
              <Text
                value={this.props.userData.experienceTitle}
                statename="userData.experienceTitle"
                placeholder="Profile"
                customclass={styles.title}
                tag="div"
              />
              <Text value={this.props.userData.experience} statename="userData.experience" placeholder="I'm a QA engineer..." />
              {itemStatus.education && (
                <div className={[styles.education, styles.box].join(' ')}>
                  <Education data={this.props.education} />
                </div>
              )}
              {itemStatus.skills && (
                <div className={[styles.skills, styles.box].join(' ')}>
                  <Text
                    value={this.props.userData.programmingTechnologiesTitle}
                    statename="userData.programmingTechnologiesTitle"
                    placeholder="Programming technologies"
                    customclass={styles.title}
                    tag="div"
                  />

                  <Skills data={this.props.skills} />
                </div>
              )}
            </div>
          )}
        </div>

        {itemStatus.workExperience && (
          <div className={[styles.workExperience, styles.box].join(' ')}>
            <Text
              value={this.props.userData.projectsTitle}
              statename="userData.projectsTitle"
              placeholder="Projects"
              customclass={styles.mainTitle}
              tag="div"
            />
            <WorkExperience data={this.props.workExperience} color={this.props.theme.color} />
          </div>
        )}
        <ProfessionalSkills data={this.props.professionalSkills} />
      </div>
    );
  }
}

const mapStateToProps = (store: any) => ({
  theme: store.theme,
  userData: store.userData,
  workExperience: store.workExperience,
  education: store.education,
  skills: store.skills,
  professionalSkills: store.professionalSkills,
  itemStatus: store.itemStatus,
});

const mapDispatchToProps = () => ({});

/* Export Component =============================== */
export default connect(mapStateToProps, mapDispatchToProps)(Template);
