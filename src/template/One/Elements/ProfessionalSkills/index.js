import React from 'react';
import { useDispatch } from 'react-redux';

import { Toast, Util } from '@lib';
import { Text, Dnd } from '@component';

import { addProfessionalSkill, updateProfessionalSkill, deleteProfessionalSkill } from '../../../../redux/core/actions';

import styles from './professional-skills.module.scss';

function ProfessionalSkills(props) {
    const dispatch = useDispatch();

    const _updateEducation = (data) => {
        const storeReorder = Util.mapOrder(props.data, data, 'id');
        dispatch(updateProfessionalSkill(storeReorder));
    };

    const _addNewItem = () => {
        dispatch(addProfessionalSkill());
    };

    const _removeItem = (id, data) => {
        Toast.showUndo(id, data, 'professionalSkills', 'Professional Skill Item Removed');
        dispatch(deleteProfessionalSkill(id));
    };

    const { data } = props;
    return (
        <>
            <div className={styles.mainTitle}>Professional Skills</div>
            <div className={styles.columnNamesHeader}>
                <div className={styles.skills}>SKILLS</div>
                <div className={styles.experience}>EXPERIENCE IN YEARS</div>
                <div className={styles.lastUsed}>LAST USED</div>
            </div>
            <Dnd
                data={data}
                reorder={(e) => _updateEducation(e)}
                additem={_addNewItem}
                removeitem={(e) => _removeItem(e, data)}
                renderItem={(item) => (
                    <div style={{ background: '#fff' }}>
                        <div className={styles.hl} />
                        <Text
                            value={item.title}
                            statename="professionalSkills.title"
                            stateid={item.id}
                            customclass={styles.title}
                            placeholder="Professional Skills"
                            tag="div"
                        />
                        <div className={styles.hl} />
                        <div className={styles.columnNames}>
                            <Text
                                value={item.skill}
                                statename="professionalSkills.skill"
                                stateid={item.id}
                                customclass={styles.skills}
                                placeholder="your professional skills..."
                            />
                            <Text
                                value={item.experienceYear}
                                statename="professionalSkills.experienceYear"
                                stateid={item.id}
                                customclass={styles.experience}
                                placeholder="experience in year"
                            />
                            <Text
                                value={item.lastUsed}
                                statename="professionalSkills.lastUsed"
                                stateid={item.id}
                                customclass={styles.lastUsed}
                                placeholder="last used"
                            />
                        </div>
                    </div>
                )}
            />
        </>
    );
}

/* Export Component =============================== */
export default ProfessionalSkills;
