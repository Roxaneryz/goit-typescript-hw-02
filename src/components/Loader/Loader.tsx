@ts-nocheck

import { InfinitySpin } from "react-loader-spinner";
import css from "./loader.module.css"

// interface Props {
//   visible: boolean;
//   width: number;
//   color: string;
//   ariaLabel: string;
// }

const Loader = () => {
    return (
        <div className={css.loader}>
            <InfinitySpin 
                visible={true}
                width="200"
                color="#4fa94d"
                ariaLabel="infinity-spin-loading"
            />
        </div>
     
    );
}

export default Loader