import { PrettyChatWindow } from 'react-chat-engine-pretty'
// 
const ChatsPage = (props)=>{
    return (
        <div style={{height:'100vh'}}>
            <PrettyChatWindow
               projectId='8ee01a0e-863d-4b06-9e60-c10d6a467cd9'
               username={props.user.username}
               secret={props.user.secret}
               style={{height:'100%'}}
            />
        </div>
    )
}
export default ChatsPage;