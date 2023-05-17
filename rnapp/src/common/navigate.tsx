import { NavigationActions } from 'react-navigation';
//타입관련 수정 필시 적용해야함(any 위험)
let _navigator:any;

function setTopLevelNavigator(navigatorRef:any) {
    _navigator = navigatorRef;
}

function navigate(routeName:string, params:any) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    )
    
}

function back() { 
    _navigator.dispatch(
        NavigationActions.back()
    );
}

// add other navigation functions that you need and export them

export default {
    navigate,
    setTopLevelNavigator,
    back,
};