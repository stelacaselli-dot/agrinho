// ============================================
// DADOS DO APLICATIVO
// ============================================

const SOLAR_TASKS = [
    {
        id: 's1',
        title: 'Instalar Painel Solar no Celeiro',
        description: 'Posicione painéis fotovoltaicos no telhado do celeiro para alimentar equipamentos elétricos e reduzir o custo de energia.',
        icon: 'sun.max.fill',
        points: 50,
        status: 'pending',
    },
    {
        id: 's2',
        title: 'Monitorar Geração Diária',
        description: 'Registre a produção de energia solar do dia e compare com o consumo da fazenda para identificar oportunidades de economia.',
        icon: 'chart.bar.fill',
        points: 20,
        status: 'pending',
    },
    {
        id: 's3',
        title: 'Limpar os Painéis Solares',
        description: 'Remova poeira, folhas e resíduos dos painéis para garantir máxima eficiência na captação de energia solar.',
        icon: 'sun.max.fill',
        points: 15,
        status: 'pending',
    },
    {
        id: 's4',
        title: 'Instalar Sistema de Bombeamento Solar',
        description: 'Utilize energia solar para bombear água de irrigação, eliminando o uso de combustível fóssil nas bombas.',
        icon: 'drop.fill',
        points: 60,
        status: 'pending',
    },
    {
        id: 's5',
        title: 'Conectar à Rede Elétrica (Net Metering)',
        description: 'Configure a injeção de excedente de energia solar na rede elétrica para gerar créditos e reduzir a conta de luz.',
        icon: 'bolt.fill',
        points: 80,
        status: 'pending',
    },
    {
        id: 's6',
        title: 'Instalar Cerca Elétrica Solar',
        description: 'Alimente a cerca elétrica da propriedade com energia solar, protegendo o rebanho sem depender da rede elétrica.',
        icon: 'bolt.fill',
        points: 35,
        status: 'pending',
    },
    {
        id: 's7',
        title: 'Capacitar Funcionários em Energia Solar',
        description: 'Realize uma oficina para ensinar os trabalhadores rurais sobre o funcionamento e manutenção dos sistemas solares.',
        icon: 'person.fill',
        points: 40,
        status: 'pending',
    },
];

const BIOMASS_CHALLENGES = [
    {
        id: 'b1',
        title: 'Coletar Resíduos de Colheita',
        description: 'Junte palha, bagaço e outros resíduos vegetais da colheita para uso como biomassa energética.',
        level: 'facil',
        icon: 'leaf.fill',
        points: 30,
        status: 'active',
    },
    {
        id: 'b2',
        title: 'Construir Biodigestor Simples',
        description: 'Monte um biodigestor para transformar esterco animal em biogás para cozinhar e gerar energia na propriedade.',
        level: 'medio',
        icon: 'flame.fill',
        points: 70,
        status: 'locked',
    },
    {
        id: 'b3',
        title: 'Produzir Briquetes de Biomassa',
        description: 'Compacte resíduos agrícolas em briquetes para substituir lenha e carvão no aquecimento e secagem de grãos.',
        level: 'medio',
        icon: 'flame.fill',
        points: 55,
        status: 'locked',
    },
    {
        id: 'b4',
        title: 'Instalar Caldeira a Biomassa',
        description: 'Substitua caldeiras a óleo por caldeiras que utilizam biomassa agrícola, reduzindo custos e emissões de CO₂.',
        level: 'dificil',
        icon: 'flame.fill',
        points: 100,
        status: 'locked',
    },
    {
        id: 'b5',
        title: 'Mapear Resíduos da Fazenda',
        description: 'Identifique e quantifique todos os resíduos orgânicos da propriedade com potencial energético.',
        level: 'facil',
        icon: 'leaf.fill',
        points: 25,
        status: 'active',
    },
    {
        id: 'b6',
        title: 'Gerar Biogás do Esterco',
        description: 'Implante sistema de captação de biogás do esterco bovino para geração de energia elétrica na fazenda.',
        level: 'dificil',
        icon: 'bolt.fill',
        points: 120,
        status: 'locked',
    },
];

const ENERGY_SOURCES = [
    {
        id: 'e1',
        name: 'Energia Solar',
        icon: '☀️',
        type: 'solar',
        shortDesc: 'Captação da luz do sol para gerar eletricidade e calor.',
        fullDesc: 'A energia solar fotovoltaica converte a luz solar diretamente em eletricidade por meio de painéis solares. No agronegócio, é amplamente usada para irrigação, iluminação, cercas elétricas e redução da conta de energia.',
        benefits: [
            'Reduz até 90% da conta de energia elétrica',
            'Baixo custo de manutenção',
            'Funciona em regiões remotas sem rede elétrica',
            'Retorno do investimento em 3 a 7 anos',
        ],
        usage: 'Painéis fotovoltaicos, aquecimento solar de água, bombeamento solar',
    },
    {
        id: 'e2',
        name: 'Biomassa',
        icon: '🌿',
        type: 'biomass',
        shortDesc: 'Energia gerada a partir de resíduos orgânicos e vegetais.',
        fullDesc: 'A biomassa engloba o uso de resíduos agrícolas, florestais e animais para geração de energia. No campo, inclui bagaço de cana, palha de arroz, esterco animal e resíduos de madeira, transformados em calor, eletricidade ou biocombustíveis.',
        benefits: [
            'Aproveita resíduos que seriam descartados',
            'Reduz emissões de metano do esterco',
            'Gera renda adicional com venda de energia',
            'Melhora a gestão de resíduos da fazenda',
        ],
        usage: 'Caldeiras, biodigestores, briquetes, biogás',
    },
    {
        id: 'e3',
        name: 'Energia Eólica',
        icon: '💨',
        type: 'wind',
        shortDesc: 'Geração de energia pelo movimento do vento.',
        fullDesc: 'Pequenos aerogeradores podem ser instalados em propriedades rurais para complementar a geração solar, especialmente em regiões com ventos constantes. São ideais para locais afastados da rede elétrica.',
        benefits: [
            'Complementa a energia solar (funciona à noite)',
            'Ideal para regiões com ventos regulares',
            'Baixo impacto ambiental',
            'Vida útil de 20 a 25 anos',
        ],
        usage: 'Aerogeradores de pequeno porte, bombas eólicas',
    },
    {
        id: 'e4',
        name: 'Biogás',
        icon: '🔥',
        type: 'biogas',
        shortDesc: 'Gás combustível produzido pela decomposição de matéria orgânica.',
        fullDesc: 'O biogás é produzido em biodigestores a partir do esterco animal e resíduos orgânicos. Pode substituir o GLP (gás de cozinha), gerar eletricidade ou ser purificado para uso como biometano em veículos.',
        benefits: [
            'Substitui GLP e diesel na fazenda',
            'Reduz odores e poluição do esterco',
            'Gera biofertilizante como subproduto',
            'Pode gerar créditos de carbono',
        ],
        usage: 'Biodigestores, geradores a biogás, fogões rurais',
    },
    {
        id: 'e5',
        name: 'Energia Hidráulica',
        icon: '💧',
        type: 'hydro',
        shortDesc: 'Geração de energia pelo fluxo de água em rios e córregos.',
        fullDesc: 'Pequenas Centrais Hidrelétricas (PCHs) e microcentrais podem aproveitar rios e córregos da propriedade para gerar energia elétrica de forma contínua, independente de sol ou vento.',
        benefits: [
            'Geração contínua 24 horas por dia',
            'Baixo custo operacional',
            'Aproveitamento de recursos hídricos locais',
            'Alta durabilidade (50+ anos)',
        ],
        usage: 'Microcentrais hidrelétricas, rodas d\'água, turbinas',
    },
];

// ============================================
// ESTADO DO APLICATIVO
// ============================================

let appState = {
    tasks: [...SOLAR_TASKS],
    challenges: [...BIOMASS_CHALLENGES],
    currentScreen: 'home',
};

// ============================================
// PERSISTÊNCIA (LocalStorage)
// ============================================

const STORAGE_KEY_TASKS = 'energiaVerde_tasks';
const STORAGE_KEY_CHALLENGES = 'energiaVerde_challenges';

function loadState() {
    const savedTasks = localStorage.getItem(STORAGE_KEY_TASKS);
    const savedChallenges = localStorage.getItem(STORAGE_KEY_CHALLENGES);
    
    if (savedTasks) {
        try {
            appState.tasks = JSON.parse(savedTasks);
        } catch (e) {
            console.error('Erro ao carregar tarefas:', e);
        }
    }
    
    if (savedChallenges) {
        try {
            appState.challenges = JSON.parse(savedChallenges);
        } catch (e) {
            console.error('Erro ao carregar desafios:', e);
        }
    }
}

function saveState() {
    localStorage.setItem(STORAGE_KEY_TASKS, JSON.stringify(appState.tasks));
    localStorage.setItem(STORAGE_KEY_CHALLENGES, JSON.stringify(appState.challenges));
}

// ============================================
// CÁLCULOS
// ============================================

function getStats() {
    const doneTasks = appState.tasks.filter(t => t.status === 'done').length;
    const totalTasks = appState.tasks.length;
    const completedChallenges = appState.challenges.filter(c => c.status === 'completed').length;
    const totalChallenges = appState.challenges.length;
    const activeChallenges = appState.challenges.filter(c => c.status === 'active').length;
    const lockedChallenges = appState.challenges.filter(c => c.status === 'locked').length;
    
    const totalPoints = 
        appState.tasks.filter(t => t.status === 'done').reduce((sum, t) => sum + t.points, 0) +
        appState.challenges.filter(c => c.status === 'completed').reduce((sum, c) => sum + c.points, 0);
    
    return {
        doneTasks,
        totalTasks,
        completedChallenges,
        totalChallenges,
        activeChallenges,
        lockedChallenges,
        totalPoints,
        solarPct: totalTasks === 0 ? 0 : Math.round((doneTasks / totalTasks) * 100),
        biomassPct: totalChallenges === 0 ? 0 : Math.round((completedChallenges / totalChallenges) * 100),
    };
}

// ============================================
// RENDERIZAÇÃO
// ============================================

function updateStats() {
    const stats = getStats();
    
    // Home screen
    document.getElementById('totalPointsDisplay').textContent = stats.totalPoints;
    document.getElementById('tasksDoneDisplay').textContent = stats.doneTasks;
    document.getElementById('tasksUnitDisplay').textContent = `/${stats.totalTasks}`;
    document.getElementById('challengesDoneDisplay').textContent = stats.completedChallenges;
    document.getElementById('challengesUnitDisplay').textContent = `/${stats.totalChallenges}`;
    document.getElementById('pointsDisplay').textContent = stats.totalPoints;
    
    // Progress bars
    document.getElementById('solarPctDisplay').textContent = `${stats.solarPct}%`;
    document.getElementById('solarProgressFill').style.width = `${stats.solarPct}%`;
    document.getElementById('solarSubDisplay').textContent = `${stats.doneTasks} de ${stats.totalTasks} tarefas concluídas`;
    
    document.getElementById('biomassPctDisplay').textContent = `${stats.biomassPct}%`;
    document.getElementById('biomassProgressFill').style.width = `${stats.biomassPct}%`;
    document.getElementById('biomassSubDisplay').textContent = `${stats.completedChallenges} de ${stats.totalChallenges} desafios completados`;
    
    // Quick access
    document.getElementById('solarPendingDisplay').textContent = `${stats.totalTasks - stats.doneTasks} pendentes`;
    document.getElementById('biomassPendingDisplay').textContent = `${stats.activeChallenges} ativos`;
    
    // Solar screen
    document.getElementById('solarHeaderPctDisplay').textContent = `${stats.solarPct}%`;
    document.getElementById('solarHeaderProgressDisplay').textContent = `${stats.doneTasks} de ${stats.totalTasks} tarefas concluídas`;
    document.getElementById('solarHeaderProgressFill').style.width = `${stats.solarPct}%`;
    
    // Biomassa screen
    document.getElementById('biomassaHeaderPctDisplay').textContent = `${stats.biomassPct}%`;
    document.getElementById('activeChallengesDisplay').textContent = stats.activeChallenges;
    document.getElementById('completedChallengesDisplay').textContent = stats.completedChallenges;
    document.getElementById('lockedChallengesDisplay').textContent = stats.lockedChallenges;
}

function renderSolarTasks() {
    const container = document.getElementById('solarTasksList');
    container.innerHTML = '';
    
    appState.tasks.forEach(task => {
        const isDone = task.status === 'done';
        const taskEl = document.createElement('div');
        taskEl.className = `task-card ${isDone ? 'done' : ''}`;
        taskEl.innerHTML = `
            <div class="task-checkbox">${isDone ? '✓' : ''}</div>
            <div class="task-content">
                <div class="task-title">${task.title}</div>
                <div class="task-desc">${task.description}</div>
                <div class="task-footer">
                    <span class="points-badge-small">+${task.points} pts</span>
                    ${isDone ? '<span class="done-badge">Concluída ✓</span>' : ''}
                </div>
            </div>
        `;
        taskEl.addEventListener('click', () => toggleTask(task.id));
        container.appendChild(taskEl);
    });
}

function renderChallenges() {
    const container = document.getElementById('challengesList');
    container.innerHTML = '';
    
    appState.challenges.forEach(challenge => {
        const challengeEl = document.createElement('div');
        const statusClass = challenge.status;
        challengeEl.className = `challenge-card ${statusClass}`;
        
        let statusIcon = '🌿';
        let actionBadge = '';
        
        if (challenge.status === 'locked') {
            statusIcon = '🔒';
            actionBadge = '<span class="level-badge" style="background-color: #F5F5F5; color: #757575; border: 1px solid #E0E0E0;">Toque para desbloquear</span>';
        } else if (challenge.status === 'active') {
            statusIcon = '🌿';
            actionBadge = '<span class="level-badge" style="background-color: #E3F2FD; color: #1565C0; border: 1px solid #90CAF9;">Toque para completar</span>';
        } else if (challenge.status === 'completed') {
            statusIcon = '✅';
            actionBadge = '<span class="level-badge" style="background-color: #E8F5E9; color: #2E7D32; border: 1px solid #A5D6A7;">Completado ✓</span>';
        }
        
        const levelClass = `level-${challenge.level}`;
        const levelLabel = challenge.level === 'facil' ? 'Fácil' : challenge.level === 'medio' ? 'Médio' : 'Difícil';
        
        challengeEl.innerHTML = `
            <div class="status-dot ${challenge.status}"></div>
            <div class="challenge-content">
                <div class="challenge-title">${statusIcon} ${challenge.title}</div>
                <div class="challenge-desc">${challenge.description}</div>
                <div class="challenge-footer">
                    <span class="level-badge ${levelClass}">${levelLabel}</span>
                    <span class="points-badge-small">+${challenge.points} pts</span>
                    ${actionBadge}
                </div>
            </div>
        `;
        challengeEl.addEventListener('click', () => toggleChallenge(challenge.id));
        container.appendChild(challengeEl);
    });
}

function renderSources() {
    const container = document.getElementById('sourcesList');
    container.innerHTML = '';
    
    ENERGY_SOURCES.forEach(source => {
        const sourceEl = document.createElement('div');
        sourceEl.className = `source-card ${source.type}`;
        
        sourceEl.innerHTML = `
            <div class="source-header">
                <div class="source-icon-circle">${source.icon}</div>
                <div style="flex: 1;">
                    <div class="source-name">${source.name}</div>
                    <div class="source-short">${source.shortDesc}</div>
                </div>
                <div class="expand-icon">▼</div>
            </div>
            <div class="source-expanded" style="display: none;">
                <div class="source-full-desc">${source.fullDesc}</div>
                <div class="benefits-title">✅ Benefícios para o Agro</div>
                ${source.benefits.map(b => `
                    <div class="benefit-row">
                        <div class="benefit-dot" style="background-color: ${getColorForType(source.type)};"></div>
                        <div class="benefit-text">${b}</div>
                    </div>
                `).join('')}
                <div class="usage-banner" style="background-color: ${getColorForType(source.type)}22;">
                    <div class="usage-label">🔧 Aplicações:</div>
                    <div class="usage-text">${source.usage}</div>
                </div>
            </div>
        `;
        
        sourceEl.addEventListener('click', () => {
            const expanded = sourceEl.querySelector('.source-expanded');
            const icon = sourceEl.querySelector('.expand-icon');
            const isOpen = expanded.style.display !== 'none';
            expanded.style.display = isOpen ? 'none' : 'block';
            icon.textContent = isOpen ? '▼' : '▲';
        });
        
        container.appendChild(sourceEl);
    });
}

function getColorForType(type) {
    const colors = {
        solar: '#FDD835',
        biomass: '#4CAF50',
        wind: '#0288D1',
        biogas: '#FF8F00',
        hydro: '#26C6DA',
    };
    return colors[type] || '#2E7D32';
}

// ============================================
// INTERAÇÕES
// ============================================

function toggleTask(taskId) {
    const task = appState.tasks.find(t => t.id === taskId);
    if (task) {
        task.status = task.status === 'done' ? 'pending' : 'done';
        saveState();
        updateStats();
        renderSolarTasks();
    }
}

function toggleChallenge(challengeId) {
    const challenge = appState.challenges.find(c => c.id === challengeId);
    if (challenge) {
        if (challenge.status === 'locked') {
            challenge.status = 'active';
        } else if (challenge.status === 'active') {
            challenge.status = 'completed';
        } else if (challenge.status === 'completed') {
            challenge.status = 'active';
        }
        saveState();
        updateStats();
        renderChallenges();
    }
}

function switchScreen(screenName) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show selected screen
    const screenId = screenName === 'home' ? 'home-screen' : `${screenName}-screen`;
    document.getElementById(screenId).classList.add('active');
    
    // Update tab buttons
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-screen="${screenName}"]`).classList.add('active');
    
    appState.currentScreen = screenName;
    
    // Scroll to top
    document.querySelector('.main-content').scrollTop = 0;
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Load state
    loadState();
    
    // Initial render
    updateStats();
    renderSolarTasks();
    renderChallenges();
    renderSources();
    
    // Tab buttons
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.addEventListener('click', () => {
            const screenName = btn.getAttribute('data-screen');
            switchScreen(screenName);
        });
    });
    
    // Quick access cards
    document.querySelectorAll('.quick-card').forEach(card => {
        card.addEventListener('click', () => {
            const screenName = card.getAttribute('data-screen');
            switchScreen(screenName);
        });
    });
});
