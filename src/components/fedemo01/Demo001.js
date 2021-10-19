import './demo001.css';

function Demo001(){
    return(
        <div className="container demo001">
            {
                demoAb.map((item) =>{
                    return(
                        <>
                        {item.map(({name,lname,id}) => {
                            return (
                                <Demo002 name={name} lname={lname} id={id}/>
                                )
                        })}
                        </>
                        
                    )
                })
            }
            
        </div>
    );
}

function Demo002({name,lname,id}){
    return(
        
            <div className="items001">
                <div>{name}</div>
                <div>{lname}</div>
                <div>{id}</div>
            </div>
           
        
    );
}

export default  Demo001;

const demoAb =[
    [
        {
            name:'dinesh',
            lname:'mandloi',
            id:'925'
        },
        {
            name:'john',
            lname:'smith',
            id:'926'
        }
    ],
    [
        {
            name:'dinesh01',
            lname:'mandloi01',
            id:'925'
        },
        {
            name:'john01',
            lname:'smith01',
            id:'92601'
        }
    ],
    
];