import appImage from '../assets/state-mgmt.png';

export function Sidebar() {
    return (
      // Main Sidebar Container
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="#" className="brand-link">
          <img src={appImage} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: .8}}/>
          <span className="brand-text font-weight-light">PCA WEB</span>
        </a>
  
        {/** Sidebar **/}
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              {/* <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"> */}
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div>
  
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Dashboard
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Device Management
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  }