/*
* @Author: hhombergs
* @Date:   2017-08-29
* @Last Modified by:   hhombergs
* @Last Modified time: 2017-08-29
*/

import React from 'react';

export default (basePath, id, token) =>
`${basePath}/${encodeURIComponent(id)}/${encodeURIComponent(token)}`