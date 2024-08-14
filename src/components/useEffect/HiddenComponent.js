import { useEffect } from "react";


function HiddenComponent (){
    useEffect(()=>{
        console.log('hidden component Mounted');

        return ()=>{
            console.log('hidden component Unmounted');
        }
    })
    return (
        <div>
           <p>This is the HiddenComponent.</p>
        </div>
    )
}

export default HiddenComponent;