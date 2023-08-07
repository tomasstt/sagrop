/*
*********************************************************************
*                                                                   *
*              Copyright © 2023 Acronym Web Design                  *
*           All rights reserved. Unauthorized copying               *
*        or reproduction of this file or its contents is            *
*           prohibited. This file is proprietary and                *
*         confidential. It may not be disclosed, copied,            *
*                  reproduced or used without                       *
*            express written permission from Acronym.               *
*                                                                   *
*   File: random_jwt_secret.js                                      *
*   Description: This file generates a random JWT secret with       *
*                32 bytes (256 bits) and logs it to the console.    *
*                                                                   *
*   Author: Acronym Web Design Team | AjM                           *
*                                                                   *
*********************************************************************
*/

const crypto = require('crypto');

// Generate a random JWT secret with 32 bytes (256 bits)
const jwtSecret = crypto.randomBytes(32).toString('hex');

// Log the generated JWT secret
console.log('JWT Secret:', jwtSecret);