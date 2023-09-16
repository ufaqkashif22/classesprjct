import React,{Component} from "react";


class Lists extends Component{
    constructor(){
        super()
        this.state={
         posts:[] ,
         isLoaded:false
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((posts) =>{ 
    setTimeout(()=>{
        this.setState({posts:posts,isLoaded:true}) 
    },3000)
        //console.log(posts)
    });

    }
////here is component update() lifecyclemethod in class///
    componentDidUpdate(prevprops,prevstate){
        console.log("component is updating when previous state is run ",prevstate.posts)
    }

    render(){
      
    const{posts,isLoaded}=this.state
    console.log(posts);
    return(
          
        <>
           <div>
        
           {!isLoaded ?<div>loading...</div>:
           <ul>
                {posts.map((item)=>{
                return <li key= {item.id}>{item.username},{item.email}</li>    
                })}
                  
                </ul>
                }
            
            <h1>List Of Posts</h1>
           </div> 
        </>
        )
    }
 
}




export default Lists;