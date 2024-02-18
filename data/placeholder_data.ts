
interface User {
    username: string;
    name: string;
    numJournals: number;
    lastSeen: string;
    photo?: string;
}

interface Journal{
    id:string;
    title: string;
    content:string;
    createdAt:string;
    updatedAt:string;
}

interface UserStats{
    totalJournals : number,
    avgCount : number,
    lastActive: string,
}


function formatDate(timestamp:number) {
    const date = new Date(timestamp);
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(2);
  
    return `${day}-${month}-${year}`;
  }



const exampleUser: User = {
    username: 'johnnyboy',
    name: 'John Doe',
    numJournals: 3,
    lastSeen: '2024-01-08',
};


const UserStat : UserStats = {
    totalJournals : 3,
    avgCount : 420,
    lastActive: formatDate(Date.now()),
}



const exampleJournal: Journal[]=[
    {
    id:"0",
    title: "Sem 1 first Day!",
    content: "Today was the first day of sem 4, it was really great!",
    createdAt:formatDate(Date.now()),
    updatedAt:formatDate(Date.now()),
    },
    {
        id:"1",
        title: "Teaching Assistant Job!",
        content: "I started my teaching assistant job today, taught kids today and it was ok!",
        createdAt:formatDate(Date.now()),
        updatedAt:formatDate(Date.now()),
    },
    {
    id:"2",
    title: "Machine Learning Project!",
    content: "You are the best boy and the girl and the  person! Nahi aur kuch nahi hai!",
    createdAt:formatDate(Date.now()),
    updatedAt:formatDate(Date.now()),
}
]

module.exports = {exampleJournal,exampleUser, UserStat}