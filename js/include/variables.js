export const FOUNDATION_URL = process.env.APP_PS_API_URL || 'https://minternetwork.com';
export const FOUNDATION_API_URL = FOUNDATION_URL + '/api/v1/';
export const LANGUAGE_COOKIE_KEY = 'minter-language';
export const TG_STEP_TYPE_START = 'PASSPORT_STARTED';
export const TG_STEP_TYPE_SUBMIT = 'PASSPORT_SUBMITED';
export const TG_BOT_NAME = process.env.APP_ENV === 'production' ? 'MinterNetworkBot' : 'MinterNetwork_Bot';
