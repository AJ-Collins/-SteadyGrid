// Session cookie names, shared by edge middleware and server auth code.
// Both are HttpOnly — tokens NEVER touch localStorage or JS-readable state.
// They carry Domain=.steadygrid.com in production (see SITE_COOKIE_DOMAIN),
// so every surface receives them; each surface handler therefore checks ONLY
// its own gating rule and handlers re-verify.
export const SESSION_COOKIE_NAME = "steadygrid_session";
export const REFRESH_COOKIE_NAME = "steadygrid_refresh";

// Short aliases used by server auth code.
export const SESSION_COOKIE = SESSION_COOKIE_NAME;
export const REFRESH_COOKIE = REFRESH_COOKIE_NAME;
