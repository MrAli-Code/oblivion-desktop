import { Language } from './type';

const brazilianPortuguese: Language = {
    global: {},
    status: {
        connecting: 'Conectando ...',
        connected: 'Conectado',
        connected_confirm: 'Conectado',
        disconnecting: 'Desconectando ...',
        disconnected: 'Desconectado',
        ip_check: 'Verificando IP ...',
        keep_trying: 'Por favor, espere um momento para tentar novamente...'
    },
    home: {
        title_warp_based: 'Baseado em Warp',
        drawer_settings_warp: 'Configurações do Warp',
        drawer_settings_routing_rules: 'Regras de Roteamento',
        drawer_settings_app: 'Configurações do Aplicativo',
        drawer_settings_scanner: 'Configurações do Scanner',
        drawer_settings_network: 'Configurações de Rede',
        drawer_log: 'Log do Aplicativo',
        drawer_update: 'Atualizar',
        drawer_update_label: 'Nova Atualização',
        drawer_speed_test: 'Teste de Velocidade',
        drawer_about: 'Sobre o Aplicativo',
        drawer_lang: 'Alterar Idioma',
        drawer_singbox: 'Configurações de Túnel'
    },
    toast: {
        ip_check_please_wait: 'Por favor, aguarde alguns segundos para tentar novamente!',
        ir_location:
            'A Cloudflare se conectou a um IP com localização no Irã, diferente do seu IP real. Você pode usá-lo para contornar a filtragem, mas não as sanções. Não se preocupe! Você pode mudar a localização nas configurações usando a opção "Gool" ou "Psiphon".',
        btn_submit: 'Entendido',
        copied: 'Copiado!',
        cleared: 'O log foi limpo!',
        please_wait: 'Por favor, aguarde ...',
        offline: 'Você está offline!',
        settings_changed: 'Aplicar configurações requer reconexão.',
        hardware_usage: 'Ativar esta opção aumentará o uso dos recursos de hardware.',
        config_added:
            'A configuração foi adicionada com sucesso, e para usá-la, você deve clicar na conexão.',
        profile_added: 'O ponto final foi adicionado com sucesso ao perfil.'
    },
    settings: {
        title: 'Configurações do Warp',
        more: 'Mais Configurações',
        method_warp: 'Warp',
        method_warp_desc: 'Ativar Warp',
        method_gool: 'Gool',
        method_gool_desc: 'Ativar WarpInWarp',
        method_psiphon: 'Psiphon',
        method_psiphon_desc: 'Ativar Psiphon',
        method_psiphon_location: 'País',
        method_psiphon_location_auto: 'aleatório',
        method_psiphon_location_desc: 'Selecione o IP do país desejado',
        endpoint: 'Endpoint',
        endpoint_desc: 'Combinação de IP ou nome de domínio, junto com porta',
        license: 'Licença',
        license_desc: 'O consumo de licença é duplicado',
        option: 'Configurações do Aplicativo',
        network: 'Configurações de Rede',
        proxy_mode: 'Configuração',
        proxy_mode_desc: 'Definir Configurações de Proxy',
        port: 'Porta do Proxy',
        port_desc: 'Definir a porta proxy do aplicativo',
        share_vpn: 'Compartilhar (LAN)',
        share_vpn_desc: 'Compartilhar um proxy na rede',
        dns: 'DNS',
        dns_desc: 'Bloquear anúncios & conteúdo adulto',
        dns_error: 'Aplicável aos métodos Warp & Gool',
        ip_data: 'Verificação de IP',
        ip_data_desc: 'Exibir IP & localização após a conexão',
        data_usage: 'Uso de Dados',
        data_usage_desc: 'Exibir uso de dados & velocidade em tempo real',
        dark_mode: 'Modo Escuro',
        dark_mode_desc: 'Especificar o modo de exibição do aplicativo',
        lang: 'Idioma',
        lang_desc: 'Alterar o idioma da interface do aplicativo',
        open_login: 'Iniciar ao logar',
        open_login_desc: 'Abrir na inicialização do sistema',
        auto_connect: 'Conexão Automática',
        auto_connect_desc: 'Conectar ao abrir o aplicativo',
        system_tray: 'Bandeja do Sistema',
        system_tray_desc: 'Não colocar o ícone do programa na barra de tarefas',
        force_close: 'Forçar Fechamento',
        force_close_desc: 'Não permanecer na bandeja do sistema ao sair',
        shortcut: 'Atalho',
        shortcut_desc: 'Atalhos na página inicial',
        restore: 'Restaurar',
        restore_desc: 'Aplicar configurações padrão do aplicativo',
        scanner: 'Configurações do Scanner',
        scanner_alert: 'O scanner é ativado se você estiver usando o endereço de endpoint padrão.',
        scanner_ip_type: 'Tipo de Endpoint',
        scanner_ip_type_auto: 'Automático',
        scanner_ip_type_desc: 'Para encontrar o IP do endpoint',
        scanner_rtt: 'Intervalo',
        scanner_rtt_default: 'Padrão',
        scanner_rtt_desc: 'Limite de RTT do scanner',
        scanner_reserved: 'Reservado',
        scanner_reserved_desc: 'Substituir valor reservado do wireguard',
        routing_rules: 'Lista Negra',
        routing_rules_desc: 'Impedir o tráfego de passar pelo warp',
        routing_rules_disabled: 'Desativado',
        routing_rules_items: 'Itens',
        profile: 'Perfil',
        profile_desc: 'Endpoints salvos por você',
        singbox: 'Configurações do Singbox',
        close_singbox: 'Parar operação',
        close_singbox_desc: 'Fechar sing-box automaticamente ao desconectar',
        close_helper: 'Parar assistente',
        close_helper_desc: 'Fechar assistente automaticamente ao sair',
        mtu: 'Valor MTU',
        mtu_desc: 'Definir a Unidade Máxima de Transmissão',
        geo_block: 'Bloqueio',
        geo_block_desc: 'Anúncios, Malware, Phishing e Mineração de Criptomoedas',
        geo_rules_ip: 'Roteamento IP',
        geo_rules_ip_desc: 'Aplicação das regras GeoIP',
        geo_rules_site: 'Roteamento Web',
        geo_rules_site_desc: 'Aplicação das regras GeoSite',
        more_helper: 'Configurações do Assistente',
        singbox_log: 'Registro',
        singbox_log_desc: 'Definir Nível de Registro',
        singbox_stack: 'Pilha',
        singbox_stack_desc: 'Definir Tipo de Pilha',
        singbox_strict_route: 'Rota Rigorosa',
        singbox_strict_route_desc: 'Definir Status da Rota Rigorosa',
        singbox_sniff: 'Sniffing',
        singbox_sniff_desc: 'Ativar Sniffing',
        singbox_sniff_override: 'Sobrescrever Destino',
        singbox_sniff_override_desc: 'Definir destino sobrescrito para Sniffing',
        singbox_udp_direct: 'UDP Direto',
        singbox_udp_direct_desc: 'Ativar UDP Direto'
    },
    tabs: {
        home: 'Conectar',
        warp: 'Warp',
        network: 'Rede',
        scanner: 'Scanner',
        app: 'Aplicativo',
        singbox: 'Caixa de Canto'
    },
    modal: {
        endpoint_title: 'Endpoint',
        license_title: 'Licença',
        license_desc:
            'O programa não precisa necessariamente de uma licença Warp para rodar, mas se você quiser, pode inserir sua licença aqui.',
        license_clear: 'Limpar',
        port_title: 'Porta do Proxy',
        restore_title: 'Restaurar Alterações',
        restore_desc:
            'Ao confirmar a operação de restauração, todas as configurações do programa voltarão ao estado padrão e sua conexão será desconectada.',
        routing_rules_sample: 'Exemplo',
        routing_rules_alert_tun:
            'Apenas as regras de roteamento para domínio, ip e aplicativo afetarão a configuração do Tun.',
        routing_rules_alert_system:
            'Exceto pela regra de roteamento de aplicativo, as outras regras afetarão a configuração do Proxy do Sistema.',
        endpoint_default: 'Padrão',
        endpoint_suggested: 'Sugerido',
        endpoint_latest: 'Mais Recente',
        endpoint_update: 'Receber endpoints sugeridos',
        endpoint_paste: 'Colar endpoint ativo',
        profile_title: 'Perfil',
        profile_name: 'Título',
        profile_endpoint: 'Endpoint',
        profile_limitation: (value) => `Você pode adicionar no máximo ${value} endpoints.`,
        mtu_title: 'Valor MTU',
        mtu_desc:
            'A Unidade Máxima de Transmissão (MTU) refere-se ao tamanho máximo dos pacotes de dados, que deve ser definido entre 1000 e 9999.',
        confirm: 'Confirmo',
        update: 'Atualizar',
        cancel: 'Cancelar'
    },
    log: {
        title: 'Log do Aplicativo',
        desc: 'Se um log for criado pelo programa, ele será exibido aqui.',
        error_invalid_license: 'A licença inserida não é válida; Remova-a.',
        error_too_many_connected: 'O limite de uso da licença foi atingido; Remova-a.',
        error_access_denied: 'Execute o programa como Administrador.',
        error_failed_set_endpoint:
            'Verifique ou substitua o valor do endpoint, ou tente novamente.',
        error_warp_identity: 'Erro de autenticação no Cloudflare; Tente novamente.',
        error_script_failed: 'O programa encontrou um erro; Tente novamente.',
        error_object_null: 'O programa encontrou um erro; Tente novamente.',
        error_port_already_in_use: (value) =>
            `A porta ${value} está sendo usada por outro programa; Altere-a.`,
        error_port_socket: 'Use outra porta.',
        error_port_restart: 'A porta está em uso; reiniciando ...',
        error_unknown_flag: 'Um comando inválido foi executado em segundo plano.',
        error_deadline_exceeded: 'Tempo limite de conexão esgotado; Tente novamente.',
        error_configuration_encountered: 'Erro na configuração do proxy!',
        error_desktop_not_supported: 'Ambiente desktop não suportado!',
        error_configuration_not_supported:
            'A configuração do proxy não é suportada no seu sistema operacional, mas você pode usar o Warp Proxy manualmente.',
        error_configuring_proxy: (value) => `Erro ao configurar proxy para ${value}!`,
        error_wp_not_found:
            'O arquivo warp-plus não está localizado junto ao pacote do aplicativo!',
        error_wp_stopped: 'O arquivo warp-plus encontrou um problema ao rodar!',
        error_connection_failed: 'Não foi possível conectar-se a 1.1.1.1.',
        error_country_failed: 'Não foi possível conectar-se ao país selecionado.',
        error_singbox_failed_stop: 'Falha ao parar a Caixa de Canto!',
        error_singbox_failed_start: 'Falha ao iniciar a Caixa de Canto!',
        error_wp_reset_peer: 'A conexão com Cloudflare foi interrompida inesperadamente!',
        error_failed_connection: 'Falha ao estabelecer conexão!',
        error_canceled_by_user: 'A operação foi cancelada pelo usuário.'
    },
    about: {
        title: 'Sobre o Aplicativo',
        desc: 'Este programa é uma versão não oficial, mas confiável do aplicativo Oblivion para Windows, Linux e Mac.\nO programa Oblivion Desktop foi modelado a partir da interface de usuário da versão original desenvolvida por Yousef Ghobadi. Foi escrito, preparado com o propósito de acesso gratuito à Internet, e qualquer mudança de nome ou uso comercial não é permitida.',
        slogan: 'Internet, para todos ou para ninguém!'
    },
    systemTray: {
        connect: 'Conectar',
        connecting: 'Conectando ...',
        connected: 'Conectado',
        disconnecting: 'Desconectando ...',
        settings: 'Configurações',
        settings_warp: 'Warp',
        settings_network: 'Rede',
        settings_scanner: 'Scanner',
        settings_app: 'Aplicativo',
        about: 'Sobre',
        log: 'Log',
        speed_test: 'Teste de velocidade',
        exit: 'Sair'
    },
    update: {
        available: 'Atualização Disponível',
        available_message: (value) =>
            `Uma nova versão do ${value} está disponível. Você quer atualizar agora?`,
        ready: 'Atualização Pronta',
        ready_message: (value) =>
            `Uma nova versão do ${value} está pronta. Ela será instalada após uma reinicialização. Você quer reiniciar agora?`
    },
    speedTest: {
        title: 'Teste de Velocidade',
        initializing: 'Inicializando teste de velocidade ...',
        click_start: 'Clique no botão para iniciar o teste de velocidade',
        error_msg: 'Ocorreu um erro durante o teste de velocidade. Por favor, tente novamente.',
        server_unavailable: 'Servidor de teste de velocidade indisponível',
        download_speed: 'Velocidade de Download',
        upload_speed: 'Velocidade de Upload',
        latency: 'Latência',
        jitter: 'Jitter'
    }
};
export default brazilianPortuguese;
