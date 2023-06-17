import { PrettyChatWindow } from 'react-chat-engine-pretty'
// 
const ChatsPage = (props)=>{
    const projectId = import.meta.env.VITE_CHATENGINE_PROJECTID;
    return (
        <div style={{height:'100vh'}}>
            <PrettyChatWindow
               projectId={projectId}
               username={props.user.username}
               secret={props.user.secret}
               style={{height:'100%'}}
            />
        </div>
    )
}
export default ChatsPage;