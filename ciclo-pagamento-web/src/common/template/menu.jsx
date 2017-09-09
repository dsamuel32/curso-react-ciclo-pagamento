import React from  'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default propos => (
    <ul className="sidebar-menu">
        <MenuItem path="#" icon="dashboard" label="DashBoard"/>
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="#billingCycles" label="Ciclos de Pagamento" icon="usd"/>
        </MenuTree>
    </ul>
)