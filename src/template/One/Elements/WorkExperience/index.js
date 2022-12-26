import React from 'react';

import { Toast, Util } from '@lib';
import { Text, Dnd } from '@component';

import { useDispatch } from 'react-redux';

import { addNewWorkExperience, updateWorkExperience, deleteWorkExperienceData } from '../../../../redux/core/actions';

import styles from './experience.module.scss';

function WorkExperience(props) {
    const dispatch = useDispatch();

    const _updateWorkExperience = (data) => {
        const storeReorder = Util.mapOrder(props.data, data, 'id');
        dispatch(updateWorkExperience(storeReorder));
    };

    const _addNewItem = () => {
        dispatch(addNewWorkExperience());
    };

    const _removeItem = (id, data) => {
        Toast.showUndo(id, data, 'workExperience', 'Work Item Removed');
        dispatch(deleteWorkExperienceData(id));
    };

    const { data, color } = props;
    return (
        <Dnd
            data={data}
            reorder={(e) => _updateWorkExperience(e)}
            additem={_addNewItem}
            removeitem={(e) => _removeItem(e, data)}
            renderItem={(item) => (
                <div className={styles.workBox}>
                    <div className={styles.leftWork}>
                        <Text
                            value={item.companyName}
                            statename="workExperience.companyName"
                            stateid={item.id}
                            placeholder="Facebook"
                            customclass={styles.workCompany}
                            tag="div"
                        />
                        <Text
                            value={item.companyText}
                            statename="workExperience.companyText"
                            stateid={item.id}
                            placeholder="Facebook, Inc. is an American social media and technology company based in Menlo Park, California."
                        />
                    </div>
                    <div className={styles.rightWork}>
                        <Text
                            value={item.projectRoles}
                            statename="workExperience.projectRoles"
                            placeholder="Project roles"
                            customclass={styles.title}
                            tag="div"
                        />
                        <Text
                            value={item.jobTitle}
                            statename="workExperience.jobTitle"
                            stateid={item.id}
                            customclass={styles.position}
                            placeholder="QA Engineer"
                        />
                        <Text
                            value={item.period}
                            statename="workExperience.period"
                            placeholder="Period"
                            customclass={styles.title}
                            tag="div"
                        />
                        <Text
                            value={item.date}
                            statename="workExperience.date"
                            stateid={item.id}
                            placeholder="May 2021 – till now"
                            customclass={styles.workDate}
                            tag="div"
                        />
                        <Text
                            value={item.responsibilities}
                            statename="workExperience.responsibilities"
                            placeholder="Responsibilities & achievements"
                            customclass={styles.title}
                            tag="div"
                        />
                        <div className={styles.experienceText}>
                            <Text
                                value={item.experienceText}
                                statename="workExperience.experienceText"
                                stateid={item.id}
                                placeholder="- your experience..."
                            />
                        </div>
                    </div>
                </div>
            )}
        />
    );
}

/* Export Component =============================== */
export default WorkExperience;
