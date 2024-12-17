// Seleciona a seta
const arrow = document.getElementById('scrollToTop');

// Função para mostrar ou esconder a seta
function toggleArrowVisibility() {
  if (window.scrollY > 300) { // A partir de 300px de rolagem
    arrow.classList.add('visible');
  } else {
    arrow.classList.remove('visible');
  }
}

// Função para rolar a página para o topo
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Adiciona eventos de rolagem e clique
window.addEventListener('scroll', toggleArrowVisibility);
arrow.addEventListener('click', scrollToTop);

const initAnimationScroll = () => {
  const sections = document.querySelectorAll('.js-section')

  const windowHalfSize = window.innerHeight * 0.6

  const animateScroll = () => {
    sections.forEach(item => {
      const sectionTop = item.getBoundingClientRect().top

      const isSectionVisible = (sectionTop - windowHalfSize) < 0

      if (isSectionVisible) {
        item.classList.add('active')
      } else {
        item.classList.remove('active')
      }

    })

  }

  animateScroll()
  window.addEventListener('scroll', animateScroll)

}

initAnimationScroll()


// Abre a modal e configura os links
function openModal(siteUrl, repoUrl) {
  const modal = document.getElementById('modal');
  const iframe = document.getElementById('modal-iframe');
  const siteLink = document.getElementById('modal-site-link');
  const repoLink = document.getElementById('modal-repo-link');

  // Configura URLs
  iframe.src = siteUrl;
  siteLink.href = siteUrl;
  repoLink.href = repoUrl;

  // Exibe a modal
  modal.style.display = 'flex';
}

// Fecha a modal e limpa o conteúdo do iframe
function closeModal() {
  const modal = document.getElementById('modal');
  const iframe = document.getElementById('modal-iframe');

  // Oculta a modal
  modal.style.display = 'none';

  // Limpa o iframe
  iframe.src = '';
}