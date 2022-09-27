
// Start Regex
export const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

export const phoneRegex = /^\+?(\d[.\- ]*){9,20}(e?xt?\d{1,5})?$/

export const telRegex = /^\+?(\d[.\- ]*){9,20}(e?xt?\d{1,5})?$/

export const faxRegex = /^\+?(\d[.\- ]*){9,20}(e?xt?\d{1,5})?$/

export const postCodeRegex = /^\d{3}[-]\d{4}$|^\d{3}[-]\d{2}$|^\d{3}$|^\d{5}$|^\d{7}$/

export const birthdayRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

export const urlRegex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im

/** Password rules: 
 - At least one upper case English letter, (?=.*?[A-Z]) 
 - At least one lower case English letter, (?=.*?[a-z])
 - At least one digit, (?=.*?[0-9])
 - At least one special character, (?=.*?[#?!@$%^&*-])
 - Minimum eight in length .{8,}
**/
export const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g

export const katakanaRegex = /^[ァ-ヶｦ-ﾟー\s]+$/u
// End Regex