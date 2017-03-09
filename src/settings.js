/**
*    Copyright (C) 2013-2014 Spark Labs, Inc. All rights reserved. -  https://www.spark.io/
*
*    This program is free software: you can redistribute it and/or modify
*    it under the terms of the GNU Affero General Public License, version 3,
*    as published by the Free Software Foundation.
*
*    This program is distributed in the hope that it will be useful,
*    but WITHOUT ANY WARRANTY; without even the implied warranty of
*    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*    GNU Affero General Public License for more details.
*
*    You should have received a copy of the GNU Affero General Public License
*    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*
*    You can download the source here: https://github.com/spark/spark-server
*
* @flow
*
*/

import path from 'path';

/* eslint-disable sorting/sort-object-props */
export default {
  BUILD_DIRECTORY: path.join(__dirname, '../data/build'),
  DEVICE_DIRECTORY: path.join(__dirname, '../data/deviceKeys'),
  FIRMWARE_DIRECTORY: path.join(__dirname, '../data/knownApps'),
  FIRMWARE_REPOSITORY_DIRECTORY: path.join(__dirname, '../../spark-firmware'),
  SERVER_KEY_FILENAME: 'default_key.pem',
  SERVER_KEYS_DIRECTORY: path.join(__dirname, '../data'),
  USERS_DIRECTORY: path.join(__dirname, '../data/users'),
  WEBHOOKS_DIRECTORY: path.join(__dirname, '../data/webhooks'),

  ACCESS_TOKEN_LIFETIME: 7776000, // 90 days,
  API_TIMEOUT: 30000, // Timeout for API requests.
  CRYPTO_SALT: 'aes-128-cbc',
  LOG_REQUESTS: true,
  LOGIN_ROUTE: '/oauth/token',

  EXPRESS_SERVER_CONFIG: {
    PORT: 8080,
  },
  TCP_DEVICE_SERVER_CONFIG: {
    ENABLE_SYSTEM_FIRWMARE_AUTOUPDATES: true,
    HOST: 'localhost',
    PORT: 5683,
  },
};
