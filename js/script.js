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