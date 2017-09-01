/*
* @Author: hhombergs
* @Date:   2017-08-29
* @Last Modified by:   hhombergs
* @Last Modified time: 2017-08-29
*/

import React from 'react';

const FullTitleField = ({ record = {}, size = 85 }) => <span>
    <span style={{ display: 'inline-block', width: size/3 }}>&nbsp;</span>
    {record.street}, {record.zip}, {record.city}, {record.country}
</span>;

export default FullTitleField;