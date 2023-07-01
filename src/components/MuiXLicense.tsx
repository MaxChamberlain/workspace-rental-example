'use client';

import { LicenseInfo } from '@mui/x-license-pro';


export default function MuiXLicense() {
    let key = process.env.NEXT_MUI_KEY
    if(!key) {
        console.log('No license key found in for MUI pro.')
        return null
    }
    LicenseInfo.setLicenseKey(key);
    return null;
}