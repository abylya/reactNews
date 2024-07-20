export function formatDate(date:Date){
    const option:Intl.DateTimeFormatOptions={
        year:"numeric",
        month:"long",
        weekday:"long",
        day:"numeric"
    }
       
    return date.toLocaleDateString("en-US",option); 
}