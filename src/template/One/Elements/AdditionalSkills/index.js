import React from 'react';
import { useDispatch } from 'react-redux';

import { Toast, Util } from '@lib';
import { Text, Dnd } from '@component';

import { addAdditionalSkill, updateAdditionalSkill, deleteAdditionalSkill } from '../../../../redux/core/actions';

import styles from './additional-skills.module.scss';

function AdditionalSkills(props) {
    const dispatch = useDispatch();

    const _updateEducation = (data) => {
        const storeReorder = Util.mapOrder(props.data, data, 'id');
        dispatch(updateAdditionalSkill(storeReorder));
    };

    const _addNewItem = () => {
        dispatch(addAdditionalSkill());
    };

    const _removeItem = (id, data) => {
        Toast.showUndo(id, data, 'education', 'Additional Skill Item Removed');
        dispatch(deleteAdditionalSkill(id));
    };

    const { data } = props;
    return (
        <Dnd
            data={data}
            reorder={(e) => _updateEducation(e)}
            additem={_addNewItem}
            removeitem={(e) => _removeItem(e, data)}
            renderItem={(item) => (
                <div style={{ background: '#fff' }}>
                    <Text
                        value={item.title}
                        statename="education.title"
                        stateid={item.id}
                        customclass={styles.title}
                        placeholder="Additional Skills Title"
                        tag="div"
                    />
                    <Text
                        value={item.date}
                        statename="education.date"
                        stateid={item.id}
                        customclass={styles.educationExplain}
                        placeholder="your additional skills..."
                    />
                </div>
            )}
        />
    );
}

/* Export Component =============================== */
export default AdditionalSkills;
