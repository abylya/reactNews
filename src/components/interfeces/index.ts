

export interface INews{
    author:string;
    catigory:string[];
    description:string;
    id:string;
    image:string;
    language:string;
    published:string;
    title:string;
    url:string;
}

export type CatigoriysType= "All"|"regional"|
"technology"|
"lifestyle"|
"business"|
"general"|
"programming"|
"science"|
"entertainment"|
"world"|
"sports"|
"finance"|
"academia"|
"politics"|
"health"|
"opinion"|
"food"|
"game"|
"fashion"|
"academic"|
"crap"|
"travel"|
"culture"|
"economy"|
"environment"|
"art"|
"music"|
"notsure"|
"CS"|
"education"|
"redundant"|
"television"|
"commodity"|
"movie"|
"entrepreneur"|
"review"|
"auto"|
"energy"|
"celebrity"|
"medical"|
"gadgets"|
"design"|
"EE"|
"security"|
"mobile"|
"estate"|
"funny";

export interface NewsApiResponse{
    news:INews[];
    page:number;
    status:string;
}
export interface CatigorysApiResponse{
    categories:CatigoriysType[];
    description:string;
    status:string;
}

export interface IFilters{
    page_number:number;
    page_size:number;
    catigory:CatigoriysType;
    keywords:string|number|null;
}

export type ParamsType=Partial<IFilters>;

export interface PaginationProps{
    handlePage:(page:number)=>void,
    handlePrevPage:()=>void,
    handleNextPage:()=>void,
    currenPage:number,
    totalPage:number,
}