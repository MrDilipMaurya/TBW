
import Link from "next/link"
export default function Sidebar() {
    return (


        <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
        >
            {/* Sidebar - Brand */}

            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
                <Link className="nav-link" href="/home">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span>
                </Link>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">Interface</div>
            {/* Nav Item - Pages Collapse Menu */}
           
            {/* Nav Item - Utilities Collapse Menu */}
          
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
           
            {/* Nav Item - Pages Collapse Menu */}

            {/* Nav Item - Charts */}
            <li className="nav-item">
                <Link className="nav-link" href="/project-category">
                    <i className="fas fa-fw fa-table" />
                    <span>Project Category</span>
                </Link>
            </li>
            {/* Nav Item - Tables */}
            <li className="nav-item">
                <Link className="nav-link" href="/project">
                    <i className="fas fa-fw fa-table" />
                    <span>Projects</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/reviews">
                    <i className="fas fa-fw fa-table" />
                    <span>Reviews</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/service">
                    <i className="fas fa-fw fa-table" />
                    <span>Services</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/contact-option">
                    <i className="fas fa-fw fa-table" />
                    <span>Contact Option</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/contacts">
                    <i className="fas fa-fw fa-table" />
                    <span>Contact</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/case-studies">
                    <i className="fas fa-fw fa-table" />
                    <span>Case Studies</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/client">
                    <i className="fas fa-fw fa-table" />
                    <span>Client Images</span>
                </Link>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}
            {/* <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" />
            </div> */}
            {/* Sidebar Message */}

        </ul>


    )
}

