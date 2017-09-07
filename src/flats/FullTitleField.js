/*
* @Author: hhombergs
* @Date:   2017-08-29
* @Last Modified by:   hhombergs
* @Last Modified time: 2017-09-07
*/

import React from 'react';
import PropTypes from 'prop-types';

const FullTitleField = ({ record = {}, size = 85 }) => (
    <span>
        <span style={{ display: 'inline-block', width: size / 3 }}>&nbsp;</span>
        {record.street}, {record.zip}, {record.city}, {record.country}
    </span>
);

FullTitleField.propTypes = {
    record: PropTypes.object,
    size: PropTypes.string,
};

export default FullTitleField;
