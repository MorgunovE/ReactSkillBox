import React, {useEffect, useState} from "react";
import './main.global.less'
import {hot} from "react-hot-loader/root";
import {Layout} from './shared/Layout'
import {Header} from "./shared/Header/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {Dropdown} from "./shared/Dropdown";
import {EColor, Text} from "./shared/Text";
import {Break} from "./shared/Break";
import {useToken} from "./hooks/useToken";
import {tokenContext} from "./shared/context/tokenContext";
import {UserContextProvider} from "./shared/context/userContext";
// import {GenericList, MyList} from "./shared/GenericList";
// import {GenericList} from "./shared/GenericList";
// import {generateId, generateRandomString} from "./utils/react/generateRandomIndex";
// import {merge} from "./utils/js/merge";

// import {getValue} from "./utils/react/pickFromSyntheticEvent";
// import {MyHooks, useIsMounted} from "./HooksExample";
// import {MyHooks} from "./HooksExample";

// const LIST = [
  // {value:'some'},
  // {value:'other some'},
  // {value:'some'},
  // {text:'some'},
  // {text:'other some'},
  // {text:'some'},
  // {As:'li' as const, text:'some'},
  // {As:'li' as const, text:'other some'},
  // {As:'li' as const, text:'some'},
  // {As:'a' as const, text:'some'},
  // {As:'a' as const, text:'other some'},
  // {As:'a' as const, text:'some'},
// ].map((item)=>({ ...item, id: generateRandomString()}))
// ].map(generateId)

function AppComponent(){
  
  // const [isVisible, setIsVisible] = React.useState(true)
  // const [title, setTitle] = React.useState('')
  // const [isVisible] = useIsMounted()
  
  // const [list, setList] = React.useState(LIST)
  // const handleItemClick = (id: string)=>{
    // console.log(id)
    // setList(list.filter((item)=> item.id !== id))
  // }
  // const handleAdd = ()=>{
    // setList(list.concat(generateId({value: generateRandomString()})))
    // setList(list.concat(generateId({text: generateRandomString()})))
    // setList(list.concat(generateId({text: generateRandomString(), As:'li' as const})))
    // setList(list.concat(generateId({text: generateRandomString(), As:'a' as const})))
  // }
  // const [token, setToken] = useState('')
  // useEffect(() =>{
  //   if (window.__token__){
  //     setToken(window.__token__)
  //   }
  // },[])
  const [token] = useToken()
  // const {Provider} = tokenContext
  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <Layout>
          <Header />
          <Content>
            <CardsList />
          </Content>
        </Layout>
      </UserContextProvider>
    </tokenContext.Provider>
  // <Layout>
  //   <Header token={token} />
  //   <Content>
  //     <CardsList />
  //     {/*<button onClick={()=> setIsVisible(!isVisible)}>Change me!</button>*/}
  //     {/*<input type="text" onChange={getValue(setTitle)}/>*/}
  //     {/*{isVisible && <MyHooks title={title} id="11" />}*/}
  //     {/*<MyList list={LIST} onClick={console.log}/>*/}
  //     {/*<button onClick={handleAdd}>Add Element</button>*/}
  //     {/*<MyList list={list.map(merge({ onClick: handleItemClick}))}/>*/}
  //     {/*<GenericList list={list.map(merge({ onClick: handleItemClick}))}/>*/}
  //     {/*<ul>*/}
  //     {/*  <GenericList list={list.map(merge({ onClick: handleItemClick}))}/>*/}
  //     {/*</ul>*/}
  //     <br/>
  //     <Text size={20} mobileSize={28} color={EColor.green} bold>label1</Text>
  //     <Break size={8} mobileSize={16} top/>
  //     <Text size={20}>label2</Text>
  //     <Break size={8} mobileSize={16} top/>
  //     <Text size={20} mobileSize={16}>label3</Text>
  //     <br/>
  //     <div style={{padding: 20}}>
  //       <br/>
  //       <Dropdown onClose={()=> console.log('closed')} onOpen={()=> console.log('opened')} isOpen={false} button={<button>Test</button>}>
  //         <CardsList />
  //       </Dropdown>
  //     </div>
  //   </Content>
  // </Layout>
  )
}
export const App = hot(()=> <AppComponent/>)