export function checkEmailVariable() {
    if(process.env.NEXT_EMAIL_USER === undefined || 
        process.env.NEXT_EMAIL_PASS === undefined || 
        process.env.NEXT_EMAIL_HOST === undefined || 
        process.env.NEXT_EMAIL_SERVICE === undefined ||
        process.env.NEXT_EMAIL_USER === null || 
        process.env.NEXT_EMAIL_PASS === null || 
        process.env.NEXT_EMAIL_HOST === null || 
        process.env.NEXT_EMAIL_SERVICE === null
    ) {
        throw new Error('Missing parameters send mail NEXT_EMAIL_USER or NEXT_EMAIL_PASS or NEXT_EMAIL_HOST or NEXT_EMAIL_SERVICE');
    }

}