const btn = document.getElementById('send');

btn.addEventListener('click', function(e) {
    e.preventDefault();

    const name = document.getElementById('texto')

    var value = texto.value;
    var value = value.toLowerCase(); //coverte para letras minúculas
    var value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); //remover todos os acentos
    value = value.replace('/', " "); //remover barras (/)
    value = value.replace('-', " "); //remover hífens (-)
    value = value.replace('.', ""); //remover pontos (.)
    var value = value.trim(); //remover espaços no inicio e no final
    
    //document.getElementById('result').innerHTML = value;

// CONDICIONAIS 

// MÓDULO COMERCIAL

    if (value == 'orcamento pedido' || value == 'pedido contrato' || value == 'montagem de carga'){
        document.getElementById('result').innerHTML = 'Comercial > Procedimentos';
    }
    else if (value == 'representante' || value == 'tipo entrega' || value == 'tabela preco' || value == 'transportador'){
        document.getElementById('result').innerHTML = 'Comercial > Cadastros';
    }
    else if (value == 'acompanhamento venda' || value == 'venda produtos' || value == 'comissao' || value == 'venda analitico cliente' || value == 'resultado venda' || value == 'rentabilidade produto' || value == 'pedidos bonificados' || value == 'faturamento nota fiscal' || value == 'faturamento tipo mov' || value == 'acompanhamento entrega' || value == 'rentabilidade categoria' || value == 'comparativo categoria' || value == 'venda categoria' || value == 'comparativo produto' || value == 'previsao entrega' || value == 'comissao contratos' || value == 'performance'){
        document.getElementById('result').innerHTML = 'Comercial > Relatórios';
    }

// MÓDULO ENGENHARIA
    
    else if (value == 'planilha orcamento'){
        document.getElementById('result').innerHTML = 'Engenharia > Orçamento > Procedimentos'
    }
    else if (value == 'cadastro insumos' || value == 'cadastro composicoes'){
        document.getElementById('result').innerHTML = 'Engenharia > Orçamento > Cadastros'
    }
    else if (value == 'orcamento sintetico' || value == 'orcamento analitico' || value == 'curva abc insumos' || value == 'curva abc composições'){
        document.getElementById('result').innerHTML = 'Engenharia > Orçamento > Relatórios'
    }
    else if (value == 'fisico financeiro'){
        document.getElementById('result').innerHTML = 'Engenharia > Planejamento > Relatórios > Físico/Financeiro'
    }
    else if (value == 'boletim producao' || value == 'painel acomp  obras' || value == 'boletim desp informada'){
        document.getElementById('result').innerHTML = 'Engenharia > Acompanhamento > Procedimentos'
    }
    else if (value == 'atividades apontamento' || value == 'cadastro relatorio mensal'){
        document.getElementById('result').innerHTML = 'Engenharia > Acompanhamento > Cadastros'
    }
    else if (value == 'boletim mao obra'){
        document.getElementById('result').innerHTML = 'Engenharia > Acompanhamento > Procedimentos <br><br> OU <br><br> Engenharia > Acompanhamento > Relatórios'
    }
    else if (value == 'diario obras'){
        document.getElementById('result').innerHTML = 'Engenharia > Acompanhamento > Procedimentos <br><br> OU <br><br> Engenharia > Acompanhamento > Relatórios'
    }

    else if (value == 'apropriacao custo'){
        document.getElementById('result').innerHTML = 'Engenharia > Acompanhamento > Relatórios'
    }
    else if (value == 'contratos'){
        document.getElementById('result').innerHTML = 'Engenharia > Gestão Contratos'
    }
    else if (value == 'relatorio medicao'){
        document.getElementById('result').innerHTML = 'Engenharia > Gestão Contratos > Relatórios'
    }
    else if (value == 'boletim medicao'){
        document.getElementById('result').innerHTML = 'Engenharia > Gestão Contratos <br><br> OU <br><br> Engenharia > Gestão Contratos > Relatórios'
    }

    else if (value == 'contrato terceiros' || value == 'boletim terceiros'){
        document.getElementById('result').innerHTML = 'Engenharia > Gestão Terceiros'
    }    
    
    else if (value == 'cadastro registro fotografico' || value == 'cadastro de informes' || value == 'pga' || value == 'cadastro relatorio m ambiental' || value == 'cadastro de licenças' || value == 'cadastro de art'){
        document.getElementById('result').innerHTML = 'Engenharia > Gestão Ambiental'
    }
    else if (value == 'relatorios informes ambientais'){
        document.getElementById('result').innerHTML = 'Engenharia > Gestão Ambiental > Relatórios'
    }
    
// MÓDULO FINANCEIRO
    
    else if (value == 'forma pagamento' || value == 'plano de conta' || value == 'condicoes de pagamento'){
        document.getElementById('result').innerHTML = 'Financeiro > Cadastros'
    }
    
    else if (value == 'inclusao de contas a pagar' || value == 'aprovacao de pagamentos' || value == 'processamento cnab'){
        document.getElementById('result').innerHTML = 'Financeiro > Contas a Pagar'
    }
    
    else if (value == 'contas a pagar   entidades' || value == 'contas a pagar   data'){
        document.getElementById('result').innerHTML = 'Financeiro > Contas a Pagar > Relatórios'
    }
    
    else if (value == 'inclusao contas a receber'){
        document.getElementById('result').innerHTML = 'Financeiro > Contas a Receber'
    }
    
    else if (value == 'contas a receber   entidades' || value == 'contas a receber   data'){
        document.getElementById('result').innerHTML = 'Financeiro > Contas a Receber > Relatórios'
    }
    
    else if (value == 'adiantamento financeiro' || value == 'conciliacao adiantamento'){
        document.getElementById('result').innerHTML = 'Financeiro > Adiantamento Financeiro'
    }
    
    else if (value == 'adiantamento conciliados'){
        document.getElementById('result').innerHTML = 'Financeiro > Adiantamento Financeiro > Relatórios'
    }
    
    else if (value == 'manut pagar receber' || value == 'remanejamento a pagar' || value == 'remanejamento a receber'){
        document.getElementById('result').innerHTML = 'Financeiro > Manutenção Financeiro'
    }
    
    else if (value == 'movimento caixa' || value == 'transferencia contas' || value == 'fluxo caixa'){
        document.getElementById('result').innerHTML = 'Financeiro > Movimento Caixa'
    }
    
    else if (value == 'atividades   sintetico' || value == 'despesas   sintetico' || value == 'despesas   analitico' || value == 'atividades   analitico' || value == 'conta   sintetico' || value == 'demostrativo resultado'){
        document.getElementById('result').innerHTML = 'Financeiro > Relatórios'
    }
    
    else if (value == 'previsao fluxo caixa' || value == 'relatorio fluxo caixa'){
        document.getElementById('result').innerHTML = 'Financeiro > Fluxo de Caixa'
    }
    
    else if (value == 'entrada nfe' || value == 'movimentacao saida' || value == 'movimentacao entrada' || value == 'movimentacao saida   nfs-e' || value == 'movimentacao saida   nfc-e'){
        document.getElementById('result').innerHTML = 'Gestão Fiscal'
    }
    

// MÓDULO GESTÃO FISCAL

    else if (value == 'icms   cfop' || value == 'icms   documento'){
        document.getElementById('result').innerHTML = 'Gestão Fiscal > Relatórios > Mov Saída - ICMS'
    }
    else if (value == 'pis cofins   cfop' || value == 'pis cofins   documento'){
        document.getElementById('result').innerHTML = 'Gestão Fiscal > Relatórios > Mov Saída - PIS/COFINS'
    }
    
    else if (value == 'pis cofins'){
        document.getElementById('result').innerHTML = 'Gestão Fiscal > Relatórios > Mov Saída - PIS/COFINS <br><br> OU <br><br> Gestão Fiscal > Cadastros'
    }
    
    else if (value == 'nota fiscal' || value == 'carta correcao' || value == 'carta de correcao'){
        document.getElementById('result').innerHTML = 'Gestão Fiscal > Relatórios > Nf-e'
    }
    
    else if (value == 'situacao tributaria' || value == 'tipo movimentacao' || value == 'mv.a' || value == 'pauta fiscal' || value == 'mva'){
        document.getElementById('result').innerHTML = 'Gestão Fiscal > Cadastros'
    }
    
    else if (value == 'nf e' || value == 'nfs e' || value == 'nfc e' || value == 'manifestacao do destinatario' || value == 'inutilizacao nf e'){
        document.getElementById('result').innerHTML = 'Gestão Fiscal > Central Controle'
    }
    

// MÓDULO GESTÃO DE ATIVOS

    else if (value == 'boletim frete apropriacao' || value == 'boletim betoneira' || value == 'boletim bomba' || value == 'boletim frete'){
        document.getElementById('result').innerHTML = 'Gestão Ativos > Apropriação'
    }
    
    else if (value == 'perdas'){
        document.getElementById('result').innerHTML = 'Gestão Ativos > Apropriação > Cadastros'
    }
    
    else if (value == 'mapa analitico' || value == 'custo equipamentos' || value == 'media consumo' || value == 'fretes' || value == 'carregamento boletim' || value == 'mapa analitico equipamento' || value == 'betoneira' || value == 'bomba'){
        document.getElementById('result').innerHTML = 'Gestão Ativos > Apropriação > Relatórios'
    }
    
    else if (value == 'boletim equipamento'){
        document.getElementById('result').innerHTML = 'Gestão de Ativos > Apropriação <br><br> OU <br><br> Gestão de Ativos > Apropriação > Relatórios'
    }
    
    else if (value == 'ativo proprio' || value == 'ativo terceiros'){
        document.getElementById('result').innerHTML = 'Gestão de Ativos > Patrimônio > Cadastros'
    }
    
    else if (value == 'patrimonio'){
        document.getElementById('result').innerHTML = 'Gestão Ativos > Patrimônio > Relatórios'
    }
    
    else if (value == 'cadastro aluguel'){
        document.getElementById('result').innerHTML = 'Gestão Ativos > Gestão Aluguel > Cadastros'
    }
    
    else if (value == 'resultado equipamento' || value == 'relatorio aluguel'){
        document.getElementById('result').innerHTML = 'Gestão Ativos > Gestão Aluguel > Relatórios'
    }
    

// MÓDULO SUPRIMENTOS

    else if (value == 'requisicao compras' || value == 'cotacao compras' || value == 'pedido compras' || value == 'acompanhamento' || value == 'cotacao'){
        document.getElementById('result').innerHTML = 'Suprimentos > Compras'
    }
    
    else if (value == 'comprados' || value == 'requisitante'){
        document.getElementById('result').innerHTML = 'Suprimentos > Compras > Cadastros'
    }
    
    else if (value == 'historico compras' || value == 'requisicao compras'){
        document.getElementById('result').innerHTML = 'Suprimentos > Compras > Relatórios'
    }
    
    else if (value == 'auditoria estoque' || value == 'baixa estoque' || value == 'inventario fiscal' || value == 'transferencia estoque'){
        document.getElementById('result').innerHTML = 'Suprimentos > Estoque'
    }
    
    else if (value == 'local estoque'){
        document.getElementById('result').innerHTML = 'Suprimentos > Estoque > Cadastros'
    }
    
    else if (value == 'posicao estoque' || value == 'razao estoque' || value == 'estoque minimo'){
        document.getElementById('result').innerHTML = 'Suprimentos > Estoque > Relatórios'
    }
    

// MÓDULO PCP

    else if (value == 'mao obra producao' || value == 'producao terceiro'){
        document.getElementById('result').innerHTML = 'PCP > Cadastros'
    }
    
    else if (value == 'ordem de producao'){
        document.getElementById('result').innerHTML = 'PCP > Procedimentos'
    }
    else if (value == 'ficha tecnica'){
        document.getElementById('result').innerHTML = 'PCP > Cadastros <br><br> OU <br><br> PCP > Relatórios'
    }
    
    else if (value == 'demostrativo resultado' || value == 'ficha tecnica' || value == 'ficha tecnica pedido' || value == 'analise producao' || value == 'analise producao meta' || value == 'ficha tecnica x pedido' || value == 'analise producao x meta' || value == 'baixa estoque' || value == 'baixa estoque producao' || value == 'estoque materia prima' || value == 'estoque mat prima' || value == 'produtos produzidos' || value == 'estoque produto' || value == 'estoque produto intermediario' || value == 'estoque prod intermediario'){
        document.getElementById('result').innerHTML = 'PCP > Relatórios'
    }
    

// MÓDULO GERENCIAMENTO ELETRONICO

    else if (value == 'gerenciamento elet docs.' || value == 'ged' || value == 'ge.d'){
        document.getElementById('result').innerHTML = 'G.E.D'
    }
    

// MÓDULO INDUSTRIALIZAÇÃO

    else if (value == 'produtos' || value == 'grupo produtos' || value == 'etapas producao' || value == 'tipo produtos' || value == 'linha producao' || value == 'linhas producao' || value == 'composicao' || value == 'familia produto'){
        document.getElementById('result').innerHTML = 'Industrialização > Cadastros'
    }

    else if (value == 'un medida' || value == 'unidade medida' || value == 'unidade de medida'){
        document.getElementById('result').innerHTML = 'Industrialização > Cadastros <br><br> OU <br><br> Geral > Cadastros'
    }
    
    else if (value == 'relatorio composicao'){
        document.getElementById('result').innerHTML = 'Industrializacao > Relatórios'
    }
  
    
// MÓDULO WORKFLOW

    else if (value == 'minhas pendencias' || value == 'grade aprovacao'){
        document.getElementById('result').innerHTML = 'WorkFlow'
    }
    

// MÓDULO GERAL

    else if (value == 'entidades' || value == 'feriados' || value == 'marcas' || value == 'despesas' || value == 'atividades'){
        document.getElementById('result').innerHTML = 'Geral > Cadastros'
    }
    
    else if (value == 'cadastro entidades' || value == 'cadastro produtos'){
        document.getElementById('result').innerHTML = 'Geral > Relatórios'
    }
    

// MÓDULO SISTEMA

    else if (value == 'senha' || value == 'trocar senha' || value == 'acompanhamento email'){
        document.getElementById('result').innerHTML = 'Sistema'
    }
    
    else if (value == 'acesso   empreendimento' || value == 'permissoes' || value == 'usuarios' || value == 'empresa'){
        document.getElementById('result').innerHTML = 'Sistema > Cadastros'
    } else {
        document.getElementById('result').innerHTML = 'não encontrado';
      }   

    }
)