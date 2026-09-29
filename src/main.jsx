import {createRoot} from "react-dom/client"
import { Compiled } from "./compile.jsx";

const root  = createRoot(document.getElementById("root"));

root.render(
    <Compiled/>
)
