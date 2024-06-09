export function formatDate(date){
    const option={
        year:"numeric",
        mountd:"long",
        weekday:"long",
        day:"numeric"
    }
       
    return date.toLocaleDateString("en-US",option); 
}