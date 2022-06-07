import classes from './stryle.module.css';
import {useState} from "react";

function OneSubmenu(props: any){

    return(
        <li key={props.key}><a href={props.url} >{props.collectionName}</a></li>
    )
}

function Submenu(props: any){

    const collList: Array<any> = props.submenu;

    const items: any = collList.map((submenu: any) =>
        <OneSubmenu key={ submenu.key } collectionName={ submenu.collectionName } url={ submenu.url } />
    );

    return(
        <ul className={ classes.submenu }>
            { items }
        </ul>
    )
}

function TopMenuChoose(props: any){
    const object: any = props.object;

    if(object.is_submenu === true) return(
        <li key={ object.key } ><a href={object.url} >{ object.text }</a>
            <Submenu submenu={ object.list }/>
        </li>
    )

    return (
        <li key={ object.key } ><a href={object.url} >{ object.text }</a></li>
    )
}

function TopMenu (props: any){
    const list: Array<any> = props.topmenu;

    const items: any = list.map((object: any) =>
        <TopMenuChoose object={ object }/>
    );

    return(
        <ul className={ classes.topmenu }>
            { items }
        </ul>
    )


}


export function Header(props: any) {

    


    const [collections, setCollections] = useState([
        { key: 1, collectionName: "Clamp1", url: '/public/instruments/clamp0001' },
        { key: 2, collectionName: "Collection2", url: '#' },
        { key: 3, collectionName: "Collection3", url: '#' }
    ])

    const ex = [
        { key: 1, url: '/public/home', text: 'Home', is_submenu: false },
        { key: 2, url: '#', text: 'Instruments', is_submenu: true, list: collections },
        { key: 3, url: '#', text: 'Suspension', is_submenu: false },
        { key: 4, url: '#', text: 'Use', is_submenu: false },
        { key: 5, url: '#', text: 'Docs', is_submenu: false }
    ]



    return(
        <div className={ classes.NavBarPositionBlock }>
            <div></div>
            <div className={ classes.nav }>
                <TopMenu topmenu={ ex }/>
            </div>
            <div></div>
        </div>
    )
}