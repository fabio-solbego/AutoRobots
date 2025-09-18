# Documentação do Site “Automatize com Scripts & IA”

**Autor:** Fábio Solbego  
**Ano:** 2025  
**Website:** Local (ou deploy se houver URL)

---

## 1. Objetivo do Site
O site **“Automatize com Scripts & IA”** foi desenvolvido para apresentar serviços de automação para empresas, utilizando scripts personalizados, integração de APIs, bots de atendimento e relatórios automáticos.  

O site também demonstra exemplos práticos de automações, que podem ser acessados pelo botão **“Ver Exemplo de Automação”**.

---

## 2. Estrutura de Arquivos

| Arquivo | Descrição |
|---------|-----------|
| `page.html` | Página principal do site, contendo: cabeçalho, seção “Hero”, cards de serviços, botão para exemplo de automação, footer e botão WhatsApp flutuante. |
| `autoLembrete.html` | Página de exemplo de automação, com demonstração de gráficos animados e botão para voltar ao `page.html`. |
| `favicon.ico` | Ícone do site exibido na aba do navegador. |

---

## 3. Tecnologias Utilizadas
- **HTML5**: estrutura do site.  
- **CSS3**: estilização e responsividade (media queries).  
- **JavaScript**:  
  - Animação de fade-in nos cards.  
  - Partículas animadas na seção Hero.  
  - Redirecionamento de botões para WhatsApp e exemplos.  
- **Font Awesome**: ícones de serviços e redes sociais.  
- **WhatsApp API**: integração de botão para contato rápido.

---

## 4. Responsividade
- **Mobile:**  
  - Cabeçalho empilhado.  
  - Fontes e botões menores.  
  - Cards adaptados para largura de tela.  
- **Desktop:**  
  - Layout com flex e grid.  
  - Cards em duas ou mais colunas, dependendo do tamanho da tela.

---

## 5. Funcionalidades Principais
1. **Botão “Solicitar Orçamento”**  
   - Redireciona diretamente para o WhatsApp com mensagem pré-definida.  
   ```html
   <button onclick="window.location.href='https://wa.me/5551996495202?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.'">
     Solicitar Orçamento
   </button>
Seção Hero com partículas animadas

Canvas animado com partículas conectadas por linhas.

Interação com movimento do mouse.

Cards de Serviços com fade-in

Cada card aparece com animação ao entrar na tela.

Hover: eleva o card e aumenta a sombra.

Botão flutuante WhatsApp

Sempre visível no canto inferior direito.

<a href="https://wa.me/5551996495202?text=Olá!%20Gostaria%20de%20mais%20informações." class="whatsapp-float" target="_blank">
  <i class="fab fa-whatsapp"></i>
</a>

6. Estrutura HTML Principal (page.html)

<header>: Logo e menu de navegação.

<section class="hero">: Apresentação do site e botão de orçamento.

<section id="servicos" class="services">: Cards de serviços.

<section>: Botão de exemplo de automação.

<footer>: Contato, redes sociais e WhatsApp.

7. Personalização

Todas as cores, textos e ícones podem ser facilmente alterados no CSS ou HTML.

Links de WhatsApp e redes sociais configuráveis via atributo href.

8. Autor

Fábio Solbego – desenvolvimento, design, implementação e documentação.