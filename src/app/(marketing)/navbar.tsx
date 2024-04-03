import { Volume, Linkedin, ArrowBigRight } from "lucide-react"

export function Navbar() {
    return (
        <div className="navbar" id="nav">
            <ul>
                <li>E-Tender</li>
                <li>RAJBHASHA</li>
                <li>ORDINANCES</li>
                <li>QIP PROGRAMS</li>
                <li>TENDERS</li>
                <li>JOBS</li>
                <li>INTRAWEB</li>
                <li>IIITDMJ-EMAIL</li>
                <li>STUDENT'S  PORTAL</li>
                <li>IIIT COUNCIL</li>
                <li className="sound">
                    <Volume />
                    <span>SCREEN READER ACCESS</span>
                </li>
                <li>
                    <button className="but1 but">A</button>
                    <button className="but2 but ">A</button>
                    <button className="but3 but">A</button>
                </li>
                <li>
                    <select name="" className="lang">

                        <option value="">Select language</option>
                        <option value="">Hindi</option>
                    </select>
                </li>

            </ul>

        </div >
    )
}