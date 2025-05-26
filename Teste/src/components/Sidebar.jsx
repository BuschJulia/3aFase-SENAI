import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Sidebar.css';


function NavItem({ icon, activeIcon, label, active, className = '' }) {
    return (
        <div className={`nav-item ${active ? 'active' : ''} ${className}`}>
            <img
                src={active ? activeIcon : icon}
                alt={label}
                width={24}
                height={24}
            />
            <span>{label}</span>
        </div>
    );
}

export default function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();

    const pathname = location.pathname;

    const handleLogout = () => {
        localStorage.removeItem("clientesProvisor");
        navigate('/');
    };

    const handleDeleteAccount = async () => {
        const confirmDelete = window.confirm("Tem certeza que deseja excluir sua conta? Isso não poderá ser desfeito.");
        if (!confirmDelete) return;

        const clienteRaw = localStorage.getItem("clientesProvisor");
        if (!clienteRaw) {
            alert("Erro ao localizar usuário.");
            return;
        }

        try {
            const cliente = JSON.parse(clienteRaw);
            // Substitua isso com sua lógica de deleção:
            // await genericas("clientes", "id", cliente.id);
            localStorage.removeItem("clientesProvisor");
            alert("Conta excluída com sucesso.");
            navigate('/');
        } catch (error) {
            console.error(error);
            alert("Erro ao excluir conta.");
        }
    };

    return (
        <div className="sidebar">
            <div>
                <div className="sidebar-header">INKLUA</div>
                <nav className="sidebar-nav">
                    <Link to="/clientes/perfil/dashboard">
                        <NavItem
                            icon="./Dashboard.svg"
                            activeIcon="/icons/perfilCliente/dashboardB.svg"
                            label="Dashboard"
                            active={pathname === '/clientes/perfil/dashboard'}
                        />
                    </Link>
                    <Link to="/clientes/perfil/evento">
                        <NavItem
                            icon="/icons/perfilCliente/calendario.svg"
                            activeIcon="/icons/perfilCliente/calendarioB.svg"
                            label="Eventos"
                            active={pathname === '/clientes/perfil/evento'}
                        />
                    </Link>
                    <Link to="/clientes/perfil">
                        <NavItem
                            icon="/icons/perfilCliente/perfilAzul.svg"
                            activeIcon="/icons/perfilCliente/perfil.svg"
                            label="Perfil"
                            active={pathname === '/clientes/perfil'}
                        />
                    </Link>
                </nav>
            </div>
            <nav className="sidebar-actions">
                <div onClick={handleDeleteAccount}>
                    <NavItem
                        icon="/icons/perfilCliente/voltar.svg"
                        activeIcon="/icons/perfilCliente/voltar.svg"
                        label="Excluir a conta"
                        active={false}
                        className="delete-account"
                    />
                </div>
                <div onClick={handleLogout}>
                    <NavItem
                        icon="/icons/perfilCliente/voltar.svg"
                        activeIcon="/icons/perfilCliente/voltar.svg"
                        label="Sair da conta"
                        active={false}
                        className="logout"
                    />
                </div>
            </nav>
        </div>
    );
}
