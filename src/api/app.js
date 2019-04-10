const root = ''
export const IS_MOCK = false
export const API_BASE_URL = IS_MOCK ? '/mock/' : (process.env.NODE_ENV === 'development' ? '' : 'server path')
export const TOKEN_KEY = 'X-Token'
export const HISTORY_KEY = 'History-Key'
